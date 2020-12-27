const sayilar = [1,4,5,9,12,15];
const gtSix = sayilar.filter((sayi) => {
   return sayi > 6;
});
console.log(gtSix);

const people = [{
  name: "John",
  age: 30,
  hobbies: ["reading", "travelling"],
  car: {
    model: "Honda",
    color: "green"
  }
},
{
  name: "Joe",
  age: 33,
  hobbies: ["travelling", "tennis"],
  car: {
    model: "Audi",
    color: "green"
  }
}]


/// arabasi yesil olanlardan olusan bir array
const arabasiYesilOlanlarArr = people.filter((person) => {
  return person.car.color === "green";
}).map(person => person.name);
console.log("car colors", arabasiYesilOlanlarArr);

/// hobilerinde travelling olanlardan olusan bir array
const hobisindeTravellingOlanlarArr = people.filter((person) => {
  return person.hobbies.includes("travelling"); // people.hobbies.indexOf("travelling") > -1
});
console.log("hobbies", hobisindeTravellingOlanlarArr)

/// arabasi honda olanlardan olusan bir array
const arabasiHondaOlanlarArr = people.filter((person) => {
  return person.car.model === "Honda";
});
console.log("car models", arabasiHondaOlanlarArr)

const arabasiHondaOlanEleman = people.find((person) => {
  return person.car.model === "Honda";
});
console.log("arabasiHondaOlanEleman", arabasiHondaOlanEleman);

// hobisinde travelling olanlardan, arabasinin modeli Honda olan ilk kisiyi getir.
const person = people.filter((person) => {
  return person.hobbies.includes("travelling"); // people.hobbies.indexOf("travelling") > -1
}).find((person) => {
  return person.car.model === "Audi";
})
console.log(person);

/// some
const arabasiYesilOlanVarmi = people.some((person) => {
  return person.car.color === "green";
});
console.log("arabasiYesilOlanVarmi", arabasiYesilOlanVarmi);

const herkesinHobilerindeTennisVarmi = people.every((person) => {
  return person.hobbies.includes("tennis");
});
console.log("herkesinHobilerindeTennisVarmi", herkesinHobilerindeTennisVarmi);









;
