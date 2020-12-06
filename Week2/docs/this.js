// Rules
/* 
Implicit Binding
Explicit Binding
new Binding
Lexical Binding
window Binding
*/

// Implicit Binding
const user = {
  name: "John",
  age: 30,
  message: function(){
    console.log("Hello, I am " + this.name)
  },
  father: {
    name: "Joe",
    age: 65,
    message: function(){
      console.log("Hello, I am " + this.name)
    }
  }
}

user.message(); // hello, I am john
user.father.message(); // hello, I AM Joe, 

// Explicit Binding
function message(language0, language1, language2, language3){
  console.log("Languages", language0, language1);
  console.log("Hello, I am " + this.name)
  console.log("Hello, I am " + this.age + " years old.")
  cagiralacakCallback()
}

const user = {
  name: "John",
  age: 30
};


const languages = ["JavaScript", "Python", "asdasd", "asdasd"];
// call, apply, bind
// message.call(user, "JavaScript", "Python")
// message.call(user,  languages[0], languages[1], languages[2], languages[3]);
// message.apply(user, languages);

const sonraCagiralacakFonksiyon = message.bind(user, languages[0], languages[1], languages[2], languages[3],);
sonraCagiralacakFonksiyon();
sonraCagiralacakFonksiyon();
sonraCagiralacakFonksiyon();


const user = {
  name: "John",
  age: 30,
  languages: ["JavaScript", "Python"],
  message: function(){
    const hello = "Hello, my name is" + this.name;
    
    const langs = this.languages.map(function(language, languageIndex){
      console.log("THIS IS THIS", this);
        if( languageIndex === this.languages.length -1){
            return language + "."
        }
        return language;
    }.bind(this))
    console.log(hello + langs);
  }
};

user.message();
// hello = hello


// new binding
function User(name, age){
  
  this.name = name;
  this.age  = age;
}

const me = new User("Mehmet", 27);

// Lexical Binding
var greet = function(){
  
}

var greet = () => {}


const user = {
  name: "John",
  age: 30,
  languages: ["JavaScript", "Python"],
  message: function(){
    const hello = "Hello, my name is" + this.name;
    
    const langs = this.languages.map(function(language, languageIndex){
      console.log("THIS IS THIS", this);
        if( languageIndex === this.languages.length -1){
            return language + "."
        }
        return language;
    }.bind(this))
    console.log(hello + langs);
  }
};

const user = {
  name: "John",
  age: 30,
  languages: ["JavaScript", "Python"],
  message: function(){
    const hello = "Hello, my name is" + this.name;
    
    const langs = this.languages.map((language, languageIndex) => {
      console.log("THIS IS THIS", this);
        if( languageIndex === this.languages.length -1){
            return language + "."
        }
        return language;
    })
    console.log(hello + langs);
  }
};

user.message();





