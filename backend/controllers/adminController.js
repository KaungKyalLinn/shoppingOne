const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");
const productModel = require("../models/porductModel");


const adminRegister = asyncHandler(async (req,res) => {
  const {userName, password} = req.body;
  console.log("user name : " + userName);
  console.log("password : " + password)

  if(!userName || !password){
    res.status(400)
    throw new Error("there no data...")
  }

  // hash password and create admin user
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newAdmin = await adminModel.create({
    name : userName,
    password : hashPassword
  })
  res.json({
    name : newAdmin.name,
    token : tokenGenerate(newAdmin.id)
  });

})

const adminLogin = asyncHandler (async (req,res) => {
  const {userName,password} = req.body;
  if(!userName || !password){
    res.status(400)
    throw new Error("please fill the name and password")
  }
  
  const user = await adminModel.findOne({name : userName});

  if(!user){
    throw new Error("this user not exist")
  }

  if(user && await bcrypt.compare(password, user.password)){
    res.json({
      name: user.userName,
      token : tokenGenerate(user.id)
    })
  }else{
    throw new Error("wrong password")
  }
})

const adminManage = asyncHandler( async (req,res) => {
  if(!req.user){
    res.status(401)
    throw new Error("your not admin.. please login admin page first ...")
  }
  const products = await productModel.find();
  res.json(products)
})

// posting product
const adminPost = asyncHandler (async (req,res) => {
  const {img, type, description, sizes, colors, price, aviliables, showcasing} = req.body;

  if(!img || !type || !description || !sizes || !colors || !price || !aviliables){
    throw new Error("please fill all the fields")
  }

  if(type && description && sizes && colors && price && aviliables){
    const product = await productModel.create({
      img,
      type,
      description,
      sizes,
      colors,
      price,
      aviliables,
      showcasing
    });

    res.json(product)
  }else{
    throw new Error("something went wrong...")
  }
})

const adminUpdate = asyncHandler(async (req,res) => {
  const product = await productModel.findById(req.params.id);
  if(!product){
    res.status(400).json({massage : "product not found."})
  }
  if(product){
    const updateProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.status(200).json({updateProduct})
  }else{
    res.status(401).json({massage : "something went wrong..."})
  }
})

const adminDelete = asyncHandler(async (req,res) => {
  const theId = req.params.id;
  const makeSure = productModel.findById(theId);
  if(!makeSure){
    res.status(400)
    throw new Error("product not found")
  }
  await productModel.findByIdAndDelete(theId);
  res.status(200).json("delete success")
})

const tokenGenerate = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : "10d"})
}

module.exports = {adminRegister, adminLogin, adminManage, adminPost, adminUpdate, adminDelete};