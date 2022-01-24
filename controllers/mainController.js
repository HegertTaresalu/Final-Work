const User = require('../models/user');
const passport = require('passport');
const date = require("../getDate");
const Data = require("../models/data");

exports.getMainPage = (req,res) =>{
    /*
    Data.fetchData(data => {

        let today = date.getDate();


        res.render("index",{currentDay: today,})
    })
    
  */

    
    let today = date.getDate();


    res.render("index",{currentDay: today})

};


exports.getAdminPage = (req,res) =>{
    Data.fetchData(fileData => {
        console.log(fileData);
        if(req.isAuthenticated)
        {
            res.render("admin/admin",{currentData: fileData[0]})
        }
        else{
            res.render("register")
        }
    })
   
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
    
    const data = req.body;

    const newData = new Data({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth:req.body.dateOfBirth,
        currentResidence:req.body.nameOfSchool,
        nameOfSchool:req.body.nameOfSchool,
        technicalSkill:req.body.technicalSkill,
        softSkill:req.body.softSkill,
        dateOfGraduation:req.body.dateOfGraduation
    });
    console.log(req.body.firstName);

    newData.saveData();
    res.redirect("/");
    
};

