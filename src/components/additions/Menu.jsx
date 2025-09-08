import { useState } from "react"; 

const Menu = () => {
 const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Profile", href: "#" },
    { name: "Logout", href: "#" },
  ];

  return (
    <div className="flex min-h-screen bg-yellow-700">
      {/* Sidebar (desktop/tablet) */}
      <aside className="hidden md:block bg-green-700 w-64 p-4">
        <h2 className="text-white font-bold mb-4">Sidebar Menu</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-white hover:bg-green-600"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-red-700 p-4 md:ml-64">
          <h1 className="text-white font-bold">My App</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {open && (
          <nav className="md:hidden bg-green-700 p-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-white hover:bg-green-600"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}

        {/* Page Content */}
        <section className="bg-blue-700 p-10 min-h-screen">
          <h2 className="text-white">Main Content Area</h2>
        </section>
      </main>
    </div>
  );
}

export default Menu
