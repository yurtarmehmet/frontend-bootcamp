Values

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


Types

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

Values, Types
https://ui.dev/primitive-vs-reference-values-in-javascript/
https://codeburst.io/everything-you-should-know-about-javascript-variables-bd573ed6c811
https://codeburst.io/everything-you-should-know-about-javascript-variables-bd573ed6c811
https://codeburst.io/javascript-null-vs-undefined-20f955215a2
http://jsforcats.com/
https://ui.dev/var-let-const/
https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
https://flow.org/en/docs/types/primitives/
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c
https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18
https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value

Operators
https://www.w3schools.com/js/js_operators.asp
https://www.w3resource.com/javascript/operators/bitwise-operator.php


If-Else, Switch-case, Loops, 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
https://javascript.info/ifelse
https://javascript.info/switch
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
