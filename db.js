const mongoose =require('mongoose');
// defile the MongoDB connection URL
 const  mongoURL = 'mongodb://localhost:27017/hotels'

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

