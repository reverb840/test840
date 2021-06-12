export class Fender {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  getSound() {
    return this.sound;
  }

  sound() {
    return `Sound:${this.getSound()}`;
  }
}