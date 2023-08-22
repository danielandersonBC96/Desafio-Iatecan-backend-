
const router = require('express').Router()
const   UserController = require('../Controller/CreateUser.js')



router.post('/userCrete',   UserController.CreateUser
)
router.get('/', UserController.getAllUser)




module.exports = router;