const userModel = require('../Models/UserModels.js')

//Criando Usuario (Formulario )


const CreateUser = async ( req , res )=>{

    try{
        const body = req.Body
        const clientesModelsData = new  userModel()
        clientesModelsData.Name = body.name
        clientesModelsData.Email = body.email
        clientesModelsData.Phone = body.phone
        clientesModelsData.Addres = body.Addres
        clientesModelsData.Password = body.Password

        await clientesModelsData.save()

        res.status(200).send({ 
            "status": true, "message": "User create sucessfully "


        });
        

    } catch(error) {

       res.status(400).send(40(error));

    }


  

}
module.exports = {
    CreateUser
}