const  express = require('express');
const { FindCart, CreateCart, UpdateCart } = require('../Controller/Cart.js');
const router = express.Router();
 




router.get('/', FindCart);
router.post('/', CreateCart);
router.put('/', UpdateCart)










module.exports = router;