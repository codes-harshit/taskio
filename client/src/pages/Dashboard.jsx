import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { useDashboard } from "../store/dashboard.store";

const Dashboard = () => {
  const { getCompletedTasks, getPendingTasks, getOnGoingTasks, getDueTasks } =
    useDashboard();

  useEffect(() => {
    getCompletedTasks();
    getPendingTasks();
    getOnGoingTasks();
    getDueTasks();
  }, []);
  return (
    <div>
      <Stats />
    </div>
  );
};

export default Dashboard;
