const getProducts = require("../dal/productsDal.js");

const allProducts = async () => {
  try {
    const products = await getProducts.returnProducts();
    if (!products.length) throw new Error("no products");
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

const oneProduct = async (id) => {
  try {
    const products = await getProducts.returnProducts();
    if (!products.length) throw new Error("no products in dataBase");
    const match = await products.filter((element) => element.id === +id);
    if (!match.length) throw new Error("no product with this id");
    return Promise.resolve(match);
  } catch (error) {
    console.log("productService oneProduct Error: ", error.message);
    return Promise.reject(error);
  }
};

const addProduct = async (info) => {
  try {
    if (typeof info !== "object") throw new Error("not A valid info");

    const products = await getProducts.returnProducts();
    // להעביר את ההמרה של האובייקט שקיבלנו מצד לקוח תהליך של נירמול שבו ייתווספו לו המפתחות שהוא צריך כדי להיכנס למאגר מידע

    products.push(info);
    await getProducts.addProductDal(products);
    return Promise.resolve("Mission successful");
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProduct = async (id, newInfo) => {
  try {
    const products = await getProducts.returnProducts();
    if (!products.length) throw new Error("no products in dataBase");
    const match = await products.filter((element) => element.id === +id);
    if (!match.length) throw new Error("no product");
    newKeys = Object.keys(newInfo);
    for (const key in match[0]) {
      if (newKeys.includes(key)) match[0][key] = newInfo[key];
    }
    await getProducts.updateProductDal(match[0]);
    return Promise.resolve("Mission successful");
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const products = await getProducts.returnProducts();
    if (!products.length) throw new Error("no products in dataBase");
    const remove = await products.filter((element) => element.id !== +id);
    if (remove.length === products.length) throw new Error("no products");
    products = remove;
    await getProducts.deleteProductDal(products);
    return Promise.resolve("מוצר נמחק בהצלחה");
  } catch (error) {
    return Promise.reject(error);
  }
};

const addOneQuantity = async (id) => {
  try {
    const products = await getProducts.returnProducts();
    if (!products.length) throw new Error("no products in dataBase");
    const add = await products.filter((element) => element.id === +id);
    if (!add.length) {
      throw new Error("אין מוצר כזה");
    }
    add[0].quantity++;
    await getProducts.updateProductDal(add[0]);
    return Promise.resolve("Added 1 to stock");
  } catch (error) {
    return Promise.reject(error);
  }
};

const SubtractOneQuantity = async (id) => {
  try {
    const products = await getProducts.returnProducts();
    if (!products.length) throw new Error("no products in dataBase");
    const add = await products.filter((element) => element.id === +id);
    if (!add.length) {
      throw new Error("אין מוצר כזה");
    }
    if (add[0].quantity === 0) {
      throw new Error("אין במלאי");
    }
    add[0].quantity--;
    await getProducts.updateProductDal(add[0]);
    return Promise.resolve("One was subtracted from the stock");
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  allProducts,
  oneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  addOneQuantity,
  SubtractOneQuantity,
};
