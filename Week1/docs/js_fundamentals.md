### Values

Value'lar JavaScript'deki en temelyapılardır. 1 bir valuedur, true bir valuedur, "hello", function(){} .... birer valuedur. Valueları depoladığımız yapılara da variable(değişken) deriz.

Variablelar var keywordu ile oluşturuabilir.

```html
var hello;
```

Burada hello adında bir değişken oluşturduk. JavaScript'de değişkenler "undefined" değeri ile oluşur. 


```html
console.log(hello) // undefined
```

```html

var hello = "Hello, world";
hello = "Hello, world";

let hello = "Hello, world";
const PI = "3,14";
```

var: JavaScript' de değişken tanımlanın artık eskimiş yolu. Atanan değişkenler değiştirilebilir, function scope

let: Atanan değişkenler değiştirilebilir, block scope, değişkenler tanımlamalar hesaplanmadan initialize olmaz.

const: atanan değişkenler değiştirilemez, block scope.

varible naming: https://www.dummies.com/web-design-development/javascript/naming-javascript-variables/

https://stackoverflow.com/a/23436618


### Types

JavaScript'de iki tip value vardır. Primitive ve referance value.

```html
Primitive Values
  number
  string
  boolean
  undefined
  null
  symbol

Reference Values
 "typeof" değeri "object" olan her şey.
    objects
    arrays
    functions
```
    -----
    
```html
const age = 20 // primitive
const name = 'John' // primitive
const loading = false // primitive
const user = undefined // primitive
const response = null // primitive
const counter = Symbol('counter') // primitive

const user = { name: 'John' } // reference
const friends = ['Jane', 'Marcy'] // reference
const exampleFunction = () => ({}) // reference  
```
     

İlk bakışta primitive ve referance değerler aynı gibi gözükse de aralarında büyük farklar vardır. Temel farkları store ediliş biçimleridir. Primitive bir değerin store edilmiş değerine baktığınızda, değerle aynı olduğunu görürürüz. (30, "John", false);

Referans değerlere baktığnızda ise store edilen şeyin "memory adress" olduğunu görürsünüz. Pratikte bunlar ne gibi farklar gösterir bakalım: 

```html
let name = 'Mehmet'
let displayName = name

name = 'Ahmet'

console.log(name) // 'Ahmet'
console.log(displayName) // 'Mehmet'
```

Benzer bir örneğe referans valuelar için bakalım: 

```html
let car = {
  type: 'Sport',
  name: 'Porcshe'
}

let otherCar = car

otherCar.name = 'Mercedes'

console.log(car.name) // Mercedes
console.log(otherCar.name) // Mercedes
```


Burada car ve otherCar objeleri hafızadaki aynı yere referans etmekte. Bu yüzden logladığımızda aynı değerleri görürüz.


Başka bir farklılığa daha bakalım: 

```html
const name = 'John'
const friend = 'John'

name === friend // true
```

Peki referans valuelarda?

```html
const car = {
  type: 'Sport',
  name: 'Porcshe'
}

const otherCar = {
  type: 'Sport',
  name: 'Porcshe'
}

car === otherCar // false
```

Bunun sebebi, primiteve valueların aksine, referans valueların karşılaştırmayı referansına göre yapmasıdır.

### undefined vs null
null boş ya da olmayan bir değerdir.
null atanmış olmalıdır.

```html
let a = null;
console.log(a);
// null
```


Undefined. declared but not defined:
```html
let b;
console.log(b);
// undefined

var d = {};
console.log(d.fake);
// undefined

```

- null atanmış bir valuedur. "hiçbirşey" anlamındandır.
- undefined tanımlamnmış ama değer atanmamış bir yapıdır
- null ve undefined falsy değerlerdir.
- null ve undefined, primitivedir.
- null !== undefined ancak null == undefined.

### Operators
https://www.w3schools.com/js/js_operators.asp

https://www.w3resource.com/javascript/operators/bitwise-operator.php


### If-Else
```html
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}

-----

if (condition) {
  code to run if condition is true
}
run some other code

------

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


```

### Truthy and Falsy Values in JavaScript

```html
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
```

Ternary operator:

```html
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}
```

```html
var a = 3 || 5;
var b = 3 && 5;
```


Switch-case
https://javascript.info/switch

Loops 
https://javascript.info/while-for

Functions, Expressions&Statements
https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2

https://www.sitepoint.com/function-expressions-vs-declarations/

https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38

https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052

https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/


Regular Expressions
https://eloquentjavascript.net/09_regexp.html

https://javascript.info/regular-expressions

https://javascript.info/
