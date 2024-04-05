import React, { useEffect, useState } from "react";
import "./ManageDepartment.css"; // Import your CSS file for styling
import Axios from "axios";
import { Link } from "react-router-dom";
import { ApiDomain } from "../utils/Domain";

function ManageDepartment() {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDepartments = () => {
    Axios.get(`${ApiDomain}/departments`)
      .then((response) => {
        setDepartments(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const deleteDepartment = (departmentId) => {
    Axios.delete(`${ApiDomain}/departments/${departmentId}`)
      .then((response) => {
        console.log(response);
        fetchDepartments();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table--container">
      <h2 className="department-header">Manage Departments</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search departments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.map((department) => (
              <tr key={department.id}>
                <td>{department.name}</td>
                <td>{department.description}</td>
                <td>
                  <Link to={`/DepartmentForm/${department.id}`}>
                    <button className="edit--btn">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="delete--btn"
                    onClick={() => deleteDepartment(department.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageDepartment;
