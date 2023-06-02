import { Tasks } from "../models/Tasks.model";
import fs from "fs";

/**
 * Create a UI Inquirer component
 * @param {InquirerMenu} Component Component Class
 * @returns
 */
export async function useComponentFactory(Component) {
  const TaskListInstance = Tasks.getInstance();
  const component = new Component();
  const answer = await component.build();

  return [answer, TaskListInstance];
}
/**
 * 
 * @param {Array<Tasks>} tasks
 */
export function updateFile(tasks = []) {
  fs.writeFileSync("./data/data.json", JSON.stringify(tasks));
}

export function readFile() {
  const fileExist = fs.existsSync("./data/data.json");
  if (!fileExist) return [];

  const file = fs.readFileSync("./data/data.json", { encoding: "utf-8" });
  return JSON.parse(file);
}