import React, { useState } from "react";
import "./Sidebar.css";
import { AiFillDashboard } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { MdPersonOff } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function SideNavigation() {
  // const [ShowSubNav,setShowSubNav] = useState(false)
  // // const {SubNav} = SidebarData

  // // console.log(SidebarData,SubNav)
  return (
    <div className="Sidebar">
      <Sidebar>
        <Menu>
          <SubMenu label="Dashboard"></SubMenu>
          <SubMenu label="employee">
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}> Main content</main>
    </div>
  );
}

export default SideNavigation;
