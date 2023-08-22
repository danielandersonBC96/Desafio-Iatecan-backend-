const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


//Formulario

 const UserSchema = new Schema ({
    name:{
        type:String,
        riquired:true
    },
    email:{

        type:String,
        riquired:true
    },

    phone:{
        type:String,
        riquired:true

    },
    addres:{
        type:String,
        riquired:true

    },
    password:{

        type:String,
        riquired:true
    }

}) ; 

module.exports = mongoose.model(" User",UserSchema);



