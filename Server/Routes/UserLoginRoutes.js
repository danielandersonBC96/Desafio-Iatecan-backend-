const  express = require('express');
const router = express.Router();
const  {LoginUser, LoginProvide} = require('../Controller/UserLogin.js')



router.post('/', LoginUser)








module.exports = router;