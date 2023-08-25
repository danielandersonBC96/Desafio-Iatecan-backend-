const UserModels = require('../Models/UserModels.js');



//Login do Usuario 



const LoginUser = async ( req, res ) => {

   

    const {name , password } =  req.body


    

    try{

        
        const UserLogin = await UserModels.findOne( { name, password}) 

        if(!UserLogin){
            res.status(401).json({
                message: 'Login not sucessful',
                error : ' User not found',
            })

        }
           else{
            res.status(201).json({
                message: "Login Sucessful",
                UserLogin
            })
        }
    }
    catch(error) {
        console.error(error);
        res.status(500).json( { message:"usuer Dont Exist "})

    }

   
    

}


const LoginProvide = async (req, res) => {
      
    const { name, password } = req.body

    // Check if username and password is provided


    try{

        
        const UserLogin = await UserModels.findOne( { name, password}) 
        
        if (!name || !password) {
            return res.status(400).json({
              message: "Username or Password not present",
              UserLogin

            })
      
          }
       
    }
    catch(error) {
        console.error(error);
        res.status(500).json( { message:"usuer Dont Exist "})

    }



}






module.exports = {
    LoginUser,
    LoginProvide


}