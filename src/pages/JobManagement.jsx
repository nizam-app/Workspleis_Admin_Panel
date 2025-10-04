import React, { useEffect, useState } from 'react'
import calender from '../assets/admin/special/calender.svg'
import calender2 from '../assets/admin/jobs/calender2.png'
import clock from '../assets/admin/special/clock.svg'
import users from '../assets/admin/dasbhoard/users.png'
import view from '../assets/admin/jobs/view.png'
import message from '../assets/admin/jobs/message.svg'
import search from '../assets/search.png'

import user from '../assets/admin/jobs/user.svg'
import { Link } from 'react-router'

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
  const [seeApplications, setSeeApplications] = useState(false);
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
                  className={`px-3 py-1 text-xs font-medium rounded-full ${job.status === "Active"
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
                  <img src={clock} alt="clock" className='w-[16px] h-[16px]' />
                  {job.type}
                </span>
                <span className="flex items-center gap-1">
                  {/* Clock Icon */}

                  <img src={calender} alt="calender" className='w-[16px] h-[16px]' />
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
                    <img src={users} alt="user image" className='w-[15px] h-[15px]' />
                    <span>{job.applications}</span>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <img src={calender2} alt="calender image" className='w-[15px] h-[15px]' />
                    <span className='text-black/50'>Due {job.dueDate}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSeeApplications(true)}
                  className=" flex gap-2 border border-[#686382] px-4 py-2 rounded-[10px] 
                text-sm font-semibold cursor-pointer ">
                  <img src={view} alt="view" className='w-[19px] h-[19px]' />
                  View Applications
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {seeApplications && <JobDetailsModal onClose={() => setSeeApplications(false)} />}
    </div>
  );
}



const JobDetailsModal = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShow(true), 20);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className={`bg-white rounded-xl w-[800px] max-h-[90vh] overflow-y-auto 
      p-6 transform transition-all duration-300 ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}
      >
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>

        {/* Job Title */}
        <div className='pb-4'>
          <h2 className="text-[32px] font-bold">Full-Stack Web Development</h2>
          <p className="text-black/70">Tech Corp Inc. • 15 applications</p>
        </div>

        {/* Header Image */}
        <img
          src="https://i.ibb.co.com/xtM4F6rp/photo-1688560952189-ef386cea744e-1.png"
          alt="Job Banner"
          className="rounded-t-xl w-full h-80 object-cover"
        />



        {/* Job Info */}
        <div className="grid grid-cols-7 gap-2  pt-6 text-sm">
          <div>
            <span className="block text-black/70">Category</span>
            <span className="font-bold ">Tech Corp Inc.</span>
          </div>
          <div>
            <span className="block text-black/70">Job Type</span>
            <span className="inline-block bg-[#A49ACF] text-white
             px-2 py-0.5 rounded-full text-xs mt-2">
              Remote
            </span>
          </div>
          <div>
            <span className="block text-black/70">Preferred Time</span>
            <span className="font-bold">Flexible</span>
          </div>
          <div>
            <span className="block text-black/70">Status</span>
            <span className="inline-block bg-[#CAFF45] text-[#686382] px-2 py-0.5 
            rounded-full text-xs mt-2">
              Active
            </span>
          </div>
          <div>
            <span className="block text-black/70">Budget</span>
            <span className="font-bold">$5,000</span>
          </div>
          <div>
            <span className="block text-black/70">Posted Date</span>
            <span className="font-bold">2024-01-15</span>
          </div>
          <div>
            <span className="block text-black/70">Deadline</span>
            <span className="font-bold">2024-02-15</span>
          </div>
        </div>

        {/* Job Description */}
        <div className="py-4">
          <h3 className="text-[18px] font-bold mb-2">Job Description</h3>
          <p className="text-black/70 leading-relaxed">
            Looking for an experienced full-stack developer to build a modern
            web application with React, Node.js, and MongoDB. The project
            involves creating a comprehensive business management system with
            user authentication, dashboard, reporting features, and API
            integrations.
          </p>
        </div>

        {/* Applications */}
        <div className="py-4">
          <h3 className="text-[18px] font-bold mb-4">
            Applications (12)
          </h3>

          {/* applications card   */}
          <div
            className="border border-[#686382]/50 rounded-[10px] p-4"
          >
            <div className="flex justify-between items-start">
              <div className='flex gap-2 items-center'>
                <div><img src={user} alt="profile" /></div>
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    Design Pro{" "}
                    <span className="text-[#CAFF45] text-xs font-bold">
                      Pending
                    </span>
                  </h4>
                  <p className="text-black/70 text-sm">⭐ 4.9 (10 reviews)</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#A49ACF] font-bold">$300</p>
                <p className="text-xs text-black/70">Proposal Amount</p>
              </div>
            </div>


            <div className="flex text-xs text-black/70 gap-3 mt-5">
              <div className='flex gap-1'><img src={clock} alt="clock" />
                <span>Applied 2024-01-14 </span></div>
              <div className='flex gap-1'>
                <img src={calender} alt="calender" />

                <span>Timeline: 3 weeks</span></div>
            </div>

            <div className='bg-[#F2F2F2] rounded-[15px] p-3 mt-2'>
              <p className="text-sm text-[black/70]">
                "I have 8+ years of experience in full-stack development and
                have completed similar projects. I can deliver this within the
                timeline with high quality standards..."
              </p>
            </div>


            <div className='flex justify-between items-center'>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {["React", "Node.js", "TypeScript", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-[#EAEAEA] px-2 py-0.5 
                    rounded-[5px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="bg-[#686382] text-white text-sm px-4 cursor-pointer  
                rounded-[10px] flex items-center justify-center gap-1">
                  <img src={message} alt="message" className='w-4' />
                  <span>Contact</span>
                </button>

                
                <Link to='/user-profile'>
                <button
                  className=" flex gap-2 border border-[#686382] px-4 py-2 rounded-[10px] 
                text-sm font-semibold cursor-pointer ">
                  <img src={view} alt="view" className='w-[19px] h-[19px]' />
                  View Profile
                </button>
</Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}



















export default JobManagement