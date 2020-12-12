// SELECTING ELEMENTS
// querySelector ya da getElementById, getElementsByClassName, 
// querySelector("#hello")
// querySelector(".hello") // CSS SELECTORS
// querySelector("*") 
// querySelector vs querySelectorAll

// Document.getElementsByTagNameNS()


// getElementById, getElementsByClassName
// getElementById("hello") === querySelector("p a")
// getElementsByClasName("hello") === querySelectorAll(".hello")

//console.log(document.getElementById("ornek"))
//console.log(document.querySelector("#ornek"));

//console.log(document.getElementsByClassName("kutu")); // HtmlCollection
//console.log(document.querySelector(".kutu"))
//document.getElementsByClassName("kutu")[0] === document.querySelector(".kutu")
//console.log(document.querySelectorAll(".kutu")); // Nodelist
//document.getElementsByClassName("kutu") === document.querySelectorAll(".kutu")

//document.querySelector("body");
//console.log(document.querySelectorAll("div")[0].parentElement);
//console.log(document.querySelectorAll("div")[0].hasAttibute("id"));


// CREATING ELEMENTS
// createElement
var myElement = document.createElement("div");
myElement.textContent = "Hello from JavaScript";
myElement.setAttribute("class", "my-element-class");
console.log(myElement);

// insert example
var body = document.querySelector("body");
body.appendChild(myElement);


var myOtherElement = "<div>Hello from other element</div>";
body.innerHTML += myOtherElement;
