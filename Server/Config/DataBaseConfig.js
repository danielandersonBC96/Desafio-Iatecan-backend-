require('dotenv').config();
const mongoose = require( 'mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    
      useNewUrlParser : true,
      useUnifiedTopology: true,

    });

    console.log("MongoDB connection succes");
  } catch (error) {
    console.error("MongoDB connection is not  connected ");
    process.exit(1);
    
  }
};

module.exports = connectDB;