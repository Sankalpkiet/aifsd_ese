const Complaint = require("../models/Complaint");

// ✅ ADD COMPLAINT
exports.addComplaint = async (req, res) => {
  try {
    const { name, email, title, description, category, location } = req.body;

    // Validation
    if (!name || !email || !title || !description || !category || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const complaint = new Complaint({
      name,
      email,
      title,
      description,
      category,
      location
    });

    await complaint.save();

    res.status(201).json({ message: "Complaint added successfully", complaint });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET ALL COMPLAINTS
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ UPDATE STATUS
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // Validation
    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    complaint.status = status;
    await complaint.save();

    res.json({ message: "Status updated successfully", complaint });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ SEARCH BY LOCATION
exports.searchByLocation = async (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res.status(400).json({ error: "Location is required" });
    }

    const complaints = await Complaint.find({
      location: { $regex: location, $options: "i" } // case-insensitive
    });

    res.json(complaints);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};