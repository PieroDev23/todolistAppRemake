import CreateTaskComponent from "../components/create-task.component";
import ViewTasksComponent from "../components/view-tasks.component";
import { updateFile, useComponentFactory } from "../helpers/utilities.helpers";
import { Tasks } from "../models/Tasks.model";

//Option Strategies
export const MenuStrategies = {
  0: exit,
  1: CreateTaskStrategy,
  2: ViewTasksStrategy,
  3: ViewOnlyCompletedTasksStrategy,
  4: ViewOnlyPendingTasksStrategy,
};

//Create a task and add the task to the list
async function CreateTaskStrategy() {
  const [desc, TaskListInstance] = await useComponentFactory(CreateTaskComponent);
  TaskListInstance.addTask(desc);
  updateFile(TaskListInstance.taskCollection);
}

//Show the tasks in a list
async function ViewTasksStrategy() {
  const [tasks, TaskListInstance] = await useComponentFactory(ViewTasksComponent);
  TaskListInstance.toggleCompleted(tasks);
  updateFile(TaskListInstance.taskCollection);
}

//Show only the completed tasks
async function ViewOnlyCompletedTasksStrategy() {
  Tasks.getInstance().getOnlyCompleteTasks();
}

//Show only the pending tasks
async function ViewOnlyPendingTasksStrategy() {
  Tasks.getInstance().getOnlyPendingTasks();
}

function exit() {
  return null;
}
