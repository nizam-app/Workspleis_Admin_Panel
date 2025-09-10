import React from 'react'

const TaskManagement = () => {
  return (
    <>
    <main className="admin-main flex-1 p-8 bg-muted/30 overflow-auto">
      <div className="max-w-none">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-3xl text-[#816ac4] mb-2">Task Management</h2>
            <p className="opacity-80">
              Monitor and manage all tasks on the platform
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 text-center">
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </div>

            {/* repeat others... */}
          </div>
        </div>
      </div>
    </main>
    
    
    </>
  )
}

export default TaskManagement