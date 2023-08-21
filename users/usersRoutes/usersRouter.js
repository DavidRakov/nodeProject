const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../usersController/usersController");

router.get("/", getUsers);
router.get("/user/:id", getUser);
router.post("/user", addUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
