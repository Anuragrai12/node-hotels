// import port and url
require('dotenv').config();
const mongoose =require('mongoose');
// defile the MongoDB connection URL
// const mongoURL = process.env.DB_URL_lOCAL;//replace my database with your URL
 const  mongoURL = process.env.MONGODB_URL;
 

 mongoose.connect(mongoURL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    // mangoose maintain a default connection object representing the MongoDB connection 
    const db = mongoose.connection; 
// Difine event listeners for database connection 

    db.on('connected',() =>{
        console.log('Connected to mongoDB server');
    });

    
    db.on('error',() =>{
        console.log('mongoDB connection errr');
    });

    
    db.on('disconnected',() =>{
        console.log('MongoDB disconnected');
    });


    // Export datatbase connection 
    module.exports = db;

