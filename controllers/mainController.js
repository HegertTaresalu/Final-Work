const User = require ("../models/user")
const passport = require("passport")
const date = require("../getDate.js")

exports.getMainPage = (req,res) =>{
    let today = date.getDate();
    res.render("index", {dateToRender:today});
};

exports.getAdminPage = (req,res) =>{
    res.render("admin")

};

exports.getSigninPage = (req,res) =>{
    res.render("signin");

};