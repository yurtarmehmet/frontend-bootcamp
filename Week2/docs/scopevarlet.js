// var, let, const 

//var 
var declaration;
console.log(declaration); //undefned

declaration = "This is an initizalition";

//Scope
//Degiskenlerin ve fonksiyonlarin ulasilabilir oldugu alana scope deniyor.
// Global Scope ve //Function-local scope
// Function-Local-Scope: eger degisken tanimlamasi function declaration icersinde
// ise, bu degiskenlere function local scope'unda tanimli denir.

function getDate(){
  var date = new Date();
  return date;
}

getDate(); // 10:11....
console.log(date); // Referance Error


// var example
function triple(sayilar){
 /// when hoistiing occurs
  // var triplesArr = undefined;
  // var i = undefined
  // var triplesOfNum = undefined
 
  var triplesArr = [];
  
  for(var i=0;i<sayilar.length; i++){
    var triplesOfNum = sayilar[i] * 3;
    triplesArr.push(triplesOfNum);
  }
  
  console.log(i); //  3
  console.log(triplesOfNum); //  900
  
  return triplesArr;
}

triple([100, 200, 300]);

// let example
function triple(sayilar){
  /// let triplesArr;
 //// var triplesArr = undefined;
  console.log(triplesArr); // 
  let triplesArr = [];
  
  for(let i=0;i<sayilar.length; i++){
    let triplesOfNum = sayilar[i] * 3;
    triplesArr.push(triplesOfNum);
  }
 
  
  console.log(i); 
  console.log(triplesOfNum);
  
  return triplesArr;
}

triple([100, 200, 300]);

/// var vs let
// var
// 1.function scope
// 2. hoisting undefined ile initilaize eder(Deger atanmadan once undefined degeri vardir)
// let
// 1. block scope
// 2. hoisting bir deger initialize etmez. (deger atanmadan ulasilirsa Rerefernce error)
// const
// 1. block scope


// let vs const
// const: yeniden atama yapilmayacak degerler icin
// const PI
const name = "John";
name = "Joe";

const person = {
  name: "John"
};

delete person.name;

const fruits = ["apple", "banana"]
fruits.push("kiwi")

fruits = [];
fruits[0] = "orange";

person = {};
person.name = "Jane";





triple([100, 200, 300]);
