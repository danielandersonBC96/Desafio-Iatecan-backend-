const mongoose = require('mongoose');
const Schema = mongoose.Schema; 




 const UserSchema = new Schema ({
    Name: {
        type:String,
        required: true

    },
    Email:{
        type: {
            type: String,
            required: true
        }


    },
     Phone:{
        type: String , 
        require: true



    },
     Addres:{
        type: String , 
        require: true

    },
    Password:{
        type:String,
        require:true 
    }

}) ; 

const userModel = mongoose.model(" FormUser",UserSchema);

module.exports =  userModel ;

