const express = require('express');
const mainController = require("../controllers/mainController");
const date = require
const router = express.Router();

router.get("/", mainController.getMainPage);

//router.get("/", mainController.getDate);


router.get("/admin", mainController.getAdminPage);


module.exports = router

