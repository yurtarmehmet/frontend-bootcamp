// Coercion
// Implicit Coercion vs Explicit Coercion
//String(123) // 123 u sayisini Stringe cevirmek istedim, explicit coercion
//parseInt("123") /// 123
//if( 3 < 5) {} // locagical context'de 3<5 trueya cevrildi, implcit coercion

// String Conversion
// Explicit, String(123) "123"
// binary + operatoru, // implicit
console.log(String(123));
console.log('' + 123);

// primitive values
String(123);   // '123'
String(-12.3); // "-12.3"
String(null);  // "null"
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'


// Boolean
// Explicit: Boolean(), Boolan(2) => true
// implicit, islem logical context, ya da locigal opetorle gerceklesen bir islem (|| && !)
//Booelan(2);  // explicit
if(2) {console.log("hello");}  // logical context sebebiyle implicit 
var a = !!2; // true
var b = 2 || "Hello"; //
console.log("B'nin degeri", b);
// || ve &&
var b = 2 || "Hello"; // returns 2 
var c = 2 || 3 || 1 || 5; // returns 2
var d = 2 &&  3 && 5; // returns 5
var e = 2 && 0 && 7; // retursn 0

// Boolean('') => // false
// Boolean(0) => // false
// Boolean(-0)=> // false
// Boolean(NaN) => // false
// Boolean(null) => //false
// Boolean(undefined)    // false
//Boolean(false)        // false

// Boolean({}) //true
// Boolean([]) //true
// Boolean(function(){}) // true


// Numeric
// Explicit => Number("123")
// Implicit:
// - karsilastirma opertaorlu (>, <, <=, >=)
// - aritmetich operatorler(-, +, *, / , %, **)// Bud degil: (1 + "123") // 1 + +2 2++
// - unary + opereatoru
// == (loose equality) !=
// == (Istisna: iki taraf da string ise numeric coersion yapmaz)

// +'123' => 123 // unary +
// 123 != '456' // loose equality
// 4 > '5' // karsilastirma
// 5/null // Infinity


// bosluklari ve \n sil, kalan sey number ise don, degil ise Nan, bos string ise 0
// Number(null) // 0
//Number(undefined)              // NaN
//Number(true)                   // 1
//Number(false)                  // 0
//Number(" 12 ")    // 12
//Number("-12.34")  // -12.34
//Number("\n")  // 0
//Number(" 12s ") // NaN
//Number(123) // 123












