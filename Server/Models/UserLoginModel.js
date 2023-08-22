const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const  LoginSchema = new mongoose.Schema ({

Name:{
    type:String,
    require:true
},

Password: {
    type:String ,
    require: true



}


})


const LoginModels =  mongoose.model('LoginUser', LoginSchema)

module.exports =  LoginModels ;

