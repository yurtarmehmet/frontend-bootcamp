const ara = {
  arayan: "Mehmet",
  nediyor: function(){
    console.log("Merhaba " + this.arayan + " sizi aradi.");
  }
}

ara.nediyor();

const neDiyorFunc = ara.nediyor.bind(ara);
neDiyorFunc();

const ara2 = {
  arayan: "Mehmet",
  nediyor: () => {
    console.log("Merhaba " + this.arayan + " sizi aradi.");
  }
}

ara2.nediyor()



console.log(this === window) /// true

this.color = "Kirmizi";
console.log(window.color) /// Kirmizi


function show(){
  console.log(this === window);
}

show(); /// true


let car = {
  brand: "Honda",
  getBrand: function(){
    return this.brand;
  }
}

console.log(car.getBrand()); /// Honda

let brand = car.getBrand;
console.log(brand()); /// undefined

let brand = car.getBrand.bind(car);
console.log(brand()); // Honda


let car = {
  brand: "Honda",
  getBrand: function(){
    return this.brand;
  }
};

let bike = {
  brand: "Harley Davidson"
};

let brandYazdir = car.getBrand.bind(car);
console.lg(brandYazdir()); /// Honda

let brandYazdir = car.getBrand.bind(bike);
console.lg(brandYazdir()); /// Harley Davidson




function getBrand(prefix){
  console.log(prefix + this.brand);
  // console.log(prefix + honda.brand);
  // console.log("I'm a" + "Honda");  
}

let honda = {
  brand: "Honda"
}

let audi = {
  brand: "Audi"
}

getBrand.call(honda, "I'm a"); // I'm a Honda
getBrand.call(audi, "It's an"); // It's an Audi


let getThis = () => {return this;};
console.log(getThis() === window) /// true
