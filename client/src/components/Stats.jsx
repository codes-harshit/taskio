import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Completed Tasks */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-xl shadow-lg flex flex-col items-center border border-[#A27B5C]/30">
        <div className="text-lg text-[#A27B5C] font-medium mb-2">
          Completed Tasks
        </div>
        <div className="text-4xl font-bold text-[#DCD7C9]">15</div>
      </div>

      {/* Ongoing Tasks */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-xl shadow-lg flex flex-col items-center border border-[#A27B5C]/30">
        <div className="text-lg text-[#A27B5C] font-medium mb-2">
          Ongoing Tasks
        </div>
        <div className="text-4xl font-bold text-[#DCD7C9]">5</div>
      </div>

      {/* Due Tasks */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-xl shadow-lg flex flex-col items-center border border-[#A27B5C]/30">
        <div className="text-lg text-[#A27B5C] font-medium mb-2">Due Tasks</div>
        <div className="text-4xl font-bold text-[#DCD7C9]">1</div>
      </div>
    </div>
  );
};

export default Stats;
