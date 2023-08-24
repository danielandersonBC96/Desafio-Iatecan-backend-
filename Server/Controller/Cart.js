const CartModels = require('../Models/CartModels')


//Create Controlle Cart 


const FindCart  = async ( req, res ) => {




    try{
        const Carts = await CartModels.find({});
        return res.status(200).json(Carts);


    }catch(error){
        console.error(error);
        return res.status(500).json({ error:" internal server error "})



    }
}

const  CreateCart = async ( req , res ) => {
  
    const { code, price } = req.body

    try{
         await CartModels.create({
            code,
            price

        }).then( cart =>
            res.status(201).json({
 
             message: "Cart Create",
             cart
            }));

    }catch(error){
        console.error(error);
        return res.status(500).json({ error:" internal server error "})

    }

}

const UpdateCart = async ( req,res) => {

    
    const {code, price} = req.body;
    
  try{
      await CartModels.updateOne({code,price} ).then( cart =>
           res.status(201).json({

         message: "Cart Uptade",
         cart
        }));

  }catch ( error ){

        console.error(error);
        return res.status(500).json({ error:" internal server error "})
  }
}


module.exports = {
    FindCart,
    CreateCart,
    UpdateCart

}






