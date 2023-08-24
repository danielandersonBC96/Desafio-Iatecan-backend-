
const UserModel = require('../Models/UserModels.js')

//Criando  Controller do Usuario (Formulario )

  const CreateUser = async ( req, res, next ) =>{
     
     const {name, password, email} = req.body
    
    try{
    
       await  UserModel.create(
        {
          name,
          email,
          password,
        
        }).then( user =>
           res.status(200).json({

            message: "User Create ",
            user
           }));

    }catch(error){

      console.error(error)
      res.status(201).json({error:error.message} )
    }

  
} 



module.exports = { CreateUser
  
}

    








  


