import InquirerMenu from "../models/inquirer-menu.model";
import { validateEmptyField } from "../usecases/validators.usecases";

export default class CreateTaskComponent extends InquirerMenu {
  #config = [];

  constructor() {
    super();
  }

  async build() {
    this.#config = [
      {
        type: "input",
        name: "desc",
        message: "Create a new task",
        validate: validateEmptyField,
      },
    ];

    const answer = await super.build(this.#config);
    return answer;
  }
  
}
