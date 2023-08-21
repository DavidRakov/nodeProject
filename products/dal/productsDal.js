const data = "./productsData.json";
const jsonfile = require("jsonfile");

const returnProducts = async () => {
  try {
    const products = await jsonfile.readFile(data);
    if (!products.length) throw new Error("no products in database");
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

const addProductDal = async (allProducts) => {
  try {
    await jsonfile.writeFile(data, allProducts);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProductDal = async (card) => {
  try {
    const products = await jsonfile.readFile(data);
    if (!products.length) throw new Error("no products in database");
    const index = products.findIndex((element) => element.id === +card.id);
    if (!index) throw new Error("no product");
    products[index] = card;
    await jsonfile.writeFile(data, products);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteProductDal = async (removed) => {
  try {
    await jsonfile.writeFile(data, removed);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  returnProducts,
  addProductDal,
  updateProductDal,
  deleteProductDal,
};
