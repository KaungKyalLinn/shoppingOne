const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // file location
  destination : (req, file, cb) => {
    cb(null, "./public/upload");
  },
  // file name
  filename : (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

// checking file type and mime type
const checkFileType = (file, cb) => {
  // allowed file types
  const fileType = /jpeg|jpg|png|gif/;

  // ext check
  const extention = fileType.test(path.extname(file.originalname).toLowerCase());

  // mime type check
  const mimetype = fileType.test(file.mimetype);

  if(extention && mimetype){
    return cb(null, true)
  }else{
    cb("Error : images only ")
  }
}

const upload = multer({
  storage,
  limits : {fileSize : 1000000},
  fileFilter : function (req, file, cb) {
    checkFileType(file,cb)
  }
})

module.exports = upload;