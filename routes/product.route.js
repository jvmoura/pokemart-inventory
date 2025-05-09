const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {getProducts, postProduct, deleteProduct} = require("../controllers/products.controller");

router.get('/', getProducts);
router.post('/', postProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
