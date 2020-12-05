To visualize everything: https://ui.dev/javascript-visualizer/

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

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


// Closure Ornegi
```javascript
var sayi = 0;

function ekleyici(x){
	return function icSayi(y){
    	return x + y;
    }
}

var ekle5  = ekleyici(5);
var ekle10 = ekleyici(10)(5);

sayi = sayi + ekle5(2)

```
