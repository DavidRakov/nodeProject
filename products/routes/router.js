const express = require("express");
const router = express.Router();
const {
  updateProduct,
  SubtractOneQuantity,
  addOneQuantity,
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
} = require("../controller/productController");

router.get("/", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", addProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.patch("/product/add/:id", addOneQuantity);
router.patch("/product/subtract/:id", SubtractOneQuantity);

module.exports = router;
