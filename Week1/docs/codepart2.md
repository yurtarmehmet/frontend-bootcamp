// Operators
let toplam = 8;
toplam++
//toplam = toplam + 1;
toplam += 5;
// toplam = toplam + 5;
console.log(toplam);


let str1 = "Hello";
let str2 = "World";

console.log(str1 + ", " + str2);


console.log(str1 + 3);

let fruits = [1, 2, 3];
let otherArray = [4,5,6];
console.log(fruits + otherArray)


let foo = "hello";
console.log(!!foo);

let negativeNumber = -1;
console.log(!!negative)

let degerler = 1 && 4 && 3 && 0 && 5;
console.log("degerler", degerler);
let baskaDegerler = 0 || false || 4 || null || 10;
console.log("baskadegerler", baskaDegerler);

/// IF Statements
if (condition) {
  //code to run if condition is true
} else {
  //run some other code instead
}

if (condition) {
  code to run if condition is true
}
//run some other code

 if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }

/// Trutthy and falsy values
function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}


// Outputs: "Truthy!"
logTruthiness(true);

// Outputs: "Truthy!"
logTruthiness({});

// Outputs: "Truthy!"
logTruthiness([]);

// Outputs: "Truthy!"
logTruthiness("some string");

// Outputs: "Truthy!"
logTruthiness(3.14);

// Outputs: "Truthy!"
logTruthiness(new Date());


// Outputs: "Falsy."
logTruthiness(false);

// Outputs: "Falsy."
logTruthiness(null);

// Outputs: "Falsy."
logTruthiness(undefined);

// Outputs: "Falsy."
logTruthiness(NaN);

// Outputs: "Falsy."
logTruthiness(0);

// Outputs: "Falsy."
logTruthiness("");

if(a !== false){
  //
}else{
  
}

if(a){
  //
}else{
  
}


const degerler = 1 && 2 && 0 && 3;
// degerler returns 0 
if(degerler){
  console.log("inside if");
}else{
  console.log("inside else");
}
/// inside else






