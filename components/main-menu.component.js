import InquirerMenu from "../models/inquirer-menu.model";

export default class MainMenuComponent extends InquirerMenu {
  #config = [];
  choices = [];

  constructor(choices) {
    super();
    this.choices = choices;
  }

  async build() {
    this.#config = [
      {
        type: "list",
        name: "option",
        choices: this.choices,
      },
    ];

    const answer = await super.build(this.#config);
    return answer;
  }
}
