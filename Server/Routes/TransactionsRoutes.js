const  express = require('express');
const { CreateTransactions } = require('../Controller/Transaction.js');
const router = express.Router();
 




router.post( '/',  CreateTransactions);




module.exports = router;