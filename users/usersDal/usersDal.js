const usersData = "./usersData.json";
const jsonfile = require("jsonfile");

const returnUsers = async () => {
  try {
    const users = await jsonfile.readFile(usersData);
    if (!users.length) throw new Error("no users in database");
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

const addUserDal = async (allUsers) => {
  try {
    await jsonfile.writeFile(usersData, allUsers);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateUserDal = async (card) => {
  try {
    const users = await jsonfile.readFile(usersData);
    if (!users.length) throw new Error("no users in database");
    const index = users.findIndex((user) => user.id === +card.id);
    if (!index) throw new Error("no user");
    users[index] = card;
    await jsonfile.writeFile(usersData, users);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteUserDal = async (removed) => {
  try {
    await jsonfile.writeFile(usersData, removed);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  returnUsers,
  addUserDal,
  updateUserDal,
  deleteUserDal,
};
