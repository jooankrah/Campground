const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();
const { createUser, login, logout } = require("../controllers/user");

router.post("/createUsers", createUser);

router.post("/login", login);

router.post("/logout", auth, logout);

module.exports = router;
