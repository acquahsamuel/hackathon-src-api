const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/async");

// @desc          Get Job listings
// @route         www.workport.com/index
// @access        Public
exports.getHomeIndex = asyncHandler(async (req, res, next) => {
  res.status(200).render("home/index", {
    pageTitle: "Homepage",
    path: "/home/index",
  });
});


// @desc          Get Job listings
// @route         www.workport.com/login
// @access        Public
exports.getHomeLogin = asyncHandler(async (req, res, next) => {
  await res.status(200).render("home/login", {
    pageTitle: "Account Login",
    path: "/home/login",
  });
});

// @desc          Get Job listings
// @route         www.workport.com/register
// @access        Public
exports.getHomeRegister = asyncHandler(async (req, res, next) => {
  await res.status(200).render("home/register", {
    pageTitle: "Account Registration",
    path: "/home/register",
  });
});



// @desc          Get Job listings
// @route         www.workport.com/single-blog
// @access        Public
exports.getHome404 = asyncHandler(async (req, res, next) => {
  await res.status(200).render("home/404", {
    pageTitle: "404",
    path: "/home/404",
  });
  next();
});
