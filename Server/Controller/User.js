const userModel = require('../Models/UserModels.js')

//Criando Usuario 
const CreateUser = async ( req , res )=>{

    try{
        const body = req.Body
        const clientesModelsData = new  userModel()
        clientesModelsData.name = body.name
        clientesModelsData.email = body.email
        clientesModelsData.phone = body.phone
        

    } catch(error) {

       res.status(400).send(40(error));

    }


  

}
module.exports = {
    CreateUser
}