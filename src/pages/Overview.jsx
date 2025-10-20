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
import { formatDistanceToNow } from "date-fns";
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
const statusColors = {
  Open: "bg-purple-100 text-purple-600",
  Assigned: "bg-blue-100 text-blue-600",
  In_progress: "bg-yellow-100 text-yellow-600",
  In_review: "bg-orange-100 text-orange-600",
  Delivered: "bg-green-100 text-green-600",
};
const recentJobs = [
  {
    title: "Frontend Web Developer",
    category: "Web Development",
    description: "Build a responsive landing page using React and Tailwind CSS.",
    images: ["/uploads/react-job1.png"],
    jobType: "Remote",
    timeline: "Flexible",
    location: "",
    budget: 250,
    status: "Open",
    createdBy: "6713a21ef5c0b1d23bfa9021",
    assignedTo: null,
    createdAt: "2025-10-17T10:00:00Z"
  },
  {
    title: "Shopify Store Customization",
    category: "E-commerce",
    description: "Customize product page layout and integrate a subscription app.",
    images: ["/uploads/shopify-custom.png"],
    jobType: "Remote",
    timeline: "Afternoon",
    location: "",
    budget: 400,
    status: "In_progress",
    createdBy: "6713a21ef5c0b1d23bfa9022",
    assignedTo: "6713a21ef5c0b1d23bfa9033",
    createdAt: "2025-10-16T15:30:00Z"
  },
  {
    title: "Local Restaurant Website",
    category: "Web Design",
    description: "Create a 5-page restaurant website with booking system integration.",
    images: ["/uploads/restaurant-site.png"],
    jobType: "Onsite",
    timeline: "Morning",
    location: "Dhaka, Bangladesh",
    budget: 600,
    status: "Assigned",
    createdBy: "6713a21ef5c0b1d23bfa9023",
    assignedTo: "6713a21ef5c0b1d23bfa9035",
    createdAt: "2025-10-15T08:00:00Z"
  },
  {
    title: "Mobile App UI/UX Design",
    category: "Design",
    description: "Design the onboarding and profile screens for a social app.",
    images: ["/uploads/app-ui.png"],
    jobType: "Remote",
    timeline: "Evening",
    location: "",
    budget: 350,
    status: "In_review",
    createdBy: "6713a21ef5c0b1d23bfa9024",
    assignedTo: "6713a21ef5c0b1d23bfa9036",
    createdAt: "2025-10-14T20:00:00Z"
  },
  {
    title: "SEO Optimization for Blog",
    category: "Marketing",
    description: "Improve on-page SEO and add schema markup to WordPress blog.",
    images: ["/uploads/seo-blog.png"],
    jobType: "Remote",
    timeline: "Flexible",
    location: "",
    budget: 180,
    status: "Delivered",
    createdBy: "6713a21ef5c0b1d23bfa9025",
    assignedTo: "6713a21ef5c0b1d23bfa9037",
    createdAt: "2025-10-10T14:00:00Z"
  }
];


