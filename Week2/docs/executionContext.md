Global Execution Context
  - this: window
  - window: global object
  
Global Execution Context
   1. Global objecti olustur
   2. "this" diye bir obje olusturuyor
   3. variable ve functionlar icin memory adresi ayir
   4. variable "undefined" baslangic degerini veriyo(hoistin)
   
Function Execution Context
  1. "this" diye bir obje olusturuyor
  2. variable ve functionlar icin memory adresi ayir
  3. variablelra "undefined" baslangic degerini veriyo(hoistin)

```javascript
function first(){
	var name = "John";
  	console.log(name);
}

function second(){
	var name = "Mary";
  	console.log(name);
}

console.log(name) // undefined

var name = "Mehmet";

first();  // John
second(); // Mary
console.log(name); // Mehmet
```
