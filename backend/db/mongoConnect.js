const mongoose = require("mongoose");

const dbConnect = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("data base connected : " + conn.connection.host);
  }
  catch (err) {
    console.log(err.massage)
    process.exit(1)
  }
}

module.exports = dbConnect;