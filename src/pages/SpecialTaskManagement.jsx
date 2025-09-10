import React from 'react'

const SpecialTaskManagement = () => {
  return (
     <main className="admin-main flex-1 p-8 bg-muted/30 overflow-auto">
      <div className="max-w-none">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-3xl text-secondary mb-2">
              Special Projects Management
            </h2>
            <p className="text-muted-foreground">
              Manage premium project requests and enterprise clients
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center"
            >
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center"
            >
              <div className="text-2xl font-bold text-warning">2</div>
              <div className="text-sm text-muted-foreground">In Review</div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center"
            >
              <div className="text-2xl font-bold text-success">1</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center"
            >
              <div className="text-2xl font-bold text-muted-foreground">1</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center"
            >
              <div className="text-2xl font-bold text-destructive">1</div>
              <div className="text-sm text-muted-foreground">Flagged</div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center"
            >
              <div className="text-2xl font-bold text-primary">$487K</div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </div>
          </div>

          {/* Search + Tabs */}
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6"
          >
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
                    placeholder="Search projects by title, category, or company..."
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
                    className="data-[state=active]:bg-card dark:data-[state=active]:text-foreground text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap"
                  >
                    All Projects
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap"
                  >
                    In Review
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap"
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap"
                  >
                    Completed
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap"
                  >
                    Flagged
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT CARDS GO HERE */}
            {/* I can continue converting all the project cards you pasted too */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SpecialTaskManagement;