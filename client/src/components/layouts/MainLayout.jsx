import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#2C3930] text-[#DCD7C9]">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
