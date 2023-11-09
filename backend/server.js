const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const multer = require("multer");
const dbConnect = require("./db/mongoConnect");
const {ErrorHandling} = require("./middlewares/errorHandlingMiddleware");

dbConnect();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(express.static("./public/upload/"))

// product and admin routes
app.use("/products",require("./routes/productRoute"));
app.use("/admin",require("./routes/adminRoute"));

app.use(ErrorHandling)

app.listen(port, () => {
  console.log(`server start running at port ${port}`);
})
