const Users = require("../data/Users.json");

const getAllUser = (req, res) => {
  // Tüm userları gönderme
  res.status(200).send(Users);
};

const getUser = (req, res) => {
  // req.params.id den gelen deger ile filtreme islemi ve filtrelenmis user gönderme
  const newUser = Users.filter((item) => item.id == req.params.id);
  res.status(200).send(newUser);
};

module.exports = {
  getAllUser,
  getUser,
};
