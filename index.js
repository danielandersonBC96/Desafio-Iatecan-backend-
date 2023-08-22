require("dotenv").config();
const express = require('express');
const ConnectDB =require('././Server/Config/DataBaseConfig')
const productRoutes =require('./Server/Routes/productRoutes.js');
const  LoginUserRoutes = require('./Server/Routes/UserLoginRoutes.js');
const  CreateUserRoutes = require('./Server/Routes/CreateUser.js')
//DataBase

ConnectDB()

const app = express();

//Rotas

app.use('/api/products', productRoutes);
app.use('/api/login',  LoginUserRoutes );
app.use('/api/form ' , CreateUserRoutes)

//Servidor 

const PORT = process.env.PORT || 5000 ; 

app.listen( PORT, () =>  console.log (`Server is running on pont ${PORT}`));