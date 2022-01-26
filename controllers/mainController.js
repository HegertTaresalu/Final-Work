const User = require('../models/user');
const passport = require('passport');
const date = require("../getDate");
const Data = require("../models/data");

exports.getMainPage = (req,res) =>{
    
    Data.fetchData(fileData => {

        let today = date.getDate();

        res.render("index",{currentDay: today,currentData: fileData[0]})
    })
    
};


exports.getAdminPage = (req,res) =>{
    Data.fetchData(fileData => {
        console.log(fileData);
        if(req.isAuthenticated())
        {
            res.render("admin/admin",{currentData: fileData[0]})
        }
        else{
            res.redirect("signin")
        }
    })
   
};

exports.getSigninPage = (req,res) =>{
    res.render("signin");

};      
exports.getRegisterPage = (req,res) => {
    res.render("register");
};


exports.SignOut = (req,res) => {
    req.logout();   
    res.redirect("/");
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
                Data.fetchData(fileData => {
                    res.render("admin/admin",{currentData: fileData[0]})
                })




            })
        }
    })
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




exports.postaddData = (req,res) => {
    
    const newData = new Data(req.body.firstName,req.body.lastName,req.body.dateOfBirth,req.body.currentResidence,req.body.nameOfSchool,req.body.technicalSkill,req.body.softSkill,req.body.dateOfGraduation);
    newData.saveData();    
    res.redirect("/");

    
};

