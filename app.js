import MainMenuComponent from "./components/main-menu.component";

import { MainMenuChoices } from "./usecases/choices.usecases";
import { MenuStrategies } from "./usecases/strategy.usecases";

import Pause from "./usecases/pause.usecases";
import { readFile } from "./helpers/utilities.helpers";
import { Tasks } from "./models/Tasks.model";

async function main() {
  //Create our Main menu component
  const MainMenu = new MainMenuComponent(MainMenuChoices);
  let opt;

  const taskDB = readFile();
  if (taskDB) Tasks.getInstance().loadTasksFromFile(taskDB);

  do {
    opt = await MainMenu.build();
    const menuOption = MenuStrategies[opt];
    await menuOption();
    await Pause();
  } while (opt !== 0);
}

main().catch(console.error);
