const User = require('../models/user');
const passport = require('passport');
const ate = require("../getDate")
exports.getMainPage = (req,res) =>{
    let today = date.getDate();
    res.render("index", {dateToRender:today});
};

exports.getAdminPage = (req,res) =>{
    if(req.isAuthenticated)
    {
        res.render("admin")
    }
    else{
        res.render("register")
    }
};

exports.getSigninPage = (req,res) =>{
    res.render("signin");

};
exports.getRegisterPage = (req,res) => {
    res.render("register")
};

exports.postSignIn = (req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user,(error)=>{
        if(error){
            console.log(error)
            res.redirect("/login")
        }
        else{
            passport.authenticate("local")(req,res,()=>{
                res.render("admin");
            });
        }
    });
};




exports.postRegister = (req, res) => {
    User.register({username: req.body.username}, req.body.password, (error, user)=>{
        console.log(req.body.password)
        if(error){
            console.log(error);
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, ()=> {
                res.render('admin');
            });
        }
    });
};
