import { PencilIcon, SaveIcon, Trash2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useTask } from "../store/task.store";

const Task = ({ task }) => {
  const inputRef = useRef();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const { deleteTask, updateTask } = useTask();

  const handleUpdate = async () => {
    if (isEditable) {
      await updateTask(task._id, { title, isCompleted, dueDate });
    } else {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
    setIsEditable((prev) => !prev);
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  const handleCheckboxChange = async (e) => {
    const completed = e.target.checked;
    setIsCompleted(completed);
    await updateTask(task._id, { isCompleted: completed });
  };

  return (
    <div className="relative mb-6">
      {/* Date Badge or Editable Input */}
      <div className="absolute -top-3 right-4 z-10">
        {isEditable ? (
          <input
            type="date"
            value={new Date(dueDate).toISOString().split("T")[0]}
            onChange={(e) => setDueDate(e.target.value)}
            className="bg-[#A27B5C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md outline-none cursor-pointer"
          />
        ) : (
          <div className="bg-[#A27B5C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Due: {new Date(dueDate).toLocaleDateString()}
          </div>
        )}
      </div>

      {/* Task Card */}
      <div className="bg-[#3F4F44] text-[#DCD7C9] p-4 rounded-xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#A27B5C]/30">
        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="completed"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            id="completed"
            className="accent-[#A27B5C] w-5 h-5"
          />
        </div>

        {/* Title Input */}
        <div className="flex-1">
          <input
            type="text"
            ref={inputRef}
            name="title"
            disabled={!isEditable}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className="w-full bg-[#2C3930] border border-[#A27B5C]/30 rounded-lg px-3 py-2 text-[#DCD7C9] focus:outline-none focus:ring-2 focus:ring-[#A27B5C] transition"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="bg-[#A27B5C] hover:bg-[#a27b5ccc] text-white p-2 rounded-full transition"
            aria-label="Edit Task"
            onClick={handleUpdate}
          >
            {!isEditable ? (
              <PencilIcon className="w-5 h-5" />
            ) : (
              <SaveIcon className="w-5 h-5" />
            )}
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
            aria-label="Delete Task"
            onClick={handleDelete}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
