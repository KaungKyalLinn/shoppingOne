const express = require("express")
const router = express.Router();
const admin = require("../controllers/adminController")
const {protect} = require("../middlewares/aulthMiddleware");
const upload = require("../middlewares/uploadimgMiddleware");

router.route("/register").post(admin.adminRegister);
router.route("/login").post(admin.adminLogin);
router.route("/dashboard").get(protect,admin.adminManage);
router.route("/dashboard/post").post(protect,upload.single("img"),admin.adminPost);
router.route("/dashboard/edit/:id").put(protect,admin.adminUpdate).delete(protect,admin.adminDelete)

module.exports = router;
