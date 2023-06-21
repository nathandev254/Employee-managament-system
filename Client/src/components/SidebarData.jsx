import React from 'react'


export const SidebarData = [
    {
        title:'Dashboard',
        icon:<AiFillDashboard/>,
        Link:"Home",
    },
    {
        title:'employee',
        icon:<MdPeopleAlt/>,
        IconOpen:<MdKeyboardArrowDown/>,
        IconClose:<IoIosArrowUp/>,
        SubNav:[
            {
                title:'Add employee',
                Link:'employee/add'
            },{
                title:'Manage employee',
                Link:'employee/manage'
            }
        ]
    },
    {
        title:'departments',
        icon:<FcDepartment/>,
        IconOpen:<MdKeyboardArrowDown/>,
        IconClose:<IoIosArrowUp/>,
        SubNav:[
            {
                title:'Add Department',
                Link:'/Department/add'
            },{
                title:'Manage Department',
                Link:'Department/manage'
            }
        ]
    },
    {
        title:'Leave',
        icon:<MdPersonOff/>,
        IconOpen:<MdKeyboardArrowDown/>,
        IconClose:<IoIosArrowUp/>
    },
    {
        title:'Attendance',
        icon:<TbNotes/>
    }

]
  

