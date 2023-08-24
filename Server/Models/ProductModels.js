const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


//Cadastro Produtos

const productSchema =  new Schema ({
  name: {

  type: String,
    required: true,
  },
   imageUrl: {
    type: String,
    required: true,
  },
   description: {
    type: String ,
    required: true,
  },
   categori :{

    type: String ,
    required: true,

   },
    price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

 module.exports = mongoose.model("product", productSchema);

 

