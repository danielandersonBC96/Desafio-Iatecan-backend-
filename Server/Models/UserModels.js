const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


//Formulario

 const UserSchema = new Schema ({
    name: {
        type: String,
        required: false ,
        unique: true,

        
      },
      email: {
        type: String,
        required: false ,

      },

      password: {
        type: String,
        required:false ,
        minlength: 6,
       
      },
    
   
    createdAt:{
        type:Date,
        default: Date.now

    }

}  ) ; 

module.exports = mongoose.model(" newUsertable",UserSchema);



