import React, { useEffect, useState } from 'react'
import view from '../assets/admin/jobs/view.png'
import search from '../assets/search.png'
import send from '../assets/admin/special/send.svg'
import dot from '../assets/admin/special/dot.svg'
import calender from '../assets/admin/special/calender.svg'
import user from '../assets/admin/special/user.svg'
import clock from '../assets/admin/special/clock.svg'
import cancell from '../assets/admin/special/cancell.svg'
import completed from '../assets/admin/special/completed.svg'
import pending from '../assets/admin/special/pending.svg'
import total from '../assets/admin/special/total.svg'
import plane from '../assets/admin/special/plane.svg'

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

const specials = [
  {
    "id": "proj-001",
    "title": "Enterprise CRM System Development",
    "company": "MegaCorp Industries",
    "category": "Software Development",
    "description": "Looking for an experienced full-stack developer to build a modern web application with React, Node.js, and MongoDB. The project involves creating a comprehensive business management system with user authentication, dashboard, reporting features, and API integrations.",
    "budget": {
      "amount": 500,
      "currency": "USD"
    },
    "preferred_shift": "Morning (9AM-12PM)",
    "submitted_date": "2024-01-15",
    "status": "Submitted",
    "actions": ["View Project", "Send Proposal"]
  },
  {
    "id": "proj-002",
    "title": "SaaS Analytics Dashboard",
    "company": "DataWave Solutions",
    "category": "Software Development",
    "description": "Develop an interactive analytics dashboard for a SaaS product using React, D3.js and Node.js. Features include real-time charts, user roles, exportable reports and RESTful API integrations.",
    "budget": {
      "amount": 1200,
      "currency": "USD"
    },
    "preferred_shift": "Afternoon (1PM-5PM)",
    "submitted_date": "2024-02-03",
    "status": "Sent Proposal",
    "actions": ["View Project", "Send Proposal"]
  },
  {
    "id": "proj-003",
    "title": "E-commerce Platform Migration",
    "company": "RetailNext",
    "category": "E-commerce / Software",
    "description": "Migrate legacy e-commerce platform to a modern stack using Next.js, Node.js, and MongoDB. Required: payment gateway integration, inventory sync, search optimization and admin dashboard.",
    "budget": {
      "amount": 2500,
      "currency": "USD"
    },
    "preferred_shift": "Evening (5PM-9PM)",
    "submitted_date": "2024-03-10",
    "status": "In Progress",
    "actions": ["View Project", "Send Proposal"]
  },
  {
    "id": "proj-004",
    "title": "Mobile-first Inventory App",
    "company": "LogiTrak Inc.",
    "category": "Mobile / Software Development",
    "description": "Build a mobile-first inventory management app with offline sync, barcode scanning and cloud-based reporting. Tech suggestions: React Native, Node.js, MongoDB/Firestore.",
    "budget": {
      "amount": 900,
      "currency": "USD"
    },
    "preferred_shift": "Morning (8AM-11AM)",
    "submitted_date": "2024-04-21",
    "status": "Submitted",
    "actions": ["View Project", "Send Proposal"]
  },
  {
    "id": "proj-005",
    "title": "HR Onboarding Portal",
    "company": "PeopleFirst HR",
    "category": "Software Development",
    "description": "Create an HR onboarding portal with secure user authentication, document management, progress tracking, and reporting. Backend APIs, role-based access and a clean admin UI required.",
    "budget": {
      "amount": 700,
      "currency": "USD"
    },
    "preferred_shift": "Morning (9AM-12PM)",
    "submitted_date": "2024-05-05",
    "status": "In Review",
    "actions": ["View Project", "Send Proposal"]
  }
]


// Stats
const stats = [
  { title: "Total Special Projects", value: 150, icon: total },
  { title: "Completed Special Projects", value: 80, icon: completed },
  { title: "Pending Special Projects", value: 1200, icon: pending },
  { title: "Cancelled Special Projects ", value: 1000, icon: cancell },
];

