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

import usersImage from '../assets/admin/dasbhoard/users.png'
import jobsImage from '../assets/admin/dasbhoard/jobs.png'
import specialsImage from '../assets/admin/dasbhoard/specials.png'
import earningsImage from '../assets/admin/dasbhoard/earnings.png'



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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <div className="p-4 shadow rounded-2xl bg-white">
          <h3 className="font-semibold mb-2">Recent Jobs</h3>
          <div className="border p-3 rounded-lg mb-2 flex justify-between">
            <div>
              <p className="font-semibold">Web Developer</p>
              <p className="text-sm text-gray-500">Tech Corp - $200</p>
            </div>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
              Active
            </span>
          </div>
        </div>

        {/* Special Projects */}
        <div className="p-4 shadow rounded-2xl bg-white">
          <h3 className="font-semibold mb-2">Special Projects</h3>
          <div className="border p-3 rounded-lg mb-2 flex justify-between">
            <div>
              <p className="font-semibold">Web Developer</p>
              
              <p className="text-sm text-gray-500">Tech Corp - $300</p>
            </div>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
              Proposal Sent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
