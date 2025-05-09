const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express()

app.use(express.json());

//Routes
app.use("/api/products", productRoute);

//Connection with MondoDB
mongoose.connect('mongodb+srv://test:oQXmjStLFf1u9zVx@backenddb.gxkhzmd.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log("Connection Failed")
});