import React, { useState } from "react";
import "./Home.css";

// Mock data for each tab
const initialEmployeesData = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "Engineering", salary: 60000 },
  { id: 2, name: "Jane Smith", position: "HR Manager", department: "Human Resources", salary: 70000 },
  { id: 3, name: "Michael Johnson", position: "Sales Executive", department: "Sales", salary: 55000 }
];

function Home() {
  const [activeTab, setActiveTab] = useState('employees');
  const [employees, setEmployees] = useState(initialEmployeesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedEmployee(null);
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(selectedEmployee === employee ? null : employee);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="tabs">
        <div className={`tab ${activeTab === 'employees' ? 'active' : ''}`} onClick={() => handleTabChange('employees')}>
          Employees
        </div>
        <div className={`tab ${activeTab === 'departments' ? 'active' : ''}`} onClick={() => handleTabChange('departments')}>
          Departments
        </div>
        <div className={`tab ${activeTab === 'salary' ? 'active' : ''}`} onClick={() => handleTabChange('salary')}>
          Salary
        </div>
      </div>
      <div className="content">
        {activeTab === 'employees' && (
          <>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search employee..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="container">
              {filteredEmployees.map(employee => (
                <div key={employee.id} className={`employee ${selectedEmployee === employee ? 'active' : ''}`} onClick={() => handleEmployeeClick(employee)}>
                  <h2>{employee.name}</h2>
                  <p>{employee.position}</p>
                  {selectedEmployee === employee && (
                    <div className="details">
                      <p>Department: {employee.department}</p>
                      <p>Salary: ${employee.salary}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 'departments' && (
          <div className="container">
            {/* Display departments data */}
          </div>
        )}
        {activeTab === 'salary' && (
          <div className="container">
            {/* Display salary data */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
