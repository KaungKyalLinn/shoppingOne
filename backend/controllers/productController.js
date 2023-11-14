const asyncHandler = require("express-async-handler");
const products = require("../models/porductModel");

const getProducts = asyncHandler( async (req,res) => {
  const fetchProducts = await products.find().sort({ createdAt : "descending"});
  res.status(200).json(fetchProducts)
})

const theProducts = {
  getProducts,
}

module.exports = theProducts