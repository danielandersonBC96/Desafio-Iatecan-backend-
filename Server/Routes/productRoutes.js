const  express = require('express');
const router = express.Router();
const { GetAllProducts, GetProductsById} = require('../Controller/Produtc.js')

// Obtenha os produtos do  Banco de Dados 
//  Routas  GET /API/products
// Acesso Publico 

router.get ( '/', GetAllProducts )

// Obtenha os produtos do  Db 
//  Routas  GET /API/products
// Acesso Publico 

router.get ( '/:id', GetProductsById)

module.exports = router;