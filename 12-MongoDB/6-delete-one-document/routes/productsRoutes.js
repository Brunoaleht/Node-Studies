const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/ProductsController");

router.get("/create", ProductsController.createProduct);
router.post("/create", ProductsController.createProductPost);
router.post('/remove/:id', ProductsController.removeProduct)
router.get("/:id", ProductsController.getProduct);
router.get("/", ProductsController.showProducts);

module.exports = router;
