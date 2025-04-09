import React from "react";
import { useDashboard } from "../store/dashboard.store";

const Stats = () => {
  const { completedTasks, pendingTasks, dueTasks, onGoingTasks } =
    useDashboard();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Completed Tasks */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-xl shadow-lg flex flex-col items-center border border-[#A27B5C]/30">
        <div className="text-lg text-[#A27B5C] font-medium mb-2">
          Completed Tasks
        </div>
        <div className="text-4xl font-bold text-[#DCD7C9]">
          {completedTasks.length}
        </div>
      </div>

      {/* Ongoing Tasks */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-xl shadow-lg flex flex-col items-center border border-[#A27B5C]/30">
        <div className="text-lg text-[#A27B5C] font-medium mb-2">
          Ongoing Tasks
        </div>
        <div className="text-4xl font-bold text-[#DCD7C9]">
          {onGoingTasks.length}
        </div>
      </div>

      {/* Due Tasks */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-6 rounded-xl shadow-lg flex flex-col items-center border border-[#A27B5C]/30">
        <div className="text-lg text-[#A27B5C] font-medium mb-2">Due Tasks</div>
        <div className="text-4xl font-bold text-[#DCD7C9]">
          {dueTasks.length}
        </div>
      </div>
    </div>
  );
};

export default Stats;
