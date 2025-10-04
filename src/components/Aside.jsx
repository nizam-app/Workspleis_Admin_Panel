import React from 'react'
import { NavLink } from 'react-router'

import dashboard1 from '../assets/aside/dashboard1.png'
import dashboard2 from '../assets/aside/dashboard2.png'
import userrequest1 from '../assets/aside/userrequest1.png'
import userrequest2 from '../assets/aside/userrequest2.png'
import job1 from '../assets/aside/job1.png'
import job2 from '../assets/aside/job2.png'
import special1 from '../assets/aside/special1.png'
import special2 from '../assets/aside/special2.png'
import conversation1 from '../assets/aside/conversation1.png'
import conversation2 from '../assets/aside/conversation2.png'
import proposal1 from '../assets/aside/proposal1.png'
import proposal2 from '../assets/aside/proposal2.png'
import usermanagement1 from '../assets/aside/usermanagement1.png'
import usermanagement2 from '../assets/aside/usermanagement2.png'

const Aside = () => {
  const menuItems = [
    { name: "Dashboard", icon1: dashboard1, icon2: dashboard2, path: '/' },
    { name: "User Requests", icon1: userrequest1, icon2: userrequest2, path: '/user-request' },
    { name: "Jobs Management", icon1: job1, icon2: job2, path: '/job-management' },
    { name: "Special Projects", icon1: special1, icon2: special2, path: '/special-projects' },
    { name: "Conversations", icon1: conversation1, icon2: conversation2, path: '/conversations' },
    { name: "Proposals", icon1: proposal1, icon2: proposal2, path: '/proposals' },
    { name: "User Management", icon1: usermanagement1, icon2: usermanagement2, path: '/user-management' },
  ]

  return (
    <nav className="py-6 px-2 space-y-2">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className="w-full text-xl flex items-center space-x-4 px-5 py-4"
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? item.icon2 : item.icon1}
                alt="icon"
                className="w-[30px] h-[30px]"
              />
              <span className={`${isActive && 'font-bold lilac'}`}>
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default Aside
