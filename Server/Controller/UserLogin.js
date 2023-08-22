const Login = require('./../Models/UserLoginModel.js');

//Login do Usuario 

const LoginUser = async ( req, res ) => {

    
     try{

        const check = await Login.findOne({ Name:req.body.name})

        if( check.Password === req.body.Password){

            res.render("home")
        }
        else{
            res.send('wrong Password')
        }

          
     }catch{

        res.send("wrong details")



     }






}


module.exports = {
    LoginUser
}