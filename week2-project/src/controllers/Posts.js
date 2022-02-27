const Posts = require("../data/Posts.json");

const getAllPost = (req, res) => {
  // Tüm postları gönderme
  res.status(200).send(Posts);
};

const getPost = (req, res) => {
  // req.params.id den gelen deger ile filtreme islemi ve filtrelenmis postu gönderme
  const newPost = Posts.filter((item) => item.id == req.params.id);
  res.status(200).send(newPost);
};

module.exports = {
  getAllPost,
  getPost,
};
