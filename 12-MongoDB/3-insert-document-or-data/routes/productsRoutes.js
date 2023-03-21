const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/ProductsController");

router.get("/create", ProductsController.createProduct);
router.post("/create", ProductsController.createProductPost);
router.get("/", ProductsController.showProducts);

module.exports = router;
