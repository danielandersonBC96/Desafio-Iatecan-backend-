require("dotenv").config();
const express = require('express');
const ConnectDB =require('././Server/Config/DataBaseConfig')
const productRoutes =require('./Server/Routes/productRoutes.js');
//DataBase

ConnectDB()

const app = express();

//Rotas

app.use('/api/products', productRoutes);

//Servidor 

const PORT = process.env.PORT || 5000 ; 

app.listen( PORT, () =>  console.log (`Server is running on pont ${PORT}`));