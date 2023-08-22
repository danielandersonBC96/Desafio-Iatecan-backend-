const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Login 

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


module.exports =  mongoose.model('', LoginSchema)



