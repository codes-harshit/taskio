import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../lib/axios";

const taskContext = createContext({
  tasks: [],
  setTasks: () => {},
  getTasks: async () => {},
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {};
  const createTask = async (data) => {
    try {
      const res = await axiosInstance.post("/tasks/add", data);
      console.log(res.data);
    } catch (error) {
      console.log("Error in creating task", error);
    }
  };
  const deleteTask = async () => {};
  const updateTask = async (data) => {};
  return (
    <taskContext.Provider
      value={{ createTask, getTasks, deleteTask, updateTask, tasks, setTasks }}
    >
      {children}
    </taskContext.Provider>
  );
};

export const useTask = () => useContext(taskContext);
