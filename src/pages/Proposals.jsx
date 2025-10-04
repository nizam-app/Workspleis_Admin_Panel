import React from 'react'
import usersImage from '../assets/admin/dasbhoard/users.svg'
import jobsImage from '../assets/admin/dasbhoard/jobs.svg'
import specialsImage from '../assets/admin/dasbhoard/specials.svg'
import earningsImage from '../assets/admin/dasbhoard/earnings.svg'

import calenderImage from '../assets/admin/proposals/calender.svg'
import clockImage from '../assets/admin/proposals/clock.svg'
import filesImage from '../assets/admin/proposals/files.svg'
 

const Proposals =() =>{
  
   // Stats
    const stats = [
      { title: "Total Jobs", value: 150, icon: jobsImage },
      { title: "Special Projects", value: 80, icon: specialsImage },
      { title: "Active Users", value: 1200, icon: usersImage },
      { title: "Revenue", value: "$1000", icon: earningsImage },
    ];

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
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-[32px] font-bold">Proposals</h1>
      <p className="text-black/70 text-[18px] pt-1">Manage proposals and handle bidding negotiations with clients</p>

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

      {/* Proposal List */}
      <div className="space-y-6 mt-6">
        {proposals.map((p, idx) => (
          <div key={idx} className="border border-[#686382]/50 rounded-[10px] 
          p-5 space-y-3">
            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold">{p.title} 
                  <span className="ml-3 px-2 py-0.5 text-xs bg-[#A49ACF]/20
                  rounded-full text-[#A49ACF]">
                    {p.status}
                  </span></h2>
                <div className="flex items-center gap-4 text-sm text-black/50 mt-1">
                  <span className='flex gap-1'> <img src={clockImage} alt="clock" />Est: {p.est}</span>
                  <span className='flex gap-1'><img src={calenderImage} alt="calender" />Sent {p.sent}</span>
                </div>
              </div>
              <div className="flex flex-col justify-end items-end">
                <span className='text-[#A49ACF] font-bold text-[18px]'>{p.amount}</span>
                <span className='text-black/70 text-sm'>Proposal Amount</span>
                </div>
            </div>

            {/* Attachments */}
            <div>
              <p className="font-semibold mb-1">
                Attachments
              </p>
              <div className="flex gap-4 text-blue-500 text-sm mt-2">
                {p.attachments.map((a, i) => (
                  <>
                  <div className='flex'>
                    <img src={filesImage} alt="file" />
                  <a key={i} href={a.url} className="hover:underline text-sm">
                    {a.name}
                  </a></div></>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="bg-[#F2F2F2] rounded-[15px] p-3  text-black/70">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}





export default Proposals