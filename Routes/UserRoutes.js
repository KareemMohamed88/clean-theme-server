const express = require("express");
const { getCreateUserVaildator } = require("../utils/vaildators/userVaildator");
const {
  registertion,
  login,
  getAllUsers,
} = require("../services/UserServices");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(getCreateUserVaildator, registertion);
router.route("/login").post(login);
module.exports = router;
