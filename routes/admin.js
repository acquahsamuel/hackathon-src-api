const express = require("express");
const {
  getAdminDashboard,
  getAdminMyPayments,
  getAdminMyServices,
  getAdminMyReceipts,
  getAdminMyTranscations
} = require("../controllers/admin");

const router = express.Router();

router.get("/dashboard", getAdminDashboard);
router.get('/my-payments' , getAdminMyPayments);
router.get('/my-services' , getAdminMyServices);
router.get('/my-receipts', getAdminMyReceipts);
router.get('/my-transcations', getAdminMyTranscations);


module.exports = router;
