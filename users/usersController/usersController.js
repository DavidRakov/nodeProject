const {
  allUsers,
  oneUser,
  addUser: addUserService,
  updateUser: updateUserService,
  deleteUser: deleteUserService,
} = require("../usersService/usersService");

const getUsers = async (req, res) => {
  try {
    const users = await allUsers();
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await oneUser(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    // קובץ נפרד לולידציה על מה שאני מקבל מהמשתמש
    // validation if the object
    // רק אם הוא עובר את הוולידציה להפעיל את הסרביס
    const response = await addUserService(req.body);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await updateUserService(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await deleteUserService(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
