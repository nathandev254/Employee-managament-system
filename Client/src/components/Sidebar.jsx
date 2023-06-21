import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Sidebar.css";
import { AiFillDashboard } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { MdPersonOff } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { Link } from "react-router-dom";

function SideNavigation() {
  return (
    <div className="Sidebar--container">
      <Sidebar className="Sidebar" backgroundColor="lightBlue">
        <Menu>
          <MenuItem icon={<AiFillDashboard />}>Dashboard</MenuItem>
          <SubMenu icon={<MdPeopleAlt />} label="employee">
            <MenuItem component={<Link to="employee" />}>AddEmployee</MenuItem>
            <MenuItem>ManageEmployee</MenuItem>
          </SubMenu>
          <SubMenu icon={<FcDepartment />} label="Department">
            <MenuItem>AddDepartment</MenuItem>
            <MenuItem>ManageDepartments</MenuItem>
          </SubMenu>
          <MenuItem icon={<MdPersonOff />}>Leave</MenuItem>
          <MenuItem icon={<TbNotes />}>Attendance</MenuItem>
          <MenuItem icon={<AiFillDashboard />}>Collapse Sidebar</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideNavigation;
