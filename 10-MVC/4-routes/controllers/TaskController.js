import Task from "../models/Task.js";

export default class TaskController {
  static createTask(req, res){
    res.render('tasks/create')
  }
  static showTasks(req, res){
    return res.render('tasks/all')
  }
};


