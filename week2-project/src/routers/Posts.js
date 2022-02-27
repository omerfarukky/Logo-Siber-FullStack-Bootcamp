const express = require("express");
const { getAllPost, getPost } = require("../controllers/Posts");
const router = express.Router();

router.get("/", getAllPost);// Controllers icindeki getAllPost methodunu calistirir.
router.get("/:id", getPost); // Eğer params olarak id gelirse controllers icindeki getPost methodunu calistirir.

module.exports = {
  router,
};
