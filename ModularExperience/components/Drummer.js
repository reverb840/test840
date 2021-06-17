import { Man } from "./Man.js"
import { Zildjian } from "./Zildjian.js"

const aseries = new Zildjian("A Series", "Rock");
const kseries = new Zildjian("K Series", "Pop");

export class Drummer extends Man {
  cymbals;
  constructor(name, age, gender) {
    super(name, age, gender)
  }

  setCymbals(cymbals) {
    this.cymbals = cymbals;
  }

  getCymbals() {
    return this.cymbals;
  }

  purchaseASeries() {
    return aseries;
  }

  purchaseKSeries() {
    return kseries;
  }

  playCymbals() {
    if (this.cymbals == null) {
      return `${this.getName()}: I have no cymbals yet :( `
    } else {
      return `${this.getName()}: I like my new ${this.getCymbals().getName()} cymbals`;
    }
  }
}
