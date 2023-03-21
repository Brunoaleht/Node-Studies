const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/ProductsController");

router.get("/", ProductsController.showProducts);

module.exports = router;
