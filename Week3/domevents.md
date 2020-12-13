///js

let clickCount = 0;

function showMessage(){
  const p = document.querySelector("p");
  clickCount += 1;
  p.innerHTML = "Clicked " + clickCount + " times";
  //console.log(event.type);
  //console.log(event.target);
  // console.log(event.preventDefault());
}

const btn = document.querySelector("button");

btn.onclick = function(){
  
};

btn.addEventListener("click", showMessage);

btn.addEventListener("click", function(){
  console.log("Clicked")
});


// event bubbling
// event capturing


function showLink(event){
  event.preventDefault();
}

// prevent default
const link = document.querySelector("a");

link.addEventListener("click", showLink);


/// PROPOGATION

const divEl = document.querySelector("div");
const buttonEl = document.querySelector("#secondButton");

divEl.addEventListener("click", function(e){
   console.log("DIVE TIKLANDI")
});

buttonEl.addEventListener("click", function(e){
   e.stopPropagation();
   console.log("BUTONA TIKLANDI")
});



const buttons = document.getElementsByClassName("my-button");
for(var i=0;i <buttons.length; i++){
    buttons[i].addEventListener("click", showMessage);
}


document.querySelector("#secondDiv").addEventListener("mouseover", function(e){
  //console.log(this);
  this.innerHTML = "Uzerine gelindi";
});


// keydown. scrolll



/// html

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>Click me!</button>
  <p>Clicked 0 times</p>
  <a href="https://www.google.com">Go to google</a>
  
  <div style="background:black;">
    <div style="padding:15px;color:#fff;font-size:42px;" id="secondDiv">
      Click me 
      <button id="secondButton" class="my-button">
        Click me, too.
      </button>
    </div>
    
    
  </div>
  
  
  <div>
    <button class="my-button">
        first
      </button>
      
        <button class="my-button">
        second
      </button>
  </div>
</body>
</html>
