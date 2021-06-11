export class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    return "Default Eating"
  }

  pee() {
    return ""
  }
}