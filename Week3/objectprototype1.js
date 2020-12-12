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

const leo   = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);

leo.eat(100);
console.log(leo.energy);

snoop.play(5);
console.log(snoop.energy);




