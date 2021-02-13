// Template Literals
const greeting = "Hello";
const subject  = "World";

console.log(greeting + " " + subject + "!");
console.log(`${greeting} this is space ${subject} !`);

// Shorthand property names
const foo = "hello";
const bar = 42;
const xyz = "something";

const myObj = {
    foo, // foo: foo
    bar, // bar: bar
    xyz  // xyz: xyz
};

// Arrow functions
const getFive = function(){
    console.log(this);
    return 5;
};

const getFiveArr = () => 5;

const addSeventToFive = () => 5+7;

const addSeventToFive = () => {
    console.log(this);
    return 5+7;
};

// Destructing
// Array destrucring
let arr = ["Ilya", "Kantor"];

let [firstName, surname, another] = arr;
// firstName = arr[0]
// surname   = arr[1]
// another   = arr[2];
console.log(firstName);
console.log(another);

let peopleList = ["John", "Joe", "Jane", "Mary"];
let [firstPerson, secondPerson, ...otherPeople] = peopleList;
console.log(firstPerson);
console.log(secondPerson);
console.log(otherPeople);
console.log(otherPeople.length);
console.log(otherPeople[1]);

// Object Destrucring
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;
// let title = options.title

let {title: myTitle, width: myWidth} = options;
// let myTitle = options.title;
// console.log(myTitle) => Menu

let {width: myWidth = 200} = options;

let {height, ...otherProps} = options;
// let otherProps = {width: 100, height: 200};
Object.keys(otherProps).length // 2

let options = {
  size: {
      width: 100,
      height: 200
  },
  items: ["Cake", "Donut"]
};

let {size: {width, height}, items} = options;

// console.log(width) => 100

// default parameters
const multiply = (x,y=x) => x*y;

multiply(5,10);
multiply(10);

/// optional chaining
const user = {
    address : {
        street: "Rasimpasa"
    }
};

//eski
const streetName = user && user.address && user.address.street;

// yeni
const streetName = user?.address?.street?.name;

const user = {

};
console.log(user.address.street.name);
const streetName = function(){
    if(user){
        if(user.address){
            return user.address.street
        }
    }
};
console.log(streetName);

/// Array methods
// find // arratin elema ni
// some // true or false
// every // true or false
// includes
// filter
// map
// foreach
// reduce
// sort
