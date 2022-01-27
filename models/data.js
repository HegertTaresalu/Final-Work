const fs = require("fs");
const path = require("path")
const FilePath = path.join(path.dirname(require.main.filename), "data", "data_.json")


module.exports = class myData{

    constructor(firstName, lastName,dateOfBirth,currentResidence,nameOfSchool,technicalSkill,softSkill,dateOfGraduation,userFile){
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
        this.currentResidence = currentResidence
        this.nameOfSchool = nameOfSchool
        this.technicalSkill = technicalSkill
        this.softSkill = softSkill
        this.dateOfGraduation = dateOfGraduation    
        this.userFile = userFile
    }

    saveData(){
        fs.readFile(FilePath, (err, fileContent)=>{
            let dataList = [];
            if(!err){
                dataList.push(this)
                console.log(this);
            }
            else {
                console.log(err)
            }

            fs.writeFile(FilePath, JSON.stringify(dataList),(error)=>{
                if(!error){
                    console.log("data saved")
                }
            })
        })
    }

    static fetchData(callback){
        fs.readFile(FilePath,(err,fileContent)=>{
            if(err){
                callback([])

            }
            callback(JSON.parse(fileContent))

        })

    }





};
