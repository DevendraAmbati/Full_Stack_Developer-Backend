const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      UserId: req.user.id,
      status: "pending"
    });

    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { UserId: req.user.id },
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (task.UserId !== req.user.id) {
      return res.status(403).json({ msg: "Unauthorized" });
    }

    if (req.body.title !== undefined) {
      task.title = req.body.title;
    }

    if (req.body.status !== undefined) {
      task.status = req.body.status;
    }

    await task.save(); 

    res.status(200).json(task);
  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (task.UserId !== req.user.id) {
      return res.status(403).json({ msg: "Unauthorized" });
    }

    await task.destroy();

    res.status(200).json({ msg: "Task deleted" });
  } catch (error) {
    console.log("DELETE ERROR:", error);
    res.status(500).json({ msg: "Server error" });
  }
};