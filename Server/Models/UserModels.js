const mongoose = require('mongoose');
const Schema = mongoose.Schema; 




 const UserChema = new Schema ({
    name: {
        type:String,
        required: true

    },
    email:{
        type: {
            type: String,
            required: true
        }


    },
    phone:{
        type: String , 
        require: true



    }

}) ; 

const Product = mongoose.model("clientes", productSchema);

module.exports = Product;

