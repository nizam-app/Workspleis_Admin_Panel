import React from 'react'
import calender from '../assets/admin/jobs/calender.png'
import calender2 from '../assets/admin/jobs/calender2.png'
import clock from '../assets/admin/jobs/clock.png'
import users from '../assets/admin/dasbhoard/users.png'
import view from '../assets/admin/jobs/view.png'
import search from '../assets/search.png'

const jobs = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    company: "Tech Corp Inc.",
    type: "Flexible",
    time: "2 hours ago",
    price: 50, // number only, no "$"
    applications: "50 applications",
    dueDate: "2024-02-15",
    description:
      "Looking for an experienced full-stack developer to build a modern web application with React, Node.js, and MongoDB. The project involves creating a comprehensive business management system with user authentication, dashboard, reporting features, and API integrations.",
    status: "Active",
    image: "https://i.ibb.co.com/8nVNQ8DZ/image-266.png"
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    company: "Tech Corp Inc.",
    type: "Flexible",
    time: "2 hours ago",
    price: 60, // number only
    applications: "50 applications",
    dueDate: "2024-02-15",
    description:
      "Looking for an experienced full-stack developer to build a modern web application with React, Node.js, and MongoDB. The project involves creating a comprehensive business management system with user authentication, dashboard, reporting features, and API integrations.",
    status: "In Progress",
    image: "https://i.ibb.co.com/8nVNQ8DZ/image-266.png"
  }
];
const JobManagement = () => {
   return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-[32px] font-bold">Jobs Management</h1>
      <p className="text-black/70 text-[18px] pt-1">Manage all job postings and applications from clients</p>
    
      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-6 mt-8">
        <div className="flex  gap-2 items-center bg-[#A49ACF]/8 border border-[#686382]
        rounded-[50px] px-3 py-2 flex-1">
          {/* Search Icon */}
          <img src={search} alt="search" className=' w-[17px]' />
          <input
            type="text"
            placeholder="Search Jobs..."
            className="outline-none flex-1 py-1 "
          />
        </div>


        <select className="border border-[#686382] 
        rounded-[50px] px-3 py-3 outline-none">
          <option>All Status</option>
          <option>Active</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex border border-[#686382]/50 rounded-[10px] p-4 bg-white"
          >
            {/* Image */}
            <img
              src={job.image}
              alt={job.title}
              className="w-[80px] h-[55px] rounded-lg object-cover mr-4"
            />

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{job.title}</h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    job.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <p className="text-sm text-black/70">{job.company}</p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm mt-0.5">
                <span className="flex items-center gap-1 ">
                  {/* Briefcase Icon */}
                  <img src={clock} alt="clock" className='w-[20px] h-[20px]' />
                  {job.type}
                </span>
                <span className="flex items-center gap-1">
                  {/* Clock Icon */}
                  
                  <img src={calender} alt="calender" className='w-[16px] h-[16px]'/>
                  {job.time}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-black/80 mt-4 line-clamp-2">
                {job.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 text-sm">
                <div className="flex items-center gap-6">
                  <div className="font-semibold flex gap-0.5">
                    <span className='text-[#CAFF45]'>$</span>
                    <span>{job.price}</span>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <img src={users} alt="user image" className='w-[15px] h-[15px]'/>
                    <span>{job.applications}</span>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <img src={calender2} alt="calender image" className='w-[15px] h-[15px]'/>
                    <span className='text-black/50'>Due {job.dueDate}</span>
                  </div>
                </div>
                <button className=" flex gap-2 border border-[#686382] px-4 py-2 rounded-[10px] 
                text-sm font-semibold cursor-pointer ">
                  <img src={view} alt="view" className='w-[19px] h-[19px]' />
                  View Applications
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobManagement