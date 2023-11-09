const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  name : {
    type : String,
    require : [true,"please fill the name"]
  },
  password : {
    type : String,
    require : [true, "please fill the password"]
  }
},
{
  timestamps : true,
})

const adminModel = mongoose.model("admin",adminSchema);

module.exports = adminModel;