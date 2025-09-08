import React from 'react'

const overview = () => {
  return (
   <main className="overflow-auto">
      <div className="max-w-none">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-3xl text-[#816ac4] font-bold mb-2">Dashboard Overview</h2>
            <p className="text-muted-foreground opacity-80">
              Monitor platform performance and activity
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Users Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-6 h-6 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className="text-sm font-medium text-success">+12.5%</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">2,847</h3>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Active users this month
                </p>
              </div>
            </div>

            {/* Briefcase Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase w-6 h-6 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <span className="text-sm font-medium text-success">+8.2%</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">156</h3>
                <p className="text-sm text-muted-foreground">Active Tasks</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Currently open tasks
                </p>
              </div>
            </div>

            {/* Dollar Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign w-6 h-6 text-primary"
                    aria-hidden="true"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-success">+15.7%</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  $12,450
                </h3>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Platform fees collected
                </p>
              </div>
            </div>

            {/* Star Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star w-6 h-6 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-success">+45.2%</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">23</h3>
                <p className="text-sm text-muted-foreground">Special Projects</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Premium project requests
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </main>
  )
}

export default overview