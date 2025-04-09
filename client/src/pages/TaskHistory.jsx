import React from "react";
import Task from "../components/Task";
import { useTask } from "../store/task.store";

const TaskHistory = () => {
  const { tasks } = useTask();
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskHistory;
