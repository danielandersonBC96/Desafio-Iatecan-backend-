const  express = require('express');
const router = express.Router();
const  {LoginUser} = require('../Controller/UserLogin.js')



router.post('/user/loggin', LoginUser)








module.exports = router;