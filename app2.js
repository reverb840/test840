/*let person = {
    name: "Anthony"
    age: 26
    favFood: "Pizza"
    } 
*/

//let grades = [30, 30, 12, 23];
//console.log(grades);
//
/* 
+
-
*
/
%
*/
/*let calculator = {
    sum(numberOne, numberTwo){
       return numberOne + numberTwo
    },
    substract(numberOne, numberTwo){
        return numberOne - numberTwo
     },
     multiply(numberOne, numberTwo){
        return numberOne * numberTwo
     },
     divide(numberOne, numberTwo){
        return numberOne / numberTwo
     },
}
console.log(calculator.sum(1, 2));
console.log(calculator.substract(1,2));
console.log(calculator.multiply(1,2));
console.log(calculator.divide(1,2));
*/
//user w properties name, offline, online and points
//methods . message w name and how many points d it hav
//online or offline

/*
let user = {
    userName: "Anthony",
    isOnline: false,
    points: 1223,
    numberOfPoints(){
        return `the user ${this.userName} has ${this.points} points`
    },
    userStatus(){
        if (this.isOnline) {
            return `the user ${this.userName} is Online`
        } else {
            return `the user ${this.userName} is Offline`
        }
        
    }
}
console.log(user.numberOfPoints());
console.log(user.userStatus());
*/
/*
let text = "La Ovejita Feliz"
text.blink
console.log(text.blink());
*/
//present 2 diferent products within the same class , discount  stablish name,price, model, brand, instock sattus, discount and method that tells if the purchase is ready
/*
let purchase ={
    itemName: "Drums",
    price: 6099,
    brand: "Roland",
    model: "TD-17KV",
    inStock: true,
    inDiscount: true,
    isReady: false,
} 
*/
class electronicDrum {
    constructor (model, brand, price, inDiscount, inStock) {
        this.model= model;
        this.brand= brand;
        this.price= price;
        this.inDiscount= inDiscount;
        this.inStock= inStock;
    }
    sale(){
        if(this.inDiscount){
            return `New price: ${this.price}` - 20% `${this.price}`;
        } else{
            return "this item has no discount";
        }
    }
    availability(){
        if (this.inStock){
            return `The item ${this.model} is currently available`;
        } else{
            return `The item ${this.model} is currently not available`;
        }
    }
}
let td07kv = new electronicDrum("TD-07KV", "Roland", 4950, true, false,);
let td17kv = new electronicDrum("TD-17KV", "Roland", 6099, true, true,);

console.log(td17kv.model);
console.log(td07kv.price);
console.log(td07kv.availability());
console.log(td17kv.sale());

//hey there
