const express = require("express");
const router = express.Router();

const {
  addComplaint,
  getComplaints,
  updateStatus,
  searchByLocation
} = require("../controllers/complaintController");

router.post("/", addComplaint);
router.get("/", getComplaints);
router.put("/:id", updateStatus);
router.get("/search", searchByLocation);

module.exports = router;