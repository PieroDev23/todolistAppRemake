import os from "os";
import inquirer from "inquirer";

export default class InquirerMenu {
  /**
   * Build the prompt
   * @param {Array<answer>} config configuracion de inquirer
   * @returns {Promise<Answers>}
   */
  async build(config = []) {
    this.displayTitle();
    const inquirerPrompt = await inquirer.prompt(config);
    const answer = config.at(0).name;

    return inquirerPrompt[answer];
  }

  displayTitle() {
    console.clear();
    console.log(`Hello ${os.hostname()} 🙋‍♂️`);
  }
}
