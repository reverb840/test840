import { Man } from "./Man.js"
import { Fender } from "./Fender.js"

const jazzmaster = new Fender("Jazzmaster", "Surfy");
const telecaster = new Fender("Telecaster", "Twangy");

export class Rocker extends Man {
  guitar;
  constructor(name, age, gender) {
    super(name, age, gender)
  }

  setGuitar(guitar) {
    this.guitar = guitar;
  }

  getJazzmaster() {
    return jazzmaster;
  }

  getTelecaster() {
    return telecaster;
  }

  playGuitar() {
    if (this.guitar == null) {
      return `${this.getName()}: I can't play guitar cause I don't have one yet. Use the method setGuitar() to give me a guitar`
    } else {
      return `${this.getName()}: I like this sound:${this.guitar.getSound()}`;
    }
  }
}