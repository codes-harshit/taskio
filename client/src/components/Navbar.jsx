import { LogOut, User, Menu } from "lucide-react";
import React from "react";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-[#2C3930] text-[#DCD7C9] px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + mobile menu toggle */}
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={onToggleSidebar}>
            <Menu className="text-[#A27B5C]" />
          </button>
          <div className="text-xl font-semibold tracking-wide text-[#A27B5C]">
            Taskio
          </div>
        </div>

        {/* Right: Profile + Logout */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-[#A27B5C] transition">
            <User className="w-5 h-5" />
            <span className="text-sm">Profile</span>
          </button>

          <button className="flex items-center gap-2 hover:text-[#A27B5C] transition">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
