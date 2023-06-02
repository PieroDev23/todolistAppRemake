import inquirer from "inquirer";

export default async function Pause() {
  const questions = [
    {
      type: "input",
      name: "enter",
      message: "Presiona ENTER para continuar",
    },
  ];

  await inquirer.prompt(questions);
}
