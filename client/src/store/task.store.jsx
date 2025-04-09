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

  const getTasks = async () => {
    try {
      const res = await axiosInstance.get("/tasks/");
      setTasks(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log("Error in getting tasks", error);
    }
  };

  const createTask = async (data) => {
    try {
      const res = await axiosInstance.post("/tasks/add", data);
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.log("Error in creating task", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await axiosInstance.delete(`/tasks/delete/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log("Error in deleting task", error);
    }
  };

  const updateTask = async (id, data) => {
    try {
      const res = await axiosInstance.put(`/tasks/update/${id}`, data);
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
      console.log(res.data);
    } catch (error) {
      console.log("Error in updating task", error);
    }
  };

  return (
    <taskContext.Provider
      value={{ createTask, getTasks, deleteTask, updateTask, tasks, setTasks }}
    >
      {children}
    </taskContext.Provider>
  );
};

export const useTask = () => useContext(taskContext);
