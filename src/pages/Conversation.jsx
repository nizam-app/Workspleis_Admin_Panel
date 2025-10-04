import React, { useState } from 'react'
import profile from '../assets/admin/conversations/profile.svg'
import details from '../assets/admin/conversations/details.svg'
import filesImage from '../assets/admin/conversations/files.svg'
import sendImage from '../assets/admin/conversations/send.svg'
const Conversation = () => {
   const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Emilly",
      text: "Hi! I saw your profile and would love to discuss my furniture moving task.",
      time: "10:45 AM",
      type: "received",
    },
    {
      id: 2,
      sender: "Me",
      text: "Hi! I saw your profile and would love to discuss my furniture moving task.",
      time: "10:45 AM",
      type: "sent",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
  };

  const handleSend = () => {
    alert("Message Sent!");
    setMessage("");
    setFiles([]);
  };

  return (
    <div className="flex h-[95vh] w-full border">
      {/* Left Sidebar */}
      <div className="w-[350px] border-r flex flex-col">
        <div className="p-4 border-b">
          <h1 className='text-[22px] mb-2'>Conversations</h1>
          <input
            type="text"
            placeholder="Search Jobs..."
            className="w-full border border-[#686382] bg-[#686382]/6 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Conversation Item */}
          <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <div className='flex items-center gap-3'>
              <img
              src={profile}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className='flex items-center justify-between'>
              <p className="font-semibold text-sm">Emilly Davis</p>
              <span className="text-[10px] text-[#707070]">10:13 AM</span>
              </div>
              <p className="text-xs text-[#434343] line-clamp-1">
                Hi, I hope you are doing great see you soon take care
              </p>
            </div>
            </div>

            <hr className='border-b border-[#707070]/25 mt-3'/>
          </div>
          <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <div className='flex items-center gap-3'>
              <img
              src={profile}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className='flex items-center justify-between'>
              <p className="font-semibold text-sm">Emilly Davis</p>
              <span className="text-[10px] text-[#707070]">10:13 AM</span>
              </div>
              <p className="text-xs text-[#434343] line-clamp-1">
                Hi, I hope you are doing great see you soon take care
              </p>
            </div>
            </div>

            <hr className='border-b border-[#707070]/25 mt-3'/>
          </div>

        </div>
      </div>

      {/* Right Chat Window */}
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-3">
          <div className='flex gap-2 items-center'>
            <img
              src={profile}
              alt="user"
              className="w-15 h-15 rounded-full"
            />
            <div><h2 className="font-semibold text-[22px]">Emilly Davis 
              <span className="ml-2 text-xs bg-lime-200 text-lime-800 px-2 py-0.5 rounded-full">
                Special Project
              </span>
            </h2>
            <p className="text-sm">Deep house cleaning service needed</p></div>
          </div>
          <button className='cursor-pointer'><img src={details} alt="details" /></button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
            >
              <div className='flex items-start gap-3'>
                <img src={profile} alt="profile image" className={`${msg.type === 'sent' && 'order-2'}`} />
              <div
                className={`rounded-lg px-4 py-2 max-w-xs  
                  ${msg.type === "sent" ? "bg-gray-200 text-black" : "bg-gray-200 text-black"}`}
              >
                {msg.text}
                <div className={`text-[12px] text-gray-500 ${msg.type === 'sent' ? 'text-left':'text-right'} mt-1`}>
                  {msg.time}
                </div>
              </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="border-t px-4 py-3 flex flex-col gap-3">
      {/* Selected Files Preview */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg text-sm"
            >
              <span>{file.name}</span>
              <button
                onClick={() => handleRemoveFile(index)}
                className="text-gray-400 hover:text-red-500 text-lg font-bold"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input Row */}
      <div className="flex items-center gap-2">
        <label className="cursor-pointer text-gray-500">
           <img src={filesImage} alt="files" />
          <input
            type="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-[#686382] rounded-full 
          p-4 pl-6 font-semibold focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-[#838383] p-3 rounded-[10px]"
        >
         <img src={sendImage} alt="send" className='w-8'/>
        </button>
      </div>
    </div>

      </div>
    </div>
  );
}

export default Conversation