import { Human } from "./Human.js"

export class Man extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);
  }

  pee() {
    return "I stand while I pee"
  }
}
