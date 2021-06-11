import { Man } from './components/Man.js'
import { Woman } from './components/Woman.js'

const man = new Man("Alonso", 29, "Male");
const woman = new Woman("Sine", 24, "Female")

console.log(man.pee())
console.log(woman.pee())

console.log(man.eat())
console.log(woman.eat())


