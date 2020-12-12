//Literal
let animal = {};
animal.name = "Leo";
animal.energy = 10;

animal.eat = function(amount){
  console.log(this.name + " is eating");
  //console.log(`${this.name} is eating`);
  this.energy += amount;
}

animal.sleep = function(length){
  console.log(this.name + " is sleeping")
  this.energy += length;
}
            
animal.play = function(length){
  console.log(this.name + " is playing");
  this.energy -= length;
}
                     
//animal.play(5);  
//console.log(animal.energy);

/// Constructor Function
function Animal(name, energy){
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  
  animal.eat = function(amount){
    console.log(this.name + " is eating");
    //console.log(`${this.name} is eating`);
    this.energy += amount;
  }

  animal.sleep = function(length){
    console.log(this.name + " is sleeping")
    this.energy += length;
  }
            
  animal.play = function(length){
    console.log(this.name + " is playing");
    this.energy -= length;
  }
  
  return animal;
}

//const leo   = new Animal("Leo", 7);
//const snoop = new Animal("Snoop", 10);

//leo.eat(100);
//console.log(leo.energy);

//snoop.play(5);
//console.log(snoop.energy);

// Sharing Methods
var animalMethods = {
  eat(){
    console.log(this.name + " is eating");
    //console.log(`${this.name} is eating`);
    this.energy += amount;
  },
  sleep(){
    console.log(this.name + " is sleeping")
    this.energy += length;
  },
  play(){
    console.log(this.name + " is playing");
    this.energy -= length;
  }
}

function Animal(name, energy){
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  animal.play = animalMethods.play;
  return animal;
}

//const leo   = new Animal("Leo", 7);
//const snoop = new Animal("Snoop", 10);


//Object.create
const parent = {
  name: "Jane",
  age: 35,
  heritage: "Irish"
}

const child = Object.create(parent);
child.name = "Ryan";
child.age  = 7;
console.log("Child", child);

// same example with object create
var animalMethods = {
  eat(amount){
    console.log(this.name + " is eating");
    //console.log(`${this.name} is eating`);
    this.energy += amount;
  },
  sleep(length){
    console.log(this.name + " is sleeping")
    this.energy += length;
  },
  play(length){
    console.log(this.name + " is playing");
    this.energy -= length;
  }
};

function Animal(name, energy){
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
  return animal;
}

const leo   = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);

leo.eat(100);
console.log(leo.energy);

/// protoype
function Person2(name){
  this.name = name;
}

Person2.prototype.eat = function(){
  console.log("Eating");
}

var joe = new Person2("joe")
var jane = new Person2("jane")

var a = ["1", "2"]; 
var b = ["3", "4"];
//Array.prototype.filter
//var joe = {name: "joe"};

joe.eat();


for(key in joe){
  if(joe.hasOwnProperty(key)){
     console.log("objenin propertysi", key); 
  }
}

// example with prototype
function Animal3(name, energy){
  this.name   = name;
  this.energy = energy;
}


Animal3.prototype.eat = function(amount){
    console.log(this.name + " is eating");
    //console.log(`${this.name} is eating`);
    this.energy += amount;
};

Animal3.prototype.sleep = function(){
    console.log(this.name + " is sleeping")
    this.energy += length;
};

Animal3.prototype.play = function(){
    console.log(this.name + " is playing");
    this.energy -= length;
};

const leo3   = new Animal3("Leo", 7);
const snoop3 = new Animal3("Snoop", 10);

leo3.eat(10);

// class keyword
class AnimalClass {
  constructor(name, energy){
     this.name   = name;
     this.energy = energy;
  }
  eat(amount){
     console.log(this.name + " is eating");
    //console.log(`${this.name} is eating`);
    this.energy += amount;
  }
  sleep(length){
    console.log(this.name + " is sleeping")
    this.energy += length;
  }
  play(length){
    console.log(this.name + " is playing");
    this.energy -= length;
  }
};

const leo4   = new AnimalClass("Leo", 7);
const snoop4 = new AnimalClass("Snoop", 10);
const other  = new AnimalClass();

leo4.eat(20);










