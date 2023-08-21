const getUsers = require("../usersDal/usersDal");

const allUsers = async () => {
  try {
    const users = await getUsers.returnUsers();
    if (!users.length) throw new Error("no users");
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

const oneUser = async (id) => {
  try {
    const users = await getUsers.returnUsers();
    if (!users.length) throw new Error("no users in dataBase");
    const match = await users.filter((user) => user.id === +id);
    if (!match.length) throw new Error("no user with this id");
    return Promise.resolve(match);
  } catch (error) {
    console.log("userService oneUser Error: ", error.message);
    return Promise.reject(error);
  }
};

const addUser = async (info) => {
  try {
    if (typeof info !== "object") throw new Error("not A valid info");

    const users = await getUsers.returnUsers();
    // להעביר את ההמרה של האובייקט שקיבלנו מצד לקוח תהליך של נירמול שבו ייתווספו לו המפתחות שהוא צריך כדי להיכנס למאגר מידע

    users.push(info);
    await getUsers.addUserDal(users);
    return Promise.resolve("Mission successful");
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateUser = async (id, newInfo) => {
  try {
    const users = await getUsers.returnUsers();
    if (!users.length) throw new Error("no users in dataBase");
    const match = await users.filter((user) => user.id === +id);
    if (!match.length) throw new Error("no user");
    newKeys = Object.keys(newInfo);
    for (const key in match[0]) {
      if (newKeys.includes(key)) match[0][key] = newInfo[key];
    }
    await getUsers.updateUserDal(match[0]);
    return Promise.resolve("Mission successful");
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteUser = async (id) => {
  try {
    const users = await getUsers.returnUsers();
    if (!users.length) throw new Error("no users in dataBase");
    const remove = await users.filter((user) => user.id !== +id);
    if (remove.length === users.length) throw new Error("no user");
    users = remove;
    await getUsers.deleteUserDal(users);
    return Promise.resolve("משתמש נמחק בהצלחה");
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  allUsers,
  oneUser,
  addUser,
  updateUser,
  deleteUser,
};
