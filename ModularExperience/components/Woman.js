import { Human } from "./Human.js"

export class Woman extends Human {
  constructor(name, age, gender) {
    super(name, age, gender)
  }

  pee() {
    return "I sit while I pee"
  }
}