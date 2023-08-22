require("dotenv").config();

const productData = require(  "./Server/Data/DataProduct.js");
const connectDB = require("./Server/Config/DataBaseConfig.js");
const Product = require("./Server/Models/ProductModels.js");
const CreateUser = require( './Server/Models/UserModels.js');
const LoginUser = require('./Server/Models/UserLoginModel.js')

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

   await Product.insertMany(productData);

    await CreateUser.insertMany({});

    await LoginUser.insertMany({})

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData(); 