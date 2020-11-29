/// Question 1
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo());
// Question 1 simplified (hoisting)
function foo(){
    function bar() {
        return 3;
    }
    function bar() {
        return 8;
    }
    return bar();
}
alert(foo());
// 8


// Question 2
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
alert(foo());
// 3


// Question 3
alert(foo());
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
// 3

// Question 4
function foo(){
    return xyz();
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());
// undefined



// Function declaration bir variable tanimlamasi olmadan fonksiyon olusturur.
// function keywordu ile baslar
// hoisting vardir (yukariya tasima)
function bar(){
  return 3;
}
bar(); // 3 doner

// Function expression
// hoisting yoktur
// anonmys funcion
let a = function(){
  return 3;
}
// named expression function
let c = function bar(){
  return 3;
}


const productIds = ['12356', '13771', '212312'];
productIds.forEach(function showProductImage(productId){
  FETCH(productId).then((product)=> return product.image);
});



// IIFE
var myModule = (function() {
  var privateMethod = function(){
    console.log("bu private bir method");
  };
  var someMethod = function(){
    console.log("bu bir public method");
  }
  return {
    someMethod: someMethod
  }
}())


// closures
<button>Button 1</button>
<button>Button 2</button>
<button>Button 3</button>
<button>Button 4</button>
<button>Button 5</button>

function buttonsHandler(index){
  return function buttonClickEvent(evt){
    console.log(index);
  }
}

var buttons = document.querySelectorAll('button');
var i;
for(i=0; i< buttons.length; i+=1){
  buttons[i].onClick = buttonsHandler(i);
}

var closureButtonHandler = function (itemIndex) {
  return function doSomething(evt){
    console.log("Item Index");
  }
}
for(i=0; i< buttons.length; i+=1){
  buttons[i].onClick = closureButtonHandler(i);
}

/// function expressinlar hoist etmez
/// ancak var,let,const gibi tanimlamalar edebilirler
function foo(){
    return xyz();
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
/// simplifed
function foo(){
    var bar;
    return xyz();
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());

if(3>5){
  console.log("this is an if statement");
}
