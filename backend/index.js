const express = require('express');   // required to use express
const cors = require('cors');  //Cors Required so that backend and frontend can communicate
//const multer  = require('multer');


const connectToMongo = require('./db');   //Function for connecting database

const PORT=8080;
const app = express();   //Declaring an express variable app

app.use(cors());          //Allow app variable to use cors
app.use(express.json());        //Required so that req body in json can be sent
app.use('/upload',express.static('upload'));  //Making static path to access images

connectToMongo();       //Connecting with db

app.listen(PORT,()=>{       //Required to start backend sever at a particular port
    console.log(`Server is running on port no ${PORT}`);
});

//Available Routes
app.use('/api/user',require('./routes/user'));
app.use('/api/profile',require('./routes/profile'));

module.exports=app;




