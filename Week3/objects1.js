let user = {}
let userConstructor = new Object();

let person = {
  name: "John",
  age: 30,
  "say hi": "Hi everyone",
  hobbies: {
    first: "reading",
    second: "travelling"
  }
}

console.log(person.name);
console.log(person["name"]);
console.log(person["say hi"]);

//var name = "mary";
//person["name"] vs person[name] person.mary

console.log("name" in person);
console.log("surname" in person);
console.log("first" in person.hobbies);


// for in
for (let key in person){
    console.log(key);
}


person["name"]  = person.name;


/* document.getElementsByTagName("button").addEventListener(function(){
  const clickedKey = this.class;
  
  // if clickedKey == name
  console.log(person["clickedKey"]) /// person.clickedKey XXX boyle bir key yok
  console.log(person[clickedKey]) /// person.name
  
  // if clickedKey == age
  console.log(person[clickedKey]) /// person.age
}); */


delete person.name;

person.name = "John"
person["surname"] = "Doe";

console.log("optinoal", person?.cars?.first);
