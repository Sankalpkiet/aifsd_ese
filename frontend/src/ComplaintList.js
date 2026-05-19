import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function ComplaintList() {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, {
        status: "Resolved"
      });
      fetchComplaints();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>All Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints found</p>
      ) : (
        complaints.map((c) => (
          <div
            key={c._id}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px"
            }}
          >
            <h3>{c.title}</h3>
            <p>{c.description}</p>

            <p><b>Category:</b> {c.category}</p>
            <p><b>Location:</b> {c.location}</p>

            <p>
              <b>Status:</b>{" "}
              <span
                style={{
                  color: c.status === "Resolved" ? "green" : "red",
                  fontWeight: "bold"
                }}
              >
                {c.status}
              </span>
            </p>

            <button
              onClick={() => updateStatus(c._id)}
              disabled={c.status === "Resolved"}
              style={{
                background: c.status === "Resolved" ? "gray" : "#667eea",
                cursor: c.status === "Resolved" ? "not-allowed" : "pointer"
              }}
            >
              {c.status === "Resolved" ? "Already Resolved" : "Mark as Resolved"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ComplaintList;