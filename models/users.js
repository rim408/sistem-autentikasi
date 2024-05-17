const bcrypt = require('bcryptjs');

const users = [];

const addUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
};

const findUser = (username) => {
  return users.find(user => user.username === username);
};

const checkUsernameExists = (username) => {
  return users.some(user => user.username === username);
};

module.exports = { addUser, findUser, checkUsernameExists };
