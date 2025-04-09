import { LogOut, User, Menu } from "lucide-react";
import React from "react";
import { useAuth } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onToggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-[#2C3930] text-[#DCD7C9] px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + mobile menu toggle */}
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={onToggleSidebar}>
            <Menu className="text-[#A27B5C]" />
          </button>
          <button
            className="text-xl font-semibold tracking-wide text-[#A27B5C] hover:text-[#DCD7C9] transition"
            onClick={() => navigate("/")}
          >
            Taskio
          </button>
        </div>

        {/* Right: Profile + Logout */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-[#A27B5C] transition">
            <User className="w-5 h-5" />
            <span className="text-sm">Profile</span>
          </button>

          <button
            className="flex items-center gap-2 hover:text-[#A27B5C] transition"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
