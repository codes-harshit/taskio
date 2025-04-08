import { Task } from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    return res.status(200).json(tasks);
  } catch (error) {
    console.log("Erron in getting tasks", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Error: Getting tasks",
    });
  }
};

export const createTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, dueDate } = req.body;

    if (!title) {
      return res.status(400).json("Title is required!");
    }

    const task = new Task({
      title,
      userId,
      dueDate: dueDate ?? new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    await task.save();

    return res.status(201).json(task);
  } catch (error) {
    console.log("Erron in creating tasks", error.message);
    res
      .status(500)
      .json({ success: false, message: "Internal Error: Creating tasks" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json("Task not found!");
    }

    if (task.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json("Unauthorized!");
    }
    await task.deleteOne();

    return res.status(200).json("Task deleted successfully!");
  } catch (error) {
    console.log("Error in deleting tasks", error.message);
    res
      .status(500)
      .json({ success: false, message: "Internal Error: Deleting tasks" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, dueDate, isCompleted } = req.body;
    const task = await Task.findById(taskId);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found!" });
    }

    if (task.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }

    // const updatedTask = await Task.findByIdAndUpdate(
    //   taskId,
    //   {
    //     ...(title && { title }),
    //     ...(dueDate && { dueDate }),
    //     ...(typeof isCompleted == "boolean" && { isCompleted }),
    //   },
    //   { new: true }
    // );

    // if (!updatedTask) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Task not found!" });
    // }

    if (title) task.title = title;
    if (dueDate) task.dueDate = dueDate;
    if (typeof isCompleted == "boolean") task.isCompleted = isCompleted;
    const updatedTask = await task.save();

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Error: Updating task" });
  }
};
