// AI logic for complaint analysis

exports.analyzeComplaint = (req, res) => {
  const { description, category } = req.body;

  let priority = "Low";
  let department = "General";
  let response = "";

  // 🔥 Priority Detection
  if (description.toLowerCase().includes("urgent") || description.toLowerCase().includes("immediately")) {
    priority = "High";
  }

  // 🔥 Department Suggestion
  if (category.toLowerCase().includes("water")) {
    department = "Water Department";
  } else if (category.toLowerCase().includes("electricity")) {
    department = "Electricity Department";
  } else if (category.toLowerCase().includes("garbage")) {
    department = "Sanitation Department";
  }

  // 🔥 Auto Response
  response = `Your complaint has been received. Our ${department} will resolve it soon.`;

  // 🔥 Summary
  const summary = description.length > 50 
    ? description.substring(0, 50) + "..." 
    : description;

  res.json({
    priority,
    department,
    summary,
    response
  });
};