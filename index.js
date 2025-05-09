const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express()

app.use(express.json());


//Get all products
app.get('/api/products', async (req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Post a product
app.post('/api/products', async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Connection with MondoDB
mongoose.connect('mongodb+srv://admin:yvcaurhPQRD0ECDp@backenddb.gxkhzmd.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log("Connection Failed")
});