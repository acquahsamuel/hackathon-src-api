const express = require("express");
const {
  getHomeIndex,
  getHomeLogin,
  getHomeRegister,
  getHome404,
} = require("../controllers/home");
const router = express.Router();

router.get("/", getHomeIndex);
router.get("/login", getHomeLogin);
router.get("/register", getHomeRegister);
router.get("/404", getHome404);

module.exports = router;

