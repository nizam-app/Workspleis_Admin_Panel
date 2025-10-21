import React, { useState } from "react";
import { Search, MoreVertical, CheckCircle, XCircle, User, MessageCircle } from "lucide-react";
import { Mail, MapPin, Clock, Calendar, Star } from "lucide-react";

const UserManagement = () => {
  // Tabs: Client / Service Provider
  const [activeTab, setActiveTab] = useState("CLIENT");
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  // Static data
  const users = [
  {
    id: 1,
    name: "Alex Developer",
    email: "alex@freelance.com",
    location: "London, UK",
    time: "2 hours ago",
    skills: ["React", "Node.js", "MongoDB"],
    rating: 4.9,
    jobsCompleted: 23,
    status: "ACTIVE",
    role: "CLIENT",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@agency.com",
    location: "Berlin, Germany",
    time: "5 hours ago",
    skills: ["Next.js", "Tailwind", "Firebase"],
    rating: 4.8,
    jobsCompleted: 18,
    status: "BLOCKED",
    role: "SERVICE_PROVIDER",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 3,
    name: "Sophia Lee",
    email: "sophia@uxlab.com",
    location: "Toronto, Canada",
    time: "1 day ago",
    skills: ["Figma", "Adobe XD", "UI Research"],
    rating: 4.7,
    jobsCompleted: 30,
    status: "ACTIVE",
    role: "SERVICE_PROVIDER",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 4,
    name: "Michael Carter",
    email: "michael@startup.io",
    location: "New York, USA",
    time: "3 hours ago",
    skills: ["Laravel", "MySQL", "Vue.js"],
    rating: 4.5,
    jobsCompleted: 14,
    status: "BLOCKED",
    role: "CLIENT",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 5,
    name: "Emily Johnson",
    email: "emily@creatives.com",
    location: "Paris, France",
    time: "6 hours ago",
    skills: ["Illustrator", "Photoshop", "Brand Design"],
    rating: 4.9,
    jobsCompleted: 25,
    status: "ACTIVE",
    role: "SERVICE_PROVIDER",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 6,
    name: "Daniel Brown",
    email: "daniel@techlabs.com",
    location: "Sydney, Australia",
    time: "8 hours ago",
    skills: ["Python", "Flask", "Django"],
    rating: 4.3,
    jobsCompleted: 20,
    status: "BLOCKED",
    role: "CLIENT",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 7,
    name: "Linda Martinez",
    email: "linda@devhouse.com",
    location: "Barcelona, Spain",
    time: "12 hours ago",
    skills: ["React Native", "TypeScript", "Expo"],
    rating: 4.6,
    jobsCompleted: 19,
    status: "ACTIVE",
    role: "SERVICE_PROVIDER",
    avatar: "https://i.pravatar.cc/100?img=10",
  },
  {
    id: 8,
    name: "Robert Wilson",
    email: "robert@enterprise.com",
    location: "Dubai, UAE",
    time: "2 days ago",
    skills: ["AWS", "DevOps", "CI/CD"],
    rating: 4.4,
    jobsCompleted: 16,
    status: "ACTIVE",
    role: "CLIENT",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 9,
    name: "Isabella Moore",
    email: "isabella@studio.com",
    location: "Rome, Italy",
    time: "5 hours ago",
    skills: ["UI Design", "HTML", "CSS"],
    rating: 4.8,
    jobsCompleted: 22,
    status: "BLOCKED",
    role: "SERVICE_PROVIDER",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 10,
    name: "Chris Evans",
    email: "chris@agencyplus.com",
    location: "Amsterdam, Netherlands",
    time: "3 days ago",
    skills: ["Next.js", "GraphQL", "PostgreSQL"],
    rating: 4.7,
    jobsCompleted: 28,
    status: "ACTIVE",
    role: "CLIENT",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
];


  // Filtered users
  const filteredUsers = users.filter(
    (u) =>
      u.role === activeTab &&
      (filterStatus === "All" || u.status === filterStatus) &&
      u.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBlockToggle = (user) => {
    setSelectedUser(user);
    setShowModal(user.status === "ACTIVE" ? "block" : "unblock");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-[32px] font-bold">User Management</h1>
      <p className="text-black/70 text-[18px] pt-1">
        Manage clients and service providers on your platform
      </p>

      {/* Tabs */}
      <div className="flex gap-3 mt-6">
        {["CLIENT", "SERVICE_PROVIDER"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium ${activeTab === tab
              ? "bg-[#CAFF45] text-[#686382]"
              : "bg-[#E9E7FF] text-black/60"
              }`}
          >
            {tab === "CLIENT" ? "Client" : "Service Provider"}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 mt-8">
        <div className="flex items-center gap-2 bg-[#F9F8FD] border border-[#686382]/30 rounded-full px-4 py-2 flex-1">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-black/50"
          />
        </div>
        {/* Custom Dropdown */}
        <div className="relative">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="appearance-none border border-[#686382]/30 rounded-full pl-4 pr-10 py-2 text-sm outline-none cursor-pointer bg-white hover:bg-gray-50 font-medium"
          >
            <option>All</option>
            <option value="ACTIVE">Active</option>
            <option value="BLOCKED">Blocked</option>
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

      {/* User Cards */}
      <div className="space-y-5 mt-6 w-full">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="border border-[#686382]/30 w-full rounded-[10px] p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            {/* Left Section */}
            <div className="flex w-full items-start gap-4">
              <div className="">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex items-center gap-2 mt-2 text-sm text-black/70">
                  <Star className="w-4 h-4 text-[#CAFF45]" fill="#CAFF45" />
                <span>{user.rating}</span>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex items-center justify-between gap-2 text-sm text-black/50 mt-1">
                  <h2 className="font-bold text-lg">{user.name}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === "ACTIVE"
                      ? "bg-[#CAFF45] text-[#686382]"
                      : "bg-[#E9E7FF] text-[#685CC8]"
                      }`}
                  >
                    {user.status === "ACTIVE" ? "Active" : "Blocked"}
                  </span>
                </div>


                <div className="flex items-center gap-2 text-sm text-black/60 mt-1">
                  <Mail className="w-4 h-4 text-[#686382]" />
                  <span>{user.email}</span>
                  <MapPin className="w-4 h-4 text-[#686382]" />
                  <span>{user.location}</span>

                </div>



                <div className="flex gap-2 mt-2">
                  {user.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#F2F2F2] text-black/80 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 mt-2 text-sm text-black/70">
                  {/* <Star className="w-4 h-4 text-[#CAFF45]" fill="#CAFF45" />
                  <span>{user.rating}</span> */}
                  <div className="flex items-center gap-2 mt-2 text-sm text-black/70">
                    <Calendar className="w-4 h-4 text-[#686382]" />
                  <span>{user.time}</span>
                  <span>• {user.jobsCompleted} jobs completed</span>
                  </div>
                  
                  <div className="flex gap-2 items-center">
  {/* Send Message Button */}
  <button
    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#686382] text-white hover:bg-[#57506b] transition"
  >
    <MessageCircle className="w-4 h-4" />
    <span>Send Message</span>
  </button>

  {/* Block / Unblock Button */}
  <button
    onClick={() => handleBlockToggle(user)}
    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition 
      ${
        user.status === "ACTIVE"
          ? "bg-red-100 text-red-600 hover:bg-red-200"
          : "bg-green-100 text-green-600 hover:bg-green-200"
      }`}
  >
    {user.status === "ACTIVE" ? (
      <>
        <XCircle className="w-4 h-4" /> Block User
      </>
    ) : (
      <>
        <CheckCircle className="w-4 h-4" /> Unblock User
      </>
    )}
  </button>
</div>

                  
                </div>
              </div>
            </div>

            
          </div>
        ))}
      </div>

      {/* Block Modal */}
      {showModal === "block" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm text-center shadow-lg">
            <h2 className="flex items-center justify-center gap-2 text-lg font-bold text-red-600">
              <XCircle className="w-5 h-5" /> Block User Account
            </h2>
            <p className="mt-3 text-black/70 text-sm">
              Are you sure you want to block <b>{selectedUser?.name}</b>?
            </p>
            <div className="flex justify-center gap-3 mt-5">
              <button
                onClick={() => setShowModal(null)}
                className="px-4 py-2 rounded-full border text-sm"
              >
                Cancel
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">
                Block
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unblock Modal */}
      {showModal === "unblock" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm text-center shadow-lg">
            <h2 className="flex items-center justify-center gap-2 text-lg font-bold text-green-600">
              <CheckCircle className="w-5 h-5" /> Unblock User Account
            </h2>
            <p className="mt-3 text-black/70 text-sm">
              Are you sure you want to unblock <b>{selectedUser?.name}</b>?
            </p>
            <div className="flex justify-center gap-3 mt-5">
              <button
                onClick={() => setShowModal(null)}
                className="px-4 py-2 rounded-full border text-sm"
              >
                Cancel
              </button>
              <button className="bg-[#CAFF45] text-[#686382] px-4 py-2 rounded-full text-sm">
                Unblock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
