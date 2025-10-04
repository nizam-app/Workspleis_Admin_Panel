import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";

import usersImage from '../assets/admin/dasbhoard/users.svg'
import jobsImage from '../assets/admin/dasbhoard/jobs.svg'
import specialsImage from '../assets/admin/dasbhoard/specials.svg'
import earningsImage from '../assets/admin/dasbhoard/earnings.svg'
import dotImage from '../assets/dot.svg'
import { Link } from "react-router";



const Overview = () => {
  // Stats
  const stats = [
    { title: "Total Jobs", value: 150, icon: jobsImage },
    { title: "Special Projects", value: 80, icon: specialsImage },
    { title: "Active Users", value: 1200, icon: usersImage },
    { title: "Revenue", value: "$1000", icon: earningsImage },
  ];

  // User growth data
  const userGrowthData = [
    { month: "Jan", users: 30 },
    { month: "Feb", users: 25 },
    { month: "Mar", users: 40 },
    { month: "Apr", users: 50 },
    { month: "May", users: 35 },
  ];

  // Job completion data
  const jobCompletionData = [
    { name: "Completed", value: 70 },
    { name: "Cancelled", value: 30 },
  ];
  const COLORS = ["#CAFF45", "#686382"];

const recentJobs = [
  {
    title: "Web Developer",
    company: "Tech Corp",
    budget: "200",
    payment: "50",
    applications: "12 applications",
    time: "2 hours ago",
    status: "Active",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    budget: "350",
    payment: "100",
    applications: "8 applications",
    time: "5 hours ago",
    status: "Active",
  },
  {
    title: "Mobile App Developer",
    company: "Appify Ltd",
    budget: "500",
    payment: "150",
    applications: "20 applications",
    time: "1 day ago",
    status: "Assigned",
  },
  {
    title: "Content Writer",
    company: "Bright Media",
    budget: "120",
    payment: "30",
    applications: "15 applications",
    time: "3 days ago",
    status: "Active",
  },
  {
    title: "Digital Marketer",
    company: "Growth Hub",
    budget: "400",
    payment: "80",
    applications: "10 applications",
    time: "1 week ago",
    status: "Assigned",
  },
];
  


  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-[32px] font-bold">Dashboard</h1>
      <p className="text-black/70 text-[18px] pt-1">Overview of your job completion platform</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="border  border-[#686382] 
            rounded-[10px] p-6 flex flex-col items-start"
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-black/70 ">{item.title}</p>
              <img src={item.icon} className="w-[35px] h-[35px]" alt="job image" />
            </div>
            <h2 className="text-[26px] mt-8 ">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Bar Chart */}
        <div className="p-4 w-full h-[400px]">
          <h3 className="font-bold text-[20px] mb-4">Track User Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="p-4 rounded-2xl shadow bg-white w-full h-[400px]">
          <h3 className="font-bold text-[20px] mb-4">Job Completion Rate</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={jobCompletionData}
                dataKey="value"
                nameKey="name"
                cx="40%"        // shift to the left
                cy="50%"
                innerRadius="50%"
                outerRadius="80%"
                paddingAngle={5}
              >
                {jobCompletionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Jobs + Projects Section */}
      <div className=" mt-20  grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <div className="p-4 rounded-[10px] border
         border-[#686382]/50">
          <div className="mb-5">
            <h3 className="font-bold text-sm mb-1">Recent Jobs</h3>
            <p lang="text-black/70">Latest job postings from clients</p>
          </div>
          <div className="mb-2 flex flex-col gap-3 justify-between">
            {/* card */}
            {recentJobs.map((item,index)=>{
              return (
                <div className="
                rounded-[10px] border
         border-[#686382]/50 p-4 w-full flex justify-between items-center"
              key={index}>
              {/* card left */}
              <div>
                <h1 className="font-bold ">{item.title}</h1>
                <p className="text-sm text-black/70 mt-1">{item.company}</p>
                <div className="mt-3 text-sm flex items-center gap-1">
                  <span >${item.budget}</span>
                  <img src={dotImage} alt="dote" />
                  <span>{item.applications}</span>
                  <img src={dotImage} alt="dote" />
                  <span className="text-black/50">{item.time}</span>
                </div>
              </div>
              {/* card right */}
              <p className={`
              ${ item.status === "Active" ? 'bg-[#CAFF45] text-[#686382]'
                : item.status === "Assigned" ? "bg-[#A49ACF] text-white" : ""
              } px-3 py-1 
              rounded-[50px] text-[10px]`}>
                {item.status}
              </p>
            </div>
              )
            })}

          </div>
         <Link to='/job-management'> 
          <button className="w-full cursor-pointer mt-3 font-bold py-2 border border-[#686382]/50 rounded-[10px]">
              View All Jobs
            </button>
          </Link>
        </div>

        {/* Special Projects */}
        <div className="p-4 rounded-[10px] border
         border-[#686382]/50">
          <div className="mb-5">
            <h3 className="font-bold text-sm mb-1">Special Projects</h3>
            <p lang="text-black/70">Projects requiring admin proposals</p>
          </div>
          <div className="mb-2 flex flex-col gap-3 justify-between">
            {/* card */}
            {recentJobs.map((item,index)=>{
              return (
                <div className="
                rounded-[10px] border
         border-[#686382]/50 p-4 w-full flex justify-between items-center"
              key={index}>
              {/* card left */}
              <div>
                <h1 className="font-bold ">{item.title}</h1>
                <p className="text-sm text-black/70 mt-1">{item.company}</p>
                <div className="mt-3 text-sm flex items-center gap-1">
                  <span >${item.budget}</span>
                  <img src={dotImage} alt="dote" />
                  <span>{item.applications}</span>
                  <img src={dotImage} alt="dote" />
                  <span className="text-black/50">{item.time}</span>
                </div>
              </div>
              {/* card right */}
              <p className="bg-[#CAFF45] text-[#686382] px-3 py-1 rounded-[50px] text-[10px]">
                {item.status}
              </p>
            </div>
              )
            })}

          </div>
        <Link to='/special-projects' >  
        <button className="w-full cursor-pointer mt-3 font-bold py-2 border border-[#686382]/50 rounded-[10px]">
            View All Special Project
          </button>
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Overview;
