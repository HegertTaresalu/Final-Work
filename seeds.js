const mongoose = require("mongoose");
const Data = require("./models/data");


mongoose.connect('mongodb://localhost:27017/db', {useUnifiedTopology: true});

const seedPersonalInfo= [
    {
    firstName: "Hegert",
    lastName: "Taresalu",
    dateOfBirth : new Date(2004,04,10),
    currentResidence : "Tallinn"
    }
]

const seedSkills = [
    {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus",
    other: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus"
    }

]

const seedEducation = [
    {
        nameOfSchool: "Tallinna Laagna Gümnaasium",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus",
        dateOfGraduation: new Date(2020)

    },
    {
        nameOfSchool: "Tallinna TööstusharidusKeskus",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus",
        dateOfGraduation: "-"

    }


]

const seedDB = async () =>{
    await Data.personalInfo.deleteMany({});
    await Data.skills.deleteMany({});
    await Data.education.deleteMany({});
    await Data.personalInfo.insertMany({seedPersonalInfo})
    await Data.skills.insertMany({seedSkills});
    await Data.education.insertMany({seedEducation});
    console.log(Data)
    
};
seedDB().then(() =>{
    console.log("seed successful")
    mongoose.connection.close();

});
