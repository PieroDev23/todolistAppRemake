import { Task } from "./Task.model";

export class Tasks {
  #list = {};

  constructor() {
    this.#list = {};
  }
  /**
   * It Provides the list of tasks in form of an array of objects
   * @returns {Array<Task>}
   */
  get taskCollection() {
    return Object.keys(this.#list).map((k) => this.#list[k]);
  }

  //Singleton
  static getInstance() {
    if (!Tasks.instance) Tasks.instance = new Tasks();
    return Tasks.instance;
  }

  loadTasksFromFile(tasks = []) {
    tasks.map((task) => (this.#list[task.id] = task));
  }

  addTask(desc = "") {
    const Todo = new Task(desc);
    //sintaxis de incertacion
    this.#list[Todo.id] = Todo;
  }

  /**
   * Provide the TaskList formmated ready for being assinged like choices
   * @returns {Array<Answers>}
   */
  getViewTaskList() {
    return this.taskCollection.map((task) => ({
      value: task.id,
      name: `${task.desc} ::: ${task.completeIn ? "complete" : "pending"}`,
      checked: task.completeIn !== null,
    }));
  }

  /**
   * Show all the complete tasks by console
   */
  getOnlyCompleteTasks() {
    this.taskCollection
      .filter((task) => task.completeIn)
      .map((tasksCompleteds, index) => {
        const bullet = `${index + 1}`;
        console.log(
          `${bullet}) ${tasksCompleteds.desc} ::: ${tasksCompleteds.completeIn}`
        );
      });
  }

  getOnlyPendingTasks() {
    this.taskCollection
      .filter((task) => !task.completeIn)
      .map((tasksIncompleteds, index) => {
        const bullet = `${index + 1}`;
        console.log(`${bullet}) ${tasksIncompleteds.desc} ::: pending`);
      });
  }

  toggleCompleted(ids = []) {
    //Cuando selecciona la tarea para completarla
    for (const id of ids) {
      if (!this.#list[id].completeIn) {
        this.#list[
          id
        ].completeIn = `Complete in: ${new Date().toLocaleDateString()}`;
        return;
      }
    }

    //cuando la deselecciona
    for (const task of this.taskCollection) {
      this.#list[task.id].completeIn = null;
    }
  }
}
