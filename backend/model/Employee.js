// Model employee where employee personal details are saved along with his designation and office details

const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    erpId:{
        type:String,
        required:true,
        unique:true
    },
    designation:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    mobileno:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"http://localhost:8080/upload/employeeImage.png"
    }
    
})

module.exports=mongoose.model('Employee',employeeSchema); //Employee model is created and exported