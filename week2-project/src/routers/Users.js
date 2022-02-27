const express = require("express");
const { getAllUser, getUser } = require("../controllers/Users");
const router = express.Router();

router.get("/", getAllUser); // Controllers icindeki getAllUser methodunu calistirir.
router.get("/:id", getUser); // Eğer params olarak id gelirse controllers icindeki getUser methodunu calistirir.

module.exports = {
  router,
};
