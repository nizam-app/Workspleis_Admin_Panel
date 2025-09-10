import React from 'react'

const UserManagement = () => {
  return (
    <main className="admin-main flex-1 p-8 bg-muted/30 overflow-auto">
      <div className="max-w-none">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-3xl text-[#816ac4] mb-2">User Management</h2>
            <p className="text-muted-foreground opacity-80">
              Manage workpeers, task posters, and user accounts
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm opacity-80">Total Users</div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-success">4</div>
              <div className="text-sm opacity-80">Active</div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm opacity-80">Workpeers</div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-secondary">2</div>
              <div className="text-sm opacity-80">Task Posters</div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-info">4</div>
              <div className="text-sm opacity-80">Verified</div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-destructive">1</div>
              <div className="text-sm opacity-80">Suspended</div>
            </div>
          </div>

          {/* Search + Tabs */}
           <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6"
    >
      {/* Search + Tabs */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
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
              className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
              type="text"
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
              placeholder="Search users by name or email..."
              defaultValue=""
            />
          </div>
        </div>

        {/* Tabs */}
        <div
          dir="ltr"
          data-orientation="horizontal"
          data-slot="tabs"
          className="flex flex-col gap-2 w-auto"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            data-slot="tabs-list"
            className="bg-muted text-muted-foreground h-9 w-fit items-center justify-center rounded-xl p-[3px] flex"
            tabIndex={0}
            style={{ outline: "none" }}
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              data-state="active"
              className="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
            >
              All Users
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              data-state="inactive"
              className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]"
            >
              Workpeers
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              data-state="inactive"
              className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]"
            >
              Posters
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              data-state="inactive"
              className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]"
            >
              Active
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              data-state="inactive"
              className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]"
            >
              Issues
            </button>
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="space-y-4">
        {/* Example user card */}
        <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
          <div className="flex items-center space-x-4">
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-12 w-12">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b830?w=100&h=100&fit=crop&crop=face"
                alt="Sarah Chen"
                className="h-12 w-12 rounded-full object-cover"
              />
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-foreground">Sarah Chen</h4>
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
                  className="lucide lucide-circle-check-big w-4 h-4 text-success"
                  aria-hidden="true"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                sarah.chen@email.com
              </p>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-muted-foreground">Workpeer</span>
                <span className="text-xs text-muted-foreground">
                  Joined 15/01/2024
                </span>
                <span className="text-xs text-muted-foreground">
                  Last active 2 hours ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">★ 4.9</span>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-success/10 text-success border-success/20">
                  Active
                </span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                47 tasks • $2850 earned
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Home Services, Cleaning
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
            >
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
                className="lucide lucide-ellipsis w-4 h-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>

        {/* Repeat other users here */}
      </div>
    </div>
        </div>
      </div>
    </main>
  )
}

export default UserManagement