const specialProjects = [
      {
        title: "E-commerce Website Redesign",
        category: "Web Development",
        description: "Redesign an existing Shopify store with a modern, conversion-focused layout.",
        urgency: "Immediate",
        nda: true,
        budgetRange: "$800 - $1000",
        photos: ["shopify-redesign-brief.pdf"],
        name: "Jessica Brown",
        role: "Business Owner",
        prefferredCommunication: "Email",
        contactTime: "Morning",
        createdBy: "652e91b2f7a5a23b4c7d8e91", // Example ObjectId
        status: "Submitted",
      },
      {
        title: "Mobile App Prototype for Fitness Tracking",
        category: "UI/UX Design",
        description: "Create a clickable Figma prototype for a cross-platform fitness tracking app.",
        urgency: "1-2 weeks",
        nda: true,
        budgetRange: "$400 - $600",
        photos: ["fitness-prototype-wireframes.zip"],
        name: "Daniel Lee",
        role: "Startup Founder",
        prefferredCommunication: "Phone",
        contactTime: "Afternoon",
        createdBy: "652e91b2f7a5a23b4c7d8e92",
        status: "Proposal_Sent",
      },
      {
        title: "Custom CRM Dashboard",
        category: "Software Development",
        description: "Develop a tailored CRM dashboard with analytics, task tracking, and user management.",
        urgency: "Immediate",
        nda: false,
        budgetRange: "$1500 - $2000",
        photos: ["crm-dashboard-requirements.docx"],
        name: "Sophia Martinez",
        role: "Project Manager",
        prefferredCommunication: "In_app",
        contactTime: "Morning",
        createdBy: "652e91b2f7a5a23b4c7d8e93",
        status: "In_Progress",
      },
      {
        title: "Corporate Branding Package",
        category: "Graphic Design",
        description: "Design a complete brand identity including logo, color palette, and marketing materials.",
        urgency: "Flexible",
        nda: true,
        budgetRange: "$300 - $500",
        photos: ["brand-guidelines.pdf"],
        name: "Michael Carter",
        role: "Marketing Director",
        prefferredCommunication: "Email",
        contactTime: "Evening",
        createdBy: "652e91b2f7a5a23b4c7d8e94",
        status: "In_Review",
      },
      {
        title: "SEO Optimization for Travel Blog",
        category: "Digital Marketing",
        description: "Optimize on-page SEO, improve keyword targeting, and build high-quality backlinks.",
        urgency: "1-2 weeks",
        nda: false,
        budgetRange: "$250 - $400",
        photos: ["seo-audit-report.pdf"],
        name: "Emily Johnson",
        role: "Content Creator",
        prefferredCommunication: "In_app",
        contactTime: "Afternoon",
        createdBy: "652e91b2f7a5a23b4c7d8e95",
        status: "Delivered",
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

      {/* Recent Jobs + Projects Section */}
      <div className=" mt-20  grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Jobs */}
          <div className="border rounded-xl p-5 bg-white">
      <h3 className="font-semibold text-gray-900">Recent Jobs</h3>
      <p className="text-sm text-gray-500 mb-4">
        Latest job postings from clients
      </p>

      <div className="space-y-3">
        {recentJobs.map((job) => (
          <div
            key={job._id}
            className="border rounded-lg p-4 flex justify-between items-start hover:shadow-sm transition"
          >
            <div>
              <h4 className="font-semibold text-gray-800">{job.title}</h4>
              <p className="text-sm text-gray-500 mb-1">
                {job.category} • {job.jobType} • {job.timeline}
              </p>
              {job.jobType === "Onsite" && (
                <p className="text-sm text-gray-500">{job.location}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                ${job.budget} •{" "}
                {formatDistanceToNow(new Date(job.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>

            <span
              className={`px-3 py-1 text-xs font-medium rounded-full self-start ${statusColors[job.status] || "bg-gray-100 text-gray-600"
                }`}
            >
              {job.status.replace("_", " ")}
            </span>
          </div>
        ))}
      </div>

      <Link
        to="/job-management"
        className="block text-center mt-4 border rounded-lg py-2 font-medium text-sm text-gray-800 hover:bg-gray-50"
      >
        View All Jobs
      </Link>
    </div>
        
        {/* Special project */}
          <div className="p-4 rounded-[10px] border border-[#686382]/50">
                <div className="mb-5">
                  <h3 className="font-bold text-sm mb-1">Special Projects</h3>
                  <p className="text-black/70 text-sm">Projects requiring admin proposals</p>
                </div>
          
                <div className="mb-2 flex flex-col gap-3">
                  {specialProjects.map((item, index) => {
                    // status color handling
                    const statusStyles = {
                      Submitted: "bg-gray-200 text-gray-600",
                      Proposal_Sent: "bg-[#CAFF45] text-[#686382]",
                      In_Progress: "bg-blue-100 text-blue-700",
                      In_Review: "bg-purple-200 text-purple-700",
                      Delivered: "bg-green-200 text-green-700",
                    };
          
                    return (
                      <div
                        key={index}
                        className="rounded-[10px] border border-[#686382]/50 p-4 w-full flex justify-between items-center"
                      >
                        {/* Left Section */}
                        <div>
                          <h1 className="font-bold">{item.title}</h1>
                          <p className="text-sm text-black/70 mt-1">{item.category}</p>
                          <div className="mt-3 text-sm flex items-center gap-1">
                            <span>{item.budgetRange}</span>
                            <img src={dotImage} alt="dot" className="w-1.5 h-1.5" />
                            <span>12 applications</span>
                            <img src={dotImage} alt="dot" className="w-1.5 h-1.5" />
                            <span className="text-black/50">
                              {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "2 hours ago"}
                            </span>
                          </div>
                        </div>
          
                        {/* Right Section - Status Tag */}
                        <p
                          className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                            statusStyles[item.status] || "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.status.replace("_", " ")}
                        </p>
                      </div>
                    );
                  })}
                </div>
          
                <Link to="/special-projects">
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