const SpecialProject = () => {
  const [trackModel, setTrackModel] = useState(false);
  const [submitOrder, setSubmitOrder] = useState(false);
  const [viewSubmition, setViewSubmition] = useState(false);
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
        {specials.map((job) => (
          <div
            key={job.id}
            className="border border-[#686382]/50 rounded-[10px] p-4 bg-white"
          >
            <div className='flex'>
              {/* Image */}
              <img
                src={job.image}
                alt={job.title}
                className="w-[80px] h-[55px] rounded-lg object-cover mr-4 border"
              />
              <div className='w-full'>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{job.title}</h3>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full 
                      ${job.status === "Submitted"
                        ? "bg-[#CAFF45] text-[#686382]"
                        : "bg-[#686382] text-white"
                      }`}
                  >
                    {job.status}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <p className="text-sm flex gap-1">
                    <img src={user} alt="user" />
                    <span className='text-black/60 font-bold'>{job.company}</span>
                  </p>
                  <img src={dot} alt="dote" />
                  <p className="text-sm flex gap-1">
                    <span className='text-black/60 '>{job.category}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div >
              {/* Description */}
              <p className="text-sm text-black/80 mt-4 line-clamp-2">
                {job.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm mt-3">
                <span className="flex items-center gap-1 ">
                  <span className='text-[#CAFF45]'>$</span>
                  {job.budget.amount}
                </span>
                <span className="flex 
                      items-center gap-1 text-black/50">
                  {/* Clock Icon */}
                  <img src={clock} alt="clock" />
                  {job.preferred_shift}
                </span>
                <span className="flex items-center gap-1 text-black/50">
                  {/* Clock Icon */}
                  <img src={calender} alt="calender" />
                  {job.submitted_date}
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center 
                    justify-between mt-4 text-sm">

                <button className="flex gap-2 border border-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer ">
                  <img src={view} alt="view" className='w-[19px] h-[19px]' />
                  View Project
                </button>


                {job.status === 'Submitted' &&
                  <button className="flex gap-2 bg-[#CAFF45] text-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer ">
                    <img src={send} alt="send" />
                    Send Proposal
                  </button>}

                {(job.status === 'In Progress' || job.status === 'In Review') &&
                  <div className='flex gap-3'>
                    <button 
                    onClick={() => setTrackModel(true)}
                      className="flex gap-2 text-white bg-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer">
                      Track Project
                    </button>
                    <button 
                    
                    onClick={()=>{
                      job.status === 'In Progress' && setSubmitOrder(true);
                    }}
                    
                    className="flex gap-2 bg-[#CAFF45] text-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer ">
                      Completed Project
                    </button>
                  </div>

                }


              </div>
            </div>
          </div>
        ))}
      </div>


      {trackModel && <TrackerModel onClose={() => setTrackModel(false)} />}
      {submitOrder && <SubmitOrderModel onClose={()=>setSubmitOrder(false)} />}

    </div>
  )
}

export default SpecialProject;


const TrackerModel = ({ onClose }) => {
  const progress = 45;

  const steps = [
    { title: "Submitted", description: "Your request has been successfully submitted and recorded in our system.", completed: true },
    { title: "Proposal Sent", description: "Our team has reviewed your request and a proposal has been prepared and shared with you", completed: true },
    { title: "In Progress", description: "Work on your project has started, and our team is actively making progress toward completion.", completed: true },
    { title: "Completed", description: "The project has been successfully delivered and all tasks are finalized.", completed: false },
    { title: "Delivered", description: "Work on your project has been completed, and our team is actively making progress toward completion.", completed: false },
  ];
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShow(true), 10);
  }, []);
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40 z-50'>
      <div className={`max-w-md  mx-auto bg-white shadow-lg 
    rounded-xl p-5 space-y-5
    transform transition-all duration-300 
        ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}>
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>


        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#CAFF45] p-2 rounded-[9px]">
              <img src={plane} alt="plane" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Special Project</h2>
              <p className="text-sm text-[#C2C2C2]">Title :</p>
            </div>
          </div>

        </div>

        {/* Progress */}
        <div>
          <p className="text-sm  mb-1">Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-[#CAFF45] h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-right text-gray-600 mt-1">{progress}%</p>
        </div>

        <div className='border border-[#CAFF45] rounded-[10px]'>
          {/* Timeline */}
          <div className="p-4.5">
            <h3 className="text-sm font-bold mb-4 ">Project Timeline</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {step.completed ? (
                    <div className="mt-1 bg-[#CAFF45] text-white p-2 rounded-[100px]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="mt-1 p-1.5 text-gray-300 rounded-full border-2 border-gray-300">
                      <div className="w-5 h-5 "></div>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">{step.title}</h4>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const SubmitOrderModel = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAddFile = () => {
    if (selectedFile) {
      setFiles([...files, selectedFile]);
      setSelectedFile(null);
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleSubmit = () => {
    // Submission logic here
    alert('Project marked as completed!');
    onClose();
  };


  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40 z-50'>
      <div className={`bg-white rounded-2xl w-full max-w-xl p-6 shadow-lg transform transition-all duration-300 
        ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-[26px] font-bold mb-1">Project Completed</h2>
        <p className="text-[#4B4646]/80 mb-6">Let the client know you've finished the work.</p>

        {/* Completion Message */}
        <div >
          <label className="block font-semibold mb-3">Completion Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Discover what you have completed."
            className="w-full h-24  
             rounded-[10px] p-3
             bg-[#F4F3F3] focus:outline-none "
          />
        </div>

        {/* File Upload */}
        <div className="mt-2 mb-5">
          <label className="block font-semibold mb-1">Attachments</label>
          <div className="flex gap-2">
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="flex-1  rounded-[10px] px-3 py-2 bg-[#EAE9E9] text-gray-600 outline-none"
            />
            <button
              onClick={handleAddFile}
              className="bg-[#CAFF45] text-[#686382] px-4 py-2 rounded-[10px] "
            >
              Add
            </button>
          </div>
          {/* Uploaded files list */}
          <div className="mt-3 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#EAE9E9] px-3 py-2 rounded-[10px]"
              >
                <span className="text-sm text-gray-700">{file.name}</span>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="text-gray-400 hover:text-red-500 text-xl font-bold"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#CAFF45] text-[#686382] px-6 py-2 rounded-full text-md font-semibold cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};




