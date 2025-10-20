import React, { useEffect, useState } from 'react'
import view from '../assets/admin/jobs/view.svg'
import search from '../assets/admin/jobs/search.svg'
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
import company from '../assets/admin/special/company.svg'




const specialProjects = [
  {
    title: "E-commerce Website Redesign",
    category: "Web Development",
    description: "Redesign an existing Shopify store with a modern, conversion-focused layout.",
    urgency: "Immediate",
    nda: true,
    budgetRange: "$800 - $1000",
    photos: ["https://res.cloudinary.com/dior4n7ve/image/upload/v1760263759/main-sample.png"],
    name: "Jessica Brown",
    role: "Business Owner",
    prefferredCommunication: "Email",
    contactTime: "Morning",
    createdBy: "2024-02-15T12:00:00Z", // Example ObjectId
    status: "Submitted",
  },
  {
    title: "Mobile App Prototype for Fitness Tracking",
    category: "UI/UX Design",
    description: "Create a clickable Figma prototype for a cross-platform fitness tracking app.",
    urgency: "1-2 weeks",
    nda: true,
    budgetRange: "$400 - $600",
    photos: ["https://res.cloudinary.com/dior4n7ve/image/upload/v1760263759/main-sample.png"],
    name: "Daniel Lee",
    role: "Startup Founder",
    prefferredCommunication: "Phone",
    contactTime: "Afternoon",
    createdBy: "2024-02-15T12:00:00Z",
    status: "Proposal_Sent",
  },
  {
    title: "Custom CRM Dashboard",
    category: "Software Development",
    description: "Develop a tailored CRM dashboard with analytics, task tracking, and user management.",
    urgency: "Immediate",
    nda: false,
    budgetRange: "$1500 - $2000",
    photos: ["https://res.cloudinary.com/dior4n7ve/image/upload/v1760263759/main-sample.png"],
    name: "Sophia Martinez",
    role: "Project Manager",
    prefferredCommunication: "In_app",
    contactTime: "Morning",
    createdBy: "2024-02-15T12:00:00Z",
    status: "In_Progress",
  },
  {
    title: "Corporate Branding Package",
    category: "Graphic Design",
    description: "Design a complete brand identity including logo, color palette, and marketing materials.",
    urgency: "Flexible",
    nda: true,
    budgetRange: "$300 - $500",
    photos: ["https://res.cloudinary.com/dior4n7ve/image/upload/v1760263759/main-sample.png"],
    name: "Michael Carter",
    role: "Marketing Director",
    prefferredCommunication: "Email",
    contactTime: "Evening",
    createdBy: "2024-02-15T12:00:00Z",
    status: "In_Review",
  },
  {
    title: "SEO Optimization for Travel Blog",
    category: "Digital Marketing",
    description: "Optimize on-page SEO, improve keyword targeting, and build high-quality backlinks.",
    urgency: "1-2 weeks",
    nda: false,
    budgetRange: "$250 - $400",
    photos: ["https://res.cloudinary.com/dior4n7ve/image/upload/v1760263759/main-sample.png"],
    name: "Emily Johnson",
    role: "Content Creator",
    prefferredCommunication: "In_app",
    contactTime: "Afternoon",
    createdBy: "652e91b2f7a5a23b4c7d8e95",
    status: "Delivered",
  },
];

