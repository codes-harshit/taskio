import { Task } from "../models/task.model.js";

export const getPendingTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const pendingTasks = await Task.find({
      userId,
      isCompleted: false,
    }).sort({ dueDate: 1 });

    return res.status(200).json(pendingTasks);
  } catch (error) {
    console.error("Error fetching pending tasks:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Error: Fetching pending tasks",
    });
  }
};

export const getCompletedTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const completedTasks = await Task.find({
      userId,
      isCompleted: true,
    }).sort({ dueDate: 1 });

    return res.status(200).json(completedTasks);
  } catch (error) {
    console.error("Error fetching completed tasks:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Error: Fetching completed tasks",
    });
  }
};

export const getOngoingTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const ongoingTasks = await Task.find({
      userId,
      isCompleted: false,
      dueDate: { $gte: new Date() },
    }).sort({ dueDate: 1 });

    return res.status(200).json(ongoingTasks);
  } catch (error) {
    console.error("Error fetching ongoing tasks:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Error: Fetching ongoing tasks",
    });
  }
};
export const getDueTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const dueTasks = await Task.find({
      userId,
      isCompleted: false,
      dueDate: { $lte: new Date() },
    }).sort({ dueDate: 1 });

    return res.status(200).json(dueTasks);
  } catch (error) {
    console.error("Error fetching due tasks:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Error: Fetching due tasks",
    });
  }
};
