const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const  CartSchema = new Schema ({
    code: {

          type: String,
          require: true,
        },
  
    price: {
        type: String,
        require: true,

    }



},
{
    timestamps: true,
})

module.exports =  mongoose.model( 'Cart' , CartSchema )