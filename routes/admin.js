const express = require("express");
const {
  getAdminDashboard,
  getAdminMyCards,
  getAdminMyPayments,
  getAdminMyServices,
  getAdminMyTranscations
} = require("../controllers/admin");

const router = express.Router();

router.get("/dashboard", getAdminDashboard);
router.get('/my-cards' , getAdminMyCards);
router.get('/my-payments' , getAdminMyPayments);
router.get('/my-services' , getAdminMyServices);
router.get('/my-transcations', getAdminMyTranscations);


module.exports = router;
