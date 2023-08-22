const UserModel = require('../Models/UserModels.js')

//Criando  Controller do Usuario (Formulario )

const getAllUser = async ( req,res) =>{

    try{
        const UserList = await UserModel.find({})
        return res.render("index", UserList)

    }catch(err) {
       res.status(500).send({error:err.message})

    }
    
}



const CreateUser = async ( req , res ) =>{
const Models = req.body;

  if(!Models.name){
    return  res.redirect('/')
  }

  try {
     await UserModel.create( Models)
     return res.redirect('/')
    

  }catch ( err){
    res.status(500).send({error:err.message})


  }
}


module.exports = { CreateUser,
    getAllUser

}

    








  


