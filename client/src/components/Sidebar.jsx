import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:block fixed md:relative top-[64px] md:top-0 left-0 h-[calc(100vh-64px)] w-60 bg-[#2C3930] text-[#DCD7C9] border-r border-[#3F4F44] z-50 transition-all duration-300`}
    >
      <div className="flex flex-col justify-between h-full py-6 px-4">
        {/* Top Buttons */}
        <div className="space-y-4">
          <button
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#3F4F44] hover:text-[#A27B5C] transition"
            onClick={() => navigate("/")}
          >
            Dashboard
          </button>
          <button
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#3F4F44] hover:text-[#A27B5C] transition"
            onClick={() => navigate("/createtask")}
          >
            Create Task
          </button>
          <button
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#3F4F44] hover:text-[#A27B5C] transition"
            onClick={() => navigate("/taskhistory")}
          >
            Task History
          </button>
        </div>

        {/* Bottom Button */}
        <div className="mt-4">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#3F4F44] hover:text-[#A27B5C] transition">
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
