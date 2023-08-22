const Product = require("../Models/ProductModels.js")

//Obtendo Produtos

const GetAllProducts = async ( req, res) => {
    try {

        const product =  await Product.find({});
        res.json(product)

    } catch (error){
        console.error(error);
        res.status(500).json( { message:"Don't possible get this  products "})

    }
}

//Obtenha os Pordutos Por Id 

const GetProductsById = async ( req, res) => {
    try {

        const product = await Product.findById(req.params.id);
        res.json(product)

    } catch (error){
        console.error(error);
        res.status(500).json( { message:" Id of product don't exist  "})

    }
}

 module.exports = {

    GetAllProducts,
    GetProductsById
}



