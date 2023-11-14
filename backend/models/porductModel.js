const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  img : {
    type : String,
    require : [true, "please fill the img of your product"]
  },
  type : {
    type : String,
    require : [true, "please fill the type of your product"]
  },
  description : {
    type : String,
    require : [true, "please fill the description of your product"]
  },
  sizes : {
    type : String,
    require : [true, "please fill the sizes of your product"]
  },
  colors : {
    type : String,
    require : [true, "please fill the colors of your product"]
  },
  price : {
    type : String,
    require : [true, "please fill the price of your product"]
  },
  aviliables : {
    type : String,
    require : [true, "please fill how much aviliable your product"]
  },
  showcasing : {
    type : Boolean,
    require : [false]
  }
},
{
  timestamps : true
}
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;