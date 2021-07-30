const express = require("express");
const router = express.Router();

// @desc          Delete a single Company
// @route         www.workport.com/index
// @access        Private
exports.getAdminDashboard = async (req, res, next) => {
  await res.status(200).render("admin/dashboard", {
    pageTitle: "Dashboard",
    path: "/admin/dashboard",
  });
};

// @desc          Delete a single Company
// @route         www.workport.com/index
// @access        Private
exports.getAdminMyCards = async (req, res, next) => {
  await res.status(200).render("admin/my-cards", {
    pageTitle: "My Cards",
    path: "/admin/my-cards",
  });
};


// @desc          Delete a single Company
// @route         www.workport.com/index
// @access        Private
exports.getAdminMyPayments = async (req, res, next) => {
  await res.status(200).render("admin/my-payments", {
    pageTitle: "Dashboard",
    path: "/admin/my-payments",
  });
};


// @desc          Delete a single Company
// @route         www.workport.com/index
// @access        Private
exports.getAdminMyServices = async (req, res, next) => {
  await res.status(200).render("admin/my-services", {
    pageTitle: "My Services",
    path: "/admin/my-services",
  });
};


// @desc          Delete a single Company
// @route         www.workport.com/index
// @access        Private 
exports.getAdminMyReceipts = async (req, res, next) => {
  await res.status(200).render("admin/my-receipts", {
    pageTitle: "My Receipts",
    path: "/admin/my-receipts"
  });
};


// @desc          Delete a single Company
// @route         www.workport.com/index
// @access        Private
exports.getAdminMyTranscations = async (req, res, next) => {
  await res.status(200).render("admin/my-transcations", {
    pageTitle: "My ",
    path: "/admin/my-transcations",
  });
};