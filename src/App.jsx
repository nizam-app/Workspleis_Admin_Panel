import { useState } from "react";
import { Outlet } from "react-router"
import Aside from "./components/Aside";
// import Menu from "./components/additions/Menu";


function App() { 
const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (hidden on mobile, shown on md+) */}
      <aside className="hidden md:flex flex-col ">
        <h2 className="text-white font-bold">Sidebar</h2>
         <Aside />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Fixed Navbar */}
        <header className="sticky top-0 left-0 md:left-64 right-0  flex items-center 
        justify-between bg-red-700 p-4">
          <h1 className="text-white font-bold">My App</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? "close" : "open"}
          </button>
        </header>

        {/* Mobile Dropdown Menu (below fixed header) */}
        {open && (
          <nav className="md:hidden bg-green-700 p-4 space-y-2 mt-14">
            <a href="#" className="block text-white">Dashboard</a>
            <a href="#" className="block text-white">Settings</a>
            <a href="#" className="block text-white">Profile</a>
          </nav>
        )}

        {/* Scrollable Page Content */}
        <section className="flex-1 overflow-y-auto scrollbar-none no-scrollbar  p-10 ">
           <Outlet /> 
        </section>
      </main>
    </div>
  );
}

export default App
