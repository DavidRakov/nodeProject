const express = require("express");
const router = express.Router();
const productsRouter = require("../products/routes/router");
const usersRouter = require("../users/usersRoutes/usersRouter");
const { handleError } = require("../handling-errors/handleError");

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use((req, res) => handleError(res, 404, "page as not found"));
router.use(express.static(".././public"));

module.exports = router;
