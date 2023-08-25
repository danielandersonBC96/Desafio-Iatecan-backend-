const Transaction = require('../Models/TransactionsModel.js')
const Yup = require('yup')




const CreateTransactions  = async ( req, res ) => {
    const{

        cartCode, 
        paymentType,
        installments,
        cutumerName,
        custumerEmail,
        custumerMobile,
        custumerDocument,
        billingAdress,
        billingNeighborhood,
        billingCity,
        billingState,
        billingZipCode,
        creditCardExpiration,
        creditCardHolderName,
        creditCardCvv
    } = req.body; 
   

 
    try{
    
      await  Transaction.create({
       
        cartCode, 
        paymentType,
        installments,
        cutumerName,
        custumerEmail,
        custumerMobile,
        custumerDocument,
        billingAdress,
        billingNeighborhood,
        billingCity,
        billingState,
        billingZipCode,
        creditCardExpiration,
        creditCardHolderName,
        creditCardCvv
       
     } ).then(
         transactions =>
        res.status(200).json({

         message: "Transaction Create ",
         transactions
        }));
       
   }catch(error){

     console.error(error)
     res.status(201).json({error:error.message} )
   }

 
} 






 

module.exports = {
    CreateTransactions

}

