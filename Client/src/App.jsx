import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import ManageEmployee from "./components/ManageEmployee";
import AddDepartment from "./components/AddDepartment";
import ManageDepartment from "./components/ManageDepartment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/Home" element={<Home />} />
            <Route path="AddEmployee" element={<AddEmployee />} />
            <Route path="ManageEmployee" element={<ManageEmployee />} />
            <Route path="AddDepartment" element={<AddDepartment />} />
            <Route path="ManageDepartment" element={<ManageDepartment />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
