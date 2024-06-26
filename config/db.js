const mongoose = require('mongoose');

const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newTO_DO').on('open',()=>{
    console.log('MongoDB connected successfully');
} ).on('error',()=>{
    console.error('Error connecting to MongoDB:');
});

module.exports=connection;