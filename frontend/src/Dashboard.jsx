import React from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintList from "./ComplaintList";

function Dashboard() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Dashboard
      </h1>

      <ComplaintForm />
      <ComplaintList />
    </div>
  );
}

export default Dashboard;