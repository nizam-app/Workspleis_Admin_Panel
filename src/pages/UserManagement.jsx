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
          <div className="flex flex-col gap-6 rounded-xl border p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search Input */}
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
                    className=" selection:bg-[#d2ff57] dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base 
                    bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 
                    file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none 
                    disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring  pl-10"
                    placeholder="Search users by name or email..."
                  />
                </div>
              </div>

              {/* Tabs (static for now) */}
              <div className="flex flex-col gap-2 w-auto">
                <div className="bg-muted text-muted-foreground h-9 w-fit items-center justify-center rounded-xl p-[3px] flex">
                  <button className="data-[state=active]:bg-card text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium">
                    All Users
                  </button>
                  <button className="text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium">
                    Workpeers
                  </button>
                  <button className="text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium">
                    Posters
                  </button>
                  <button className="text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium">
                    Active
                  </button>
                  <button className="text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium">
                    Issues
                  </button>
                </div>
              </div>
            </div>

            {/* User list would continue here */}
            {/* Example: User cards mapped from array */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserManagement