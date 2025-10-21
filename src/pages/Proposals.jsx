import React, { useState } from "react";
import calenderImage from "../assets/admin/proposals/calender.svg";
import clockImage from "../assets/admin/proposals/clock.svg";
import filesImage from "../assets/admin/proposals/files.svg";
import { Files, Clock, CheckCircle2, XCircle, Search } from "lucide-react";

const Proposals = () => {
  // Stats
  const stats = [
    { title: "Total Proposal", value: 150, icon: <Files className="w-6 h-6 text-[#A49ACF]" /> },
    { title: "Pending Proposal", value: 80, icon: <Clock className="w-6 h-6 text-[#A49ACF]" /> },
    { title: "Accepted Proposal", value: 1200, icon: <CheckCircle2 className="w-6 h-6 text-[#A49ACF]" /> },
    { title: "Rejected Proposal", value: 1000, icon: <XCircle className="w-6 h-6 text-[#A49ACF]" /> },
  ];

  // Proposals
 const proposals = [
  {
    title: "Enterprise CRM System Development",
    est: "3 weeks",
    sent: "Jan 15, 2024",
    amount: "$300",
    status: "Accepted",
    attachments: [
      { name: "photos.pdf", url: "#" },
      { name: "projects.zip", url: "#" },
    ],
    description:
      "“I have 8+ years of experience in full-stack development and have completed similar projects. I can deliver this within the timeline with high quality standards...”",
  },
  {
    title: "Website Redesign Project",
    est: "2 weeks",
    sent: "Feb 2, 2024",
    amount: "$450",
    status: "Pending",
    attachments: [{ name: "redesign.pdf", url: "#" }],
    description:
      "“Specialized in UI/UX and front-end, I can redesign your website with modern visuals and responsive layouts...”",
  },
  {
    title: "Social Media Automation Tool",
    est: "1 month",
    sent: "Mar 10, 2024",
    amount: "$800",
    status: "Rejected",
    attachments: [{ name: "automation-proposal.docx", url: "#" }],
    description:
      "“I have built social media automation tools with APIs and dashboards — I can deliver a scalable version tailored for your needs...”",
    rejectionReason:
      "The proposed cost exceeded our budget, and we have selected another vendor offering similar functionality at a lower rate.",
  },
];


  const [showReasonModal, setShowReasonModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");


  const openReasonModal = (reason) => {
  setSelectedReason(reason || "No reason provided.");
  setShowReasonModal(true);
};


  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredProposals = proposals.filter(
    (p) =>
      (statusFilter === "All Status" || p.status === statusFilter) &&
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-[32px] font-bold">Proposals</h1>
      <p className="text-black/70 text-[18px] pt-1">
        Manage proposals and handle bidding negotiations with clients
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="border border-[#686382] rounded-[10px] p-6 flex flex-col items-start"
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-black/70">{item.title}</p>
              {item.icon}
            </div>
            <h2 className="text-[26px] mt-8 font-semibold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* 🔍 Search & Filter Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 mt-8">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-[#F9F8FD] border border-[#686382]/30 rounded-full px-4 py-2 flex-1">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search proposal ....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-black/50"
          />
        </div>
        {/* Custom Dropdown */}
        <div className="relative">
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none border border-[#686382]/30 rounded-full pl-4 pr-10 py-2 text-sm outline-none cursor-pointer bg-white hover:bg-gray-50 font-medium"
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>

          {/* Dropdown Arrow */}
          <svg
            className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/60"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Proposal List */}
      <div className="space-y-6 mt-6">
        {filteredProposals.length ? (
          filteredProposals.map((p, idx) => (
            <div
              key={idx}
              className="border border-[#686382]/50 rounded-[10px] p-5 space-y-3"
            >
              {/* Top */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold">
                    {p.title}
                    <span
                      className={`ml-3 px-2 py-0.5 text-xs rounded-full ${p.status === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : p.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                        }`}
                    >
                      {p.status}
                    </span>
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-black/50 mt-1">
                    <span className="flex gap-1">
                      <img src={clockImage} alt="clock" />Est: {p.est}
                    </span>
                    <span className="flex gap-1">
                      <img src={calenderImage} alt="calender" />Sent {p.sent}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <span className="text-[#A49ACF] font-bold text-[18px]">
                    {p.amount}
                  </span>
                  <span className="text-black/70 text-sm">Proposal Amount</span>
                </div>
              </div>

              {/* Attachments */}
              <div>
                <p className="font-semibold mb-1">Attachments</p>
                <div className="flex gap-4 text-blue-500 text-sm mt-2">
                  {p.attachments.map((a, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <img src={filesImage} alt="file" />
                      <a href={a.url} className="hover:underline text-sm">
                        {a.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="bg-[#F2F2F2] rounded-[15px] p-3 text-black/70">
                {p.description}
              </p>
              {/* Show Reason Button if Rejected */}
              {p.status === "Rejected" && (
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => openReasonModal(p.rejectionReason)}
                    className="bg-[#A49ACF] hover:bg-[#8E83CC] text-white px-5 py-2 rounded-[10px] text-sm font-medium"
                  >
                    See the Reason
                  </button>
                </div>
              )}

            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No proposals found matching your criteria.
          </p>
        )}
      </div>
      {showReasonModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-lg">
            <button
              onClick={() => setShowReasonModal(false)}
              className="absolute right-5 top-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-[#686382] mb-3">
              Rejection Reason
            </h2>
            <p className="text-gray-700 leading-relaxed">{selectedReason}</p>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowReasonModal(false)}
                className="bg-[#CAFF45] text-[#686382] px-5 py-2 rounded-full font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Proposals;
