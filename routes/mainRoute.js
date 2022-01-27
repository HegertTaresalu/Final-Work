const express = require('express');
const mainController = require("../controllers/mainController");
//const date = require
const router = express.Router();
const multer = require('multer');
const path = require("path")

let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './images');
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })
});



router.get("/signin", mainController.getSigninPage);
router.get("/", mainController.getMainPage);

router.get("/admin", mainController.getAdminPage);
router.post("/admin",mainController.postSignIn);


router.get("/register", mainController.getRegisterPage);
router.post("/register", mainController.postRegister);


router.post("/addData",upload.single("userFile"), mainController.postaddData);

router.get("/signOut", mainController.SignOut);

module.exports = router

