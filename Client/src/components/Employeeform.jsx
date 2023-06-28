import React from "react";
import { useParams } from "react-router-dom";
import "./Employeeform.css";

function Employeeform() {
  const { id } = useParams();

  return (
    <div className="form-container">
      <h2>User Details Update</h2>
      <form>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input type="text" id="name" required className="form-input" />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" id="email" required className="form-input" />

        <label htmlFor="address" className="form-label">
          Address:
        </label>
        <textarea id="address" required className="form-input"></textarea>

        <input type="submit" value="Update Details" className="submit-button" />
      </form>
    </div>
  );
}

export default Employeeform;
