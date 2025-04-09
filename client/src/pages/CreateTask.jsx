import React, { useState } from "react";
import { useTask } from "../store/task.store";

const CreateTask = () => {
  const [task, setTask] = useState({ title: "", dueDate: "" });
  const { createTask } = useTask();
  const handleCreateTask = (e) => {
    e.preventDefault();
    createTask(task);

    setTask({ title: "", dueDate: "" });
  };
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#2C3930] p-6">
      <div className="bg-[#3F4F44] w-full max-w-md rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-[#DCD7C9] mb-6">
          Create a New Task
        </h2>

        <form className="space-y-6" onSubmit={handleCreateTask}>
          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-[#DCD7C9] mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              id="title"
              placeholder="Enter task title"
              className="bg-[#2C3930] border border-[#A27B5C]/30 text-[#DCD7C9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A27B5C] transition"
            />
          </div>

          {/* Due Date */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-[#DCD7C9] mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
              name="date"
              id="date"
              className="bg-[#2C3930] border border-[#A27B5C]/30 text-[#DCD7C9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A27B5C] transition"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#A27B5C] hover:bg-[#a27b5ccc] text-white py-2 px-4 rounded-lg font-semibold transition"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
