import { Man } from "./Man.js"
import { Fender } from "./Fender.js"

const jazzmaster = new Fender("Jazzmaster", "Surfy");
const telecaster = new Fender("Telecaster", "Twangy");

export class Rocker extends Man {
  guitar;
  constructor(name, age, gender) {
    super(name, age, gender)
    this.setGuitar(telecaster)
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
    return `I like this sound:${this.guitar.getSound()}`;
  }
}