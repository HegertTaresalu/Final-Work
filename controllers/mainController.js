const User = require('../models/user');
const passport = require('passport');
const date = require("../getDate");
const Data = require("../models/data")

exports.getMainPage = (req,res) =>{
    let today = date.getDate();
    
    Data.education.find({}, function(err,education)
    {
        console.log(education)
        res.render("index");
    })
};

exports.getAdminPage = (req,res) =>{
    if(req.isAuthenticated)
    {
        res.render("admin/admin")
    }
    else{
        res.render("register")
    }
};

exports.getSigninPage = (req,res) =>{
    res.render("signin");

};
exports.getRegisterPage = (req,res) => {
    res.render("register");
};

exports.postSignIn = (req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user,(error)=>{
        if(error){
            console.log(error)
            res.redirect("/signin")
        }
        else{
            passport.authenticate("local")(req,res,()=>{
                res.render("admin/admin");
            });
        }
    });
};




exports.postRegister = (req, res) => {
    User.register({username: req.body.username}, req.body.password, (error, user)=>{
        if(error){
            console.log(error);
            res.redirect('/register');
        } else {
            console.log("render")
            passport.authenticate('local')(req, res, ()=> {
                res.render('admin/admin');
            });
        }
    });
};
