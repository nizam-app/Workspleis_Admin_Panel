import { useState } from "react";
import { Outlet } from "react-router"
import Aside from "./components/Aside"; 

import logo from './assets/aside/logo.svg'


function App() { 
const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (hidden on mobile, shown on md+) */}
      <aside className="hidden md:flex flex-col h-[100vh] border-r border-black/30">
      <div className="p-6 border-b border-black/30"><img src={logo} alt="logo" /></div>
         <Aside />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex justify-center">
        <section className="mt-10 max-w-[1600px] h-auto flex-1 overflow-y-auto 
        scrollbar-none no-scrollbar ">
           <Outlet /> 
        </section>
      </main>
    </div>
  );
}

export default App
