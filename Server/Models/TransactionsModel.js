const mongoose = require('mongoose');
const Schema = mongoose.Schema; 



//Pagamentos

const TransactionSchema = new  Schema ({
    
        cartCode: {
            type:String,
            required:true,
        },
        cart: {
            type: {
                type: String,
                required: true,
                unique: true,
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
          required: true,

        },
        paymentType: {
            type: String,
            enum: [ 'bilete', "creditCart"],
            required: true , 
        }, 
        installments: {
            type: Number, 
            required: true , 
        }, 

       total: {
            type: String ,
          required: true,
           },
        transactionId:  {
            type: String, 
            required: true , 
        }, 
        processorRespone:{
          type: String,
          required: true , 
        } ,
        cutumerName: {
            type: String,
            required: true , 
        },
        custumerEmail: {
            type: String,
            required: true ,  

        },
        custumerMobile: {
            type: String, 
             required: true , 
        },
        custumerDocumente: {
            type: String,
            required: true , 
        },
        billingAddress: {
            type:String,
        },
        billingNumber: {
            type:String,
            required: true ,  
        },
        billingNeighood: {
            type:String,
            required: true , 
        },
        billingCity: {
            type:String,
            required: true , 
        },
        billingSate: {

            type:String,
            required: true , 
        },

},
{
    timestamps:true,
}

)


module.exports =  mongoose.model( 'Transactions' , TransactionSchema)