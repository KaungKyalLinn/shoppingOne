const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const dbConnect = require("./db/mongoConnect");
const {ErrorHandling} = require("./middlewares/errorHandlingMiddleware");

dbConnect();

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static("./public"))

// product and admin routes
app.use("/products",require("./routes/productRoute"));
app.use("/admin",require("./routes/adminRoute"));

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
  })
}else{
  app.get("*", (req, res) => {
    res.send("please make sure in production");
  })
}

app.use(ErrorHandling)

app.listen(port, () => {
  console.log(`server start running at port ${port}`);
})
