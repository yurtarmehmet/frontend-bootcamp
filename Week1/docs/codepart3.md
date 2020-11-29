// switch case
let foo = "John";
switch(foo){
  case 'hello':
      console.log("value is hello");
      break;
  case 'world':
      console.log("value is world");
      break;
  default:
      console.log("value is something different")
}


if(foo === "hello" || foo === "world"){
  console.log("value is " + foo);
}else{
  console.log("value is something different")
}

// complexity of switch case 

let element = "google.com";

const func = (element) => {     console.log(element);}

const FETCH_URL = "google.com"

switch(element){
  case 'elma':
  case 'muz':
  case 'armut':
    func(element)
    break;
  case 'ispanak':
    console.log("Bu bir sebze");
    break;
  case 5:
    console.log("Return from function");
    break;
  case FETCH_URL:
  case "google.com": 
    console.log("inside google.com");
    break;
}

/// ternary operator
//let x = "elma";
//let sonuc = x === "elma" ? "bu bir elma" : "bu elmadan farkli bir sey";
//let isActive = button.classList.contains("active") ? "Buton aktiftir": " buton aktif degildir";
    
    
    
/// for loop
/*
for ([initialization]; [condition]; [final-expression])
   statement
*/

for(let i = 1; i<=10; i = i + 2){
    console.log("Guncel deger", i);
}

for(let i = 1; i<=10; i = i + 2){
    console.log("Guncel deger", i);
}
    
let i = 1;
for(;i<=10; i = i + 2){
    console.log("Guncel deger", i);
}    

for (;;) {
  // repeats without limits
}
    

for(let i = 1; i<=10; i = i + 2){
    if(i === 7){
      console.log("Guncel deger", i);
      break;
    }
    console.log("Guncel deger", i);
}

for(let i = 1; i<=10; i = i + 2){
    if(i === 7){
      continue;
    }
    console.log("Guncel deger", i);
}


/// while loop
//while (condition){
  // code
//}

let j = 1;
while(j <= 10){
  console.log("While loop Guncel deger", j);
  j++
  /// j = j + 1
}

// do while
let z = 1;
do {
  console.log("do While loop Guncel deger", z);
  z++
} while (z <= 10)
    
    
let z = 1;
do {
  console.log("do While loop Guncel deger", z);
  z++
} while (true)
      
    
    
    

/* let deneme = [1, 2, 3]
let sayi = 3;
deneme.forEach((num, numIndex) => {
  switch(num){
    case 1:
      console.log("Su anki sayi", num);
    case 2:
      console.log("Su anki sayi", num);
    case 3:
      console.log("Su anki sayi", num);
  }
}); */