const statusStyles = {
  Submitted: "bg-gray-200 text-gray-600",
  Proposal_Sent: "bg-[#CAFF45] text-[#686382]",
  In_Progress: "bg-blue-100 text-blue-700",
  In_Review: "bg-purple-200 text-purple-700",
  Delivered: "bg-green-200 text-green-700",
};


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
  const [proposalModel, setProposalModel] = useState(false);
  const [inReviewModel, setInReviewModel] = useState(false);
  const [deliveredModel, setDeliveredModel] = useState(false);
  const [viewProjectModel, setViewProjectModel] = useState(false);
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 mt-8">
        {/* Search Field */}
        <div className="flex items-center gap-2 bg-[#F9F8FD] border border-[#686382]/30 rounded-full px-4 py-2 flex-1">
          <img src={search} alt="search" className="w-[17px] opacity-60" />
          <input
            type="text"
            placeholder="Search Jobs..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-black/50"
          />
        </div>

        {/* Custom Dropdown */}
        <div className="relative">
          <select
            className="appearance-none border border-[#686382]/30 rounded-full pl-4 pr-10 py-2 text-sm outline-none cursor-pointer bg-white hover:bg-gray-50 font-medium"
          >
            <option>All Status</option>
            <option>Submitted</option>
            <option>Proposal Sent</option>
            <option>In Progress</option>
            <option>In Review</option>
            <option>Delivered</option>
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

      {/* Job Cards */}
      <div className="space-y-4">
        {specialProjects.map((job) => (
          <div
            key={job.id}
            className="border border-[#686382]/50 rounded-[10px] p-4 bg-white"
          >
            <div className='flex'>
              {/* Image */}

              <img
                src={job.photos?.[0] || job.photos || "https://via.placeholder.com/80x55?text=No+Image"}
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
                  {/* <p className="text-sm flex gap-1">
                    <img src={user} alt="user" />
                    <span className='text-black/60 font-bold'>{job.company}</span>
                  </p> */}
                  <img src={dot} alt="dote" />
                  <p className="text-sm flex gap-1">
                    <span className='text-black/60 mt-1'>{job.category}</span>
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
                  <span className='text-[#686382]'>{job.budgetRange}</span>
                </span>
                <span className="flex 
                      items-center gap-1 text-black/50">
                  {/* Clock Icon */}
                  <img src={clock} alt="clock" />
                  {job.contactTime}
                </span>
                <span className="flex items-center gap-1 text-black/50">
                  <img src={calender} alt="calendar" />
                  {job.createdBy
                    ? new Date(job.createdBy).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    : "N/A"}
                </span>



              </div>

              {/* Footer */}
              <div className="flex items-center 
                    justify-between mt-4 text-sm">

                <button
                  onClick={() => setViewProjectModel(true)}
                  className="flex gap-2 border border-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer ">
                  <img src={view} alt="view" className='w-[19px] h-[19px]' />
                  View Project
                </button>


                {job.status === 'Submitted' &&
                  <button
                    onClick={() => setProposalModel(true)}
                    className="flex gap-2 bg-[#CAFF45] text-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer ">
                    <img src={send} alt="send" />
                    Send Proposal
                  </button>
                }
                {job.status === 'Proposal_Sent' &&
                  <button
                    onClick={() => setProposalModel(true)}
                    className="flex gap-2 bg-[#CAFF45] text-[#686382] px-4 py-2 rounded-[10px] 
                      text-sm font-semibold cursor-pointer ">
                    <img src={view} alt="view" className='w-[19px] h-[19px]' />
                  View Project
                  </button>
                }



                {(job.status === 'In_Progress' || job.status === 'In_Review' ||
                  job.status === 'Delivered'
                ) &&
                  <div className='flex gap-3'>
                    
                    <button
                      onClick={() => {
                        job.status === 'In_Progress' && setSubmitOrder(true);
                        job.status === 'In_Review' && setInReviewModel(true);
                        job.status === 'Delivered' && setDeliveredModel(true);
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
      {submitOrder && <SubmitOrderModel onClose={() => setSubmitOrder(false)} />}
      {proposalModel && <ProposalModal onClose={() => setProposalModel(false)} />}
      {inReviewModel && <InReviewModal onClose={() => setInReviewModel(false)} />}
      {deliveredModel && <DeliveredModal onClose={() => setDeliveredModel(false)} />}
      {viewProjectModel && <ViewProjectModel onClose={() => setViewProjectModel(false)} />}

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


const ProposalModal = ({ onClose }) => {
  const [cost, setCost] = useState("");
  const [timeline, setTimeline] = useState("");
  const [note, setNote] = useState("");
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
    alert("Proposal Sent!");
    onClose();
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div
        className={`bg-white rounded-2xl w-full max-w-2xl p-6 shadow-lg transform transition-all duration-300 
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-[22px] font-bold mb-1">
          Create Proposal for Enterprise CRM System Development
        </h2>
        <p className="text-black/70 mb-5">
          Send a detailed proposal to MegaCorp Industries
        </p>

        {/* Cost & Timeline */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block font-bold mb-1">Estimated Cost</label>
            <input
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="$50,000"
              className="w-full border border-[#686382]/60 bg-black/6 
              rounded-[5px] px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block font-bold mb-1">Time Line</label>
            <input
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="10 days"
              className="w-full border border-[#686382]/60 bg-black/6 
              rounded-[5px] px-3 py-2 outline-none"
            />
          </div>
        </div>

        {/* Note */}
        <div className="mb-5">
          <label className="block font-bold mb-1">Note for client</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Description your approach to this project..."
            className="w-full border border-[#686382]/60 bg-black/6 
              rounded-[5px] px-3 py-2 outline-none"
          />
        </div>

        {/* File Upload */}
        <div className="mt-6">
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

        {/* Buttons */}
        <div className="flex justify-end mt-6">
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


const InReviewModal = ({ onClose }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl w-full max-w-xl p-6 shadow-lg transform transition-all duration-300 
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-[22px] font-bold mb-1">Review Completion</h2>
        <p className="text-[#4B4646]/80 mb-4">The admin has completed this order.</p>

        {/* Message */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Message from Service Provider</h3>
          <div className="bg-[#F4F3F3] rounded-[10px] p-3 text-black/80 
          leading-relaxed">
            All plumbing issues have been resolved. Replaced the faulty pipes
            and installed new faucets as requested. System tested and working
            perfectly.
          </div>
        </div>

        {/* Attachments */}
        <div>
          <h3 className="font-semibold mb-2">Attachments</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                📎 photos.pdf
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                📎 projects.zip
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DeliveredModal = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleSubmit = () => {
    alert(`Review Submitted!\nRating: ${rating}\nMessage: ${message}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl w-full max-w-xl p-6 shadow-lg transform transition-all duration-300 
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-[22px] font-bold mb-1">Review Completion</h2>
        <p className="text-[#4B4646]/80 mb-4">The admin has completed this order.</p>

        {/* Message */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Message from Service Provider</h3>
          <div className="bg-[#F4F3F3] rounded-[10px] p-3 text-black/80 
          leading-relaxed">
            All plumbing issues have been resolved. Replaced the faulty pipes
            and installed new faucets as requested. System tested and working
            perfectly.
          </div>
        </div>

        {/* Attachments */}
        <div>
          <h3 className="font-semibold mb-2">Attachments</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                📎 photos.pdf
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                📎 projects.zip
              </a>
            </li>
          </ul>
        </div>


        {/* Rating & Review */}
        <div className="border border-black/30 rounded-[25px] p-4 mt-5">
          <h3 className="mb-2">Ratings</h3>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <svg
                  key={index}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={
                    starValue <= (hover || rating) ? "#a855f7" : "#d1d5db"
                  }
                  className="w-6 h-6 cursor-pointer transition-colors"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118L2.075 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
                </svg>
              );
            })}
          </div>

          <label className="block mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="wow, that was a great experience."
            className="w-full border border-[#686382]/40 rounded-[10px] px-3 py-3 
            h-20 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="mt-4 bg-[#CAFF45] text-[#A49ACF] 
            px-6 py-2 rounded-full font-semibold cursor-pointer"
          >
            Submit Review
          </button>

        </div>
      </div>
    </div>
  );
};


const ViewProjectModel = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 20);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl w-[800px] max-h-[90vh] overflow-y-auto p-6  
        transform transition-all duration-300 relative 
        ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>

        {/* Job Title */}
        <div className="pb-4">
          <h2 className="text-[28px] font-bold">Enterprise CRM System Development</h2>
          <p className="text-black/70">MegaCorp Industries • 2024-02-15</p>
        </div>

        {/* Header Image */}
        <img
          src="https://i.ibb.co.com/xtM4F6rp/photo-1688560952189-ef386cea744e-1.png"
          alt="Job Banner"
          className="rounded-lg w-full h-60 object-cover"
        />

        {/* Job Info */}
        <div className="grid grid-cols-4 gap-4 pt-6 text-sm">
          <div>
            <span className="block text-black/70">Category</span>
            <span className="font-bold">System Development</span>
          </div>
          <div>
            <span className="block text-black/70">Budget Range</span>
            <span className="font-bold">$5,000 - $10,000</span>
          </div>
          <div>
            <span className="block text-black/70">Urgency</span>
            <span className="font-bold">Immediate</span>
          </div>
          <div>
            <span className="block text-black/70">Status</span>
            <span className="inline-block bg-[#CAFF45] text-[#686382] px-2 py-0.5 rounded-full text-xs mt-2">
              Submitted
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 rounded-[10px] p-4 bg-black/6">
          <h3 className="text-[16px] font-bold mb-3 flex items-center gap-2">
            <img src={company} alt="company" />
            Contact Information</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <span className="block text-black/70">Name</span>
              <span className="font-bold">Sarah Johnson</span>
            </div>
            <div>
              <span className="block text-black/70">Role</span>
              <span className="font-bold">IT Director</span>
            </div>
            <div>
              <span className="block text-black/70">Best time to contact</span>
              <span className="font-bold">Weekdays 9 AM - 5 PM EST</span>
            </div>
            <div>
              <span className="block text-black/70">Preferred Communication</span>
              <span className="font-bold">Email</span>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="py-6">
          <h3 className="text-[18px] font-bold mb-2">Project Description</h3>
          <p className="text-black/70 leading-relaxed ">
            We need a comprehensive CRM system that can handle our enterprise-level
            operations with custom workflows, advanced reporting, and integration
            capabilities with our existing systems.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="bg-[#686382] text-white px-5 py-2 rounded-lg font-semibold cursor-pointer"
          >
            Close
          </button>
          <button
            className="bg-[#CAFF45] text-[#686382] px-6 py-2 
            rounded-lg font-semibold cursor-pointer"
          >
            Start Conversation
          </button>
        </div>
      </div>
    </div>
  );
};




