import React from 'react'
import profileImage from '../assets/admin/jobs/user.svg'
import locationImage from '../assets/admin/profile/location.svg'
import worldImage from '../assets/admin/profile/world.svg'
import completedImage from '../assets/admin/profile/completed.svg'
import pendingImage from '../assets/admin/profile/pending.svg'

const UserProfile = () => {
  return (
     <div className="mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white rounded-[15px] 
       p-6 flex items-center gap-5 border border-[#686382]/50">
        <img
          src={profileImage}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover"
        />
        <div>
          <h2 className="text-[48px] font-bold">Alex Chen</h2>
          <p className="text-black/70 text-[26px]">Senior Full-Stack Developer</p>
          <div className="flex gap-4 text-[18px] text-black/70 mt-1">
            <span className='flex justify-center items-center gap-1'> <img src={locationImage} alt="location" /> San Francisco, CA</span>
            <span className='flex justify-center items-center gap-1'> <img src={worldImage} alt="languages" /> English, Mandarin</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-6 mt-6">
        <div className="bg-[#F2F2F2] w-[252px] h-[160px] p-4 rounded-[20px]
        flex items-center justify-center flex-col">
          <p className="text-lg">4.0 ⭐</p>
          <p className="text-lg ">120 Reviews</p>
        </div>
        <div className="bg-[#F2F2F2] w-[252px] h-[160px] p-4 rounded-[20px]
        flex items-center justify-center flex-col">
            <img src={completedImage} alt="completed jobs" />
          <p className="text-lg ">25</p>
          <p className="text-lg">Job Completed</p>
        </div>
        <div className="bg-[#F2F2F2] w-[252px] h-[160px] p-4 rounded-[20px]
        flex items-center justify-center flex-col">
            <img src={pendingImage} alt="pending jobs" />
          <p className="text-lg">10</p>
          <p className="text-lg">Job Pending</p>
        </div>
        
      </div>

      {/* Bio */}
      <div className="mt-8">
        <h3 className="text-[26px] font-bold mb-2">Bio</h3>
        <p className="text-black/70 text-lg leading-relaxed">
          Experienced full-stack developer with a passion for building scalable
          web applications. Specialized in React ecosystem and cloud
          architectures. Have successfully delivered 50+ projects ranging from
          startups to enterprise solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h3 className="text-[26px] font-bold mb-2">Skills & Technologies</h3>
        <div className="flex gap-2 flex-wrap">
          {["React", "Node.js", "Typescript"].map((skill) => (
            <span
              key={skill}
              className="text-lg bg-[#EAEAEA] px-2 py-0.5 
                    rounded-[5px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="mt-8">
        <h3 className="text-[26px] font-bold mb-2">Portfolio</h3>
        <div className="text-gray-400 text-sm">No portfolio items yet</div>
      </div>

      {/* Reviews */}
      <div className="mt-8 max-w-4xl">
        <h3 className="text-[26px] font-bold mb-2">Recent Reviews</h3>
        {[1, 2, 3].map((review, index) => (
          <div
            key={index}
            className="bg-white border border-[#686382]/30 rounded-[10px] p-4 mb-3"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img
                  src={profileImage}
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p>Mike Chan</p>
                  <p className="text-xs text-gray-500">⭐ 5.0</p>
                </div>
              </div>
              <p className="text-xs text-[#666363]">2 Weeks ago</p>
            </div>
            <p className="text-[#666363] text-sm mt-2">
              Sarah delivered exceptional work on our mobile app redesign. Her
              attention to detail and user experience expertise really showed.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfile