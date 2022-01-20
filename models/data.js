const mongoose = require("mongoose");


const personalInfoScheme = new mongoose.Schema({
firstName:String,
lastName:String,
dateOfBirth:{type: Date},
currentResidence :String

});



const skillSchema = new mongoose.Schema({
title:String,
description:String,
other:String
});

const educationSchema = new mongoose.Schema({
    nameOfSchool:String,
    description:String,
    dateOfGraduation:{type:Date}
});

module.exports = {
personalInfo :mongoose.model('personalInfo', personalInfoScheme),
education :mongoose.model('education', educationSchema),
skills :mongoose.model("skills",skillSchema)
}