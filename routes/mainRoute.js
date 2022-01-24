const express = require('express');
const mainController = require("../controllers/mainController");
//const date = require
const router = express.Router();

router.get("/signin", mainController.getSigninPage);
router.get("/", mainController.getMainPage);

router.get("/admin", mainController.getAdminPage);
router.post("/admin",mainController.postSignIn);


router.get("/register", mainController.getRegisterPage);
router.post("/register", mainController.postRegister);


router.post("/addData", mainController.postaddData);


module.exports = router

