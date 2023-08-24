require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express');
const ConnectDB = require('././Server/Config/DataBaseConfig')
const productRoutes =require('./Server/Routes/productRoutes.js');
const  LoginUserRoutes = require('./Server/Routes/UserLoginRoutes.js');
const  userRoutes = require('./Server/Routes/CreateUserRoutes.js');
const path = require("path")
//DataBase

ConnectDB()

const app = express();

//Rotas
app.use(express.json())
app.use('/api/products', productRoutes);
app.use('/api/login',  LoginUserRoutes );
app.use('/api/formulario', userRoutes);

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false}))

//Servidor 

const PORT = process.env.PORT || 5000 ; 



app.listen( PORT, () =>  console.log (`Server is running on pont ${PORT}`));