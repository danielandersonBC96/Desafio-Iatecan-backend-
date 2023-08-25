const mongoose = require('mongoose');
const Schema = mongoose.Schema; 



//Pagamentos

const TransactionSchema = new  Schema ({
    
        cartCode: {
            type:String,
            required:false,
        },
        cart: {
            type: {
                type: String,
                required: false,
                unique: false,
            },
        },
        status: {
            type: String,
            enum: [
                "started",
                "processing",
                "pending",
                "aprproved",
                "refused",
                "refunded",
                "chargeback",
                "error",
            ],
          required: false,

        },
        paymentType: {
            type: String,
            enum: [ 'bilete', "creditCart"],
            required: false , 
        }, 
        installments: {
            type: Number, 
            required: false , 
        }, 

       total: {
            type: String ,
          required: false,
           },
        transactionId:  {
            type: String, 
            required: false, 
        }, 
        processorRespone:{
          type: String,
          required: false, 
        } ,
        cutumerName: {
            type: String,
            required: false, 
        },
        custumerEmail: {
            type: String,
            required: false ,  

        },
        custumerMobile: {
            type: String, 
             required: false, 
        },
        custumerDocumente: {
            type: String,
            required: false, 
        },
        billingAddress: {
            type:String,
            required: false, 
        },
        billingNumber: {
            type:String,
            required: false, 
        },
        billingNeighood: {
            type:String,
            required: false, 
        },
        billingCity: {
            type:String,
            required: false, 
        },
        billingSate: {

            type:String,
            required: false, 
        },

},
{
    timestamps:false,
}

)


module.exports =  mongoose.model( 'Transactions' , TransactionSchema)