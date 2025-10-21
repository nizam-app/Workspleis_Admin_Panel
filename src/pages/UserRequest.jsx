import React, { useEffect, useState } from "react";
import { User, Users } from "lucide-react";

const requests = [
  { id: 1, date: "Jul 5, 2025", email: "jhon@gmail.com", phone: "+874523642" },
  { id: 2, date: "Jul 5, 2025", email: "karim@gmail.com", phone: "+874523642" },
  { id: 3, date: "Jul 5, 2025", email: "jhon@gmail.com", phone: "+874523642" },
  { id: 4, date: "Jul 5, 2025", email: "karim@gmail.com", phone: "+874523642" },
  { id: 5, date: "Jul 5, 2025", email: "jhon@gmail.com", phone: "+874523642" },
  { id: 6, date: "Jul 5, 2025", email: "karim@gmail.com", phone: "+874523642" },
];

const UserRequest = () => {
  const [selectedRequest, setSelectedRequest] = useState(false);

  const openModal = (req) => setSelectedRequest(req);
  const closeModal = (req) => setSelectedRequest(req);
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // ✅ Proceed with delete action
      console.log("User deleted!");
    }
  };

  const handleApprove = () => {
    if (window.confirm("Do you want to approve this user?")) {
      // ✅ Proceed with approve action
      console.log("User approved!");
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-[32px] font-bold">User Requests</h1>
      <p className="text-black/70 text-[18px] pt-1">
        Overview of all new users request
      </p>

      {/* Table */}
      <div className="overflow-x-auto mt-10">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="text-left">
              <th className="p-4">Date</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone Number</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr
                key={req.id}
                className={`${index % 2 === 0 ? "bg-[#CAFF45]/20" : "bg-white"}`}
              >
                <td className="p-4 w-1/4">{req.date}</td>
                <td className="p-4 w-1/4">{req.email}</td>
                <td className="p-4 w-1/4">{req.phone}</td>
                <td className="p-4 w-1/4">
                  {/* <div className="flex items-center gap-3">
                    <button className="cursor-pointer text-red-500 hover:text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <button className="cursor-pointer text-green-500 hover:text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>

                    <button
                      className="cursor-pointer ml-2 bg-[#CAFF45] text-[#686382] px-3 py-2 font-bold rounded-[10px] text-xs"
                      onClick={() => openModal(true)}
                    >
                      See Details
                    </button>
                  </div> */}

                  <div className="flex items-center gap-3">
                    {/* Delete Button */}
                    <button
                      onClick={handleDelete}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Approve Button */}
                    <button
                      onClick={handleApprove}
                      className="cursor-pointer text-green-500 hover:text-green-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>

                    {/* See Details */}
                    <button
                      className="cursor-pointer ml-2 bg-[#CAFF45] text-[#686382] px-3 py-2 font-bold rounded-[10px] text-xs"
                      onClick={() => openModal(true)}
                    >
                      See Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedRequest && <UserVerificationModel onClose={() => closeModal(false)} />}
    </div>
  );
};

export default UserRequest;



const UserVerificationModel = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 ">
      <div
        className={`bg-white p-10 rounded-xl w-[800px] max-w-full transform transition-all duration-300 
        ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} relative`}
      >
        <button
          onClick={onClose}
          className="text-black bg-black/20 text-[20px] px-3 py-1.5 rounded-[50px]
            absolute right-5 top-5 cursor-pointer"
        >
          ✕
        </button>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3">
          <h2 className="text-[22px] font-bold">User Details</h2>

        </div>

        {/* Body */}
        <div className="p-5">
          {/* User Details */}
          <div className="grid grid-cols-3 gap-3 items-center p-3 bg-[#CAFF45]/20">
            <span className="font-medium">Email</span>
            <span className="truncate">jhon@gmail.com</span>
            <div className="flex justify-center">
              <span className="bg-[#CAFF45] text-[#686382] text-xs px-2 py-1 rounded-full text-center">
                Verified
              </span></div>
          </div>
          <div className="grid grid-cols-3 gap-3 items-center bg-[#A49ACF]/20 p-3">
            <span className="font-medium">Phone Number</span>
            <span className="truncate">+874523642</span>
            <div className="flex justify-center">
              <span className="bg-[#CAFF45] text-[#686382] text-xs px-2 py-1 rounded-full text-center">
                Verified
              </span></div>
          </div>

          {/* sub role */}

          <div className="flex gap-4 mt-6">
            {/* Role Card */}
            <div className="flex flex-col items-center justify-center bg-[#F5FFEA] border border-[#CAFF45] rounded-xl px-6 py-4 w-[180px] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-[#686382]" />
                <h3 className="font-semibold text-[#000]">Role</h3>
              </div>
              <p className="font-bold text-black">CLIENT</p>
            </div>

            {/* Sub Role Card */}
            <div className="flex flex-col items-center justify-center bg-[#F4F2FB] border border-[#A49ACF]/30 rounded-xl px-6 py-4 w-[180px] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[#686382]" />
                <h3 className="font-semibold text-[#000]">Sub Role</h3>
              </div>
              <p className="font-bold text-black">BUSINESS</p>
            </div>
          </div>
          {/* License / ID */}
          <div className="mt-8">
            <h3 className="text-[22px] font-medium mb-2">
              License or Other Documents or ID
            </h3>
            <div className="flex gap-4 mt-3">
              <img
                src="https://i.ibb.co.com/h1VxZtmW/Rectangle-4000.png"
                alt="ID Front"
                className="rounded-md w-[290px] h-[190px] object-cover"
              />
              <img
                src="https://i.ibb.co.com/1fjz8h68/Rectangle-3999.png"
                alt="ID Back"
                className="w-[290px] h-[190px] rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="space-x-3">
          <button className="bg-[#EA0C0C] font-semibold cursor-pointer rounded-[50px] px-8 py-2 text-white">
            Cancelled
          </button>
          <button className="bg-[#CAFF45] font-semibold cursor-pointer rounded-[50px] px-8 py-2 text-[#686382]">
            Approved
          </button>
        </div>
      </div>
    </div>
  )
}
