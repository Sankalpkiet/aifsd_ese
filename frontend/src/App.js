import React from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintList from "./ComplaintList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        AI Complaint Management
      </h1>

      <ComplaintForm />
      <ComplaintList />
    </div>
  );
}

export default App;