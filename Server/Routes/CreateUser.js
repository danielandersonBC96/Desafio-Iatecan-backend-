const  express = require('express');
const router = express.Router();

const  {CreateUser}  = require('../Controller/CreateUser.js')


router.post = ( '/user/Form' , CreateUser)





module.exports = router;