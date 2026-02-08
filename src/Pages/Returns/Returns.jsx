import React from "react";
import "./Returns.css";

function Returns() {
  return (
    <div className="returns-page">
      <h2>Returns & Replacements</h2>

      <div className="returns-card">
        <h3>Start a return</h3>
        <p>Select an order item to return or replace (demo page).</p>
        <button className="returns-btn">Start a return</button>
      </div>

      <div className="returns-card">
        <h3>Track return status</h3>
        <p>Check progress of your return label and refund (demo page).</p>
        <button className="returns-btn secondary">Track returns</button>
      </div>
    </div>
  );
}

export default Returns;
