import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const dashboardContext = createContext({
  completedTasks: [],
  setCompletedTasks: () => {},
  pendingTasks: [],
  setPendingTasks: () => {},
  dueTasks: [],
  setDueTasks: () => {},
  onGoingTasks: [],
  setOnGoingTasks: () => {},

  getCompletedTasks: () => {},
  getPendingTasks: () => {},
  getDueTasks: () => {},
  getOnGoingTasks: () => {},
});

export const DashboardProvider = ({ children }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [dueTasks, setDueTasks] = useState([]);
  const [onGoingTasks, setOnGoingTasks] = useState([]);

  const getCompletedTasks = async () => {
    try {
      const res = await axiosInstance.get("/dashboard/completed");
      setCompletedTasks(res.data);
    } catch (error) {
      console.log("Error in getting completed tasks", error);
    }
  };

  const getPendingTasks = async () => {
    try {
      const res = await axiosInstance.get("/dashboard/pending");
      //   console.log(res.data);
      setPendingTasks(res.data);
    } catch (error) {
      console.log("Error in getting pending tasks", error);
    }
  };

  const getDueTasks = async () => {
    try {
      const res = await axiosInstance.get("/dashboard/due");

      setDueTasks(res.data);
    } catch (error) {
      console.log("Error in getting due tasks", error);
    }
  };

  const getOnGoingTasks = async () => {
    try {
      const res = await axiosInstance.get("/dashboard/ongoing");
      setOnGoingTasks(res.data);
    } catch (error) {
      console.log("Error in getting ongoing tasks", error);
    }
  };

  return (
    <dashboardContext.Provider
      value={{
        completedTasks,
        setCompletedTasks,
        pendingTasks,
        setPendingTasks,
        dueTasks,
        setDueTasks,
        onGoingTasks,
        setOnGoingTasks,

        getCompletedTasks,
        getDueTasks,
        getOnGoingTasks,
        getPendingTasks,
      }}
    >
      {children}
    </dashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(dashboardContext);
