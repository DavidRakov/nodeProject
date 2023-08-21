const {
  allProducts,
  oneProduct,
  addProduct: addProductService,
  updateProduct: updateProductService,
  deleteProduct: deleteProductService,
  addOneQuantity: addOneQuantityService,
  SubtractOneQuantity: SubtractOneQuantityService,
} = require("../service/productService");

const getProducts = async (req, res) => {
  try {
    const Products = await allProducts();
    res.send(Products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await oneProduct(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addProduct = async (req, res) => {
  try {
    // קובץ נפרד לולידציה על מה שאני מקבל מהמשתמש
    // validation if the object
    // רק אם הוא עובר את הוולידציה להפעיל את הסרביס
    const response = await addProductService(req.body);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const response = await updateProductService(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const response = await deleteProductService(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addOneQuantity = async (req, res) => {
  try {
    const response = await addOneQuantityService(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const SubtractOneQuantity = async (req, res) => {
  try {
    const response = await SubtractOneQuantityService(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  addOneQuantity,
  SubtractOneQuantity,
};
