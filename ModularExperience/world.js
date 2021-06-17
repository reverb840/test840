import { Man } from './components/Man.js'
import { Woman } from './components/Woman.js'
import { Rocker } from "./components/Rocker.js"
import { Drummer } from './components/Drummer.js';

const man = new Man("Alonso", 29, "Male");
const woman = new Woman("Sine", 24, "Female")


// console.log(man.pee())
// console.log(woman.pee())

// console.log(man.eat())
// console.log(woman.eat())

//const rocker = new Rocker("Rovetu", 31, "Diverso");
const drummer = new Drummer("Beba", 40, "Beba")
const latestPurchase = drummer.purchaseASeries();
drummer.setCymbals(latestPurchase);

//console.log(rocker.playGuitar())

console.log(drummer.playCymbals());






