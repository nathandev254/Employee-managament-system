import React, { useEffect, useState } from "react";
import "./ManageEmployee.css";
import Axios from "axios";

function ManageEmployee() {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8081/employee")
      .then((response) => {
        setemployees(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    
  };

  return (
    <div className="table--container">
      <table className="table">
        <thead>
          <tr>
            <th>username</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>Department</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.user_id}>
              <td>{employee.username}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.Department}</td>
              <td>
                <button className="edit--btn">Edit</button>
              </td>
              <td>
                <button
                  className="delete--btn"
                  onClick={() => handleDelete(employee.user_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageEmployee;
