import { v4 } from "uuid";

export class Task {
  id = "";
  desc = "";
  completeIn = null;

  constructor(desc) {
    this.desc = desc;
    this.id = v4();
    this.completeIn = null;
  }
}
