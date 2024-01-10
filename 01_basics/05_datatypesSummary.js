// Primitive Datatypes
 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //we can manualy type as let userEmail = undefined but aise bhi kaam chal jaayega abhi bhi undefined hi maanega.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","naagraj","doga"];  //arrays
let myObj = {     //objects
    name: "Rishabh",
    age: 23,
}

const myFunction = function(){  //Functions
    console.log("Hello world");
}

//to read documentation this is the link.
// https://262.ecma-international.org/5.1/#sec-11.4.3