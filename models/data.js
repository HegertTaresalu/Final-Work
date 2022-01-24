const fs = require("fs");
const path = require("path")


const FilePath = path.join(path.dirname(require.main.filename), "models", "data_.json")


module.exports = class myData{
    constrctor(FirstName, LastName,DateOfBirth,CurrentResidence,NameOfSchool,TechnicalSkill,SoftSkill,DateOfGraduation,){
        this.firstName = FirstName,
        this.lastName = LastName,
        this.dateOfBirth = DateOfBirth,
        this.currentResidence = CurrentResidence,
        this.nameOfSchool = NameOfSchool,
        this.technicalSkill = TechnicalSkill,
        this.softSkill = SoftSkill,
        this.dateOfGraduation = DateOfGraduation
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
