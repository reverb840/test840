import { Man } from './components/Man.js'
import { Woman } from './components/Woman.js'
import { Rocker } from "./components/Rocker.js"

const man = new Man("Alonso", 29, "Male");
const woman = new Woman("Sine", 24, "Female")


// console.log(man.pee())
// console.log(woman.pee())

// console.log(man.eat())
// console.log(woman.eat())

const rocker = new Rocker("Rovetu", 31, "Diverso");


console.log(rocker.name)
//console.log(rocker.getGuitar())
rocker.setGuitar(rocker.getJazzmaster())
console.log(rocker.playGuitar())






