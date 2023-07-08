const express = require("express");
const {
  getProductVaildator,
  getCreateProductVaildator,
} = require("../utils/vaildators/productVaildator");
const {
  createProduct,
  readProducts,
  findProductById,
  updateProduct,
  deleteProduct,
} = require("../services/ProductServices");
const router = express.Router();

router
  .route("/")
  .get(readProducts)
  .post(getCreateProductVaildator, createProduct);
router
  .route("/:id")
  .get(getProductVaildator, findProductById)
  .put(updateProduct)
  .delete(deleteProduct);
module.exports = router;
