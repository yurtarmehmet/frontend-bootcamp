// 1. "Mehmet", true, {}, ["elma", "artmut"], undefined, null, () => {}
// let, var, const 
// var  function scope
// let  block scope
// const block cope, degistirerem


//var hello;
//console.log(hello);

var hello = "Hello, world";
console.log(hello);

let helloLet = "Hello, world";
helloLet = "Baska bir sey";
console.log(helloLet);


const PI = 3.14;
const API_KEY = "A12312312KN12KLN31";

//API_KEY = "baska bir key";

const CAR = {
  model: "Porshce",
  type: "Sports"
};

CAR.model = "Mercedes";
console.log(CAR.model);

// Primitive Values
// number
// string
// boolean
// undefined
// null
// symbol

// Refenas Values
// object
// array
// function

console.log("3 degerinin tipi", typeof 3);
console.log("True degerigin tipi", typeof true);

console.log("object degerinin tipi", typeof {});
console.log("array degerinin tip", typeof []);
console.log("function degerinin tipi", typeof function(){})

/// primitive vs referans
let name = "Mehmet"; /// "mehmet";
let displayName = name; /// "mehmet"

name = "Ahmet"; // "ahmet"

console.log(name); // "Ahmet"
console.log(displayName); // "Mehmet"


let araba = {
  type: "sport",
  name: "bmw"
}


let baskaBirAraba = araba;
console.log(araba.name); // bmw 

baskaBirAraba.name = "Mercedes";
console.log(araba.name); // mercedes 
console.log(baskaBirAraba.name); // Mercedes

// primiteve vs referans
let sayi1 = 3;
let sayi2 = "3";
sayi1 === sayi2 // false
sayi1 == sayi2 // true

// ---

let araba1 = {name: "Mercedes", type: "sport"}; // memory address 10101
let araba2 = {name: "Mercedes", type: "sport"}; // memory addrss 10102
araba1 == araba2 // false
araba1 === araba2 // false

araba1.name === araba2.name // true


let arabalar1 = ["porche", "mercedes"];
let arabalar2 = ["porche", "mercedes"];

arabalar1 == arabalar2
arabalar1 === arabalar2



/// Undefined vs null
// null atanmis bir deger
let x = null;
console.log(x); // null

let a;
console.log(a); // undefined

// typeof 3 // number
// typeof undefined // undefined
// typeof null // object

// null === undefined /// false
// null == undefined // true

console.log(undefined == "");







