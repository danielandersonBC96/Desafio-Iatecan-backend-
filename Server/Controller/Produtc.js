import { find, findById } from '../Models/Product';

const GetAllProducts = async ( req, res) => {
    try {

        const product = await find({});
        res.json(product)

    } catch (error){
        console.error(error);
        res.status(500).json( { message:"Don't possible get this  products "})

    }
}

//Obtenha os Pordutos Por Id 

const GetProductsById = async ( req, res) => {
    try {

        const product = await findById(req.params.id);
        res.json(product)

    } catch (error){
        console.error(error);
        res.status(500).json( { message:" Id of product don't exist  "})

    }
}

export default {

    GetAllProducts,
    GetProductsById
}