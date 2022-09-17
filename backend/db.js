//Keeping connection to database in a separate file. This module only provides
//connection with database along with creating database with name sampark-app

const mongoose = require ('mongoose');

const mongoURI = "mongodb://localhost:27017/sampark-app";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connection successful");
    })
    .catch(()=>{
        console.log("Error in connection");
    })
}

module.exports=connectToMongo;  //Export is must as this function is to be used in index.js to connect wih db as program execution starts with index file