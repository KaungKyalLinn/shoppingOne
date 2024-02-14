const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const admin = require("../models/adminModel")

const protect = asyncHandler ( async (req,res,next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try{
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token , process.env.JWT_SECRET);
      const theAdmin = await admin.findById(decode.id).select("-password");
      req.user = theAdmin;
      next();
    }
    catch(err){
      res.status(401)
      throw new Error("Authorization failed");
    }
  }
  if(!token){
    res.status(401).json({massage : "there no token"})
  }
})

module.exports = {protect};