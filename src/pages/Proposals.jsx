import React from 'react'

const jobs = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    company: "Tech Corp Inc.",
    type: "Flexible",
    time: "2 hours ago",
    price: "$50",
    applications: "50 applications",
    dueDate: "2024-02-15",
    description:
      "Looking for an experienced full-stack developer to build a modern web application with React, Node.js, and MongoDB. The project involves creating a comprehensive business management system with user authentication, dashboard, reporting features, and API integrations.",
    status: "Active",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    company: "Tech Corp Inc.",
    type: "Flexible",
    time: "2 hours ago",
    price: "$60",
    applications: "50 applications",
    dueDate: "2024-02-15",
    description:
      "Looking for an experienced full-stack developer to build a modern web application with React, Node.js, and MongoDB. The project involves creating a comprehensive business management system with user authentication, dashboard, reporting features, and API integrations.",
    status: "In Progress",
    image: "https://via.placeholder.com/60"
  }
];

const Proposals =() =>{
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Jobs Management</h1>
      <p className="text-gray-500 mb-6">
        Manage all job postings and applications from clients
      </p>

      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Jobs..."
            className="outline-none flex-1 text-sm"
          />
        </div>
        <select className="border rounded-lg px-3 py-2 text-sm">
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
            className="flex border rounded-xl p-4 bg-white shadow-sm"
          >
            {/* Image */}
            <img
              src={job.image}
              alt={job.title}
              className="w-16 h-16 rounded-lg object-cover mr-4"
            />

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{job.title}</h3>
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
              <p className="text-sm text-gray-500">{job.company}</p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  {/* Briefcase Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6M9 8V6a3 3 0 013-3h0a3 3 0 013 3v2m6 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6h16z"
                    />
                  </svg>
                  {job.type}
                </span>
                <span className="flex items-center gap-1">
                  {/* Clock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                    />
                  </svg>
                  {job.time}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {job.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 text-sm">
                <div className="flex items-center gap-6 text-gray-500">
                  <span className="font-semibold text-green-600">
                    {job.price}
                  </span>
                  <span>{job.applications}</span>
                  <span>Due {job.dueDate}</span>
                </div>
                <button className="border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
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





export default Proposals