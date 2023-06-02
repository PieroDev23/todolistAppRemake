import { Tasks } from "../models/Tasks.model";
import InquirerMenu from "../models/inquirer-menu.model";

export default class ViewTasksComponent extends InquirerMenu {
  #config = [];

  constructor() {
    super();
  }

  async build() {
    const choices = Tasks.getInstance().getViewTaskList();
    this.#config = [
      {
        type: "checkbox",
        name: "tasks",
        choices,
      },
    ];
    const answers = await super.build(this.#config);
    return answers;
  }
}
