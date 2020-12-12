/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person);
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)
    }.bind(this))
  }
};

numbers.multiply();


var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map((number, numberIndex) => {
        const result = number * this.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();

/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
  isValidName("Joe John")
  isValidName("Joe A");
*/
function isValidName(name){
  let result = true;
  if(typeof name !== 'string'){
    result = false;
  }
  
  let trimmedName = name.trim();
  
  let splittedByWhiteSpace = trimmedName.split(" ");
  for(var i=0; i < splittedByWhiteSpace.length; i++){
    var currentItem = splittedByWhiteSpace[i];
    if(currentItem.length < 2){
      result = false;
    }
  }
  
  console.log("NAME FOREACH", trimmedName.forEach);
  
  /// find  elemani
  splittedByWhiteSpace.forEach((char, charIndex) => {
      
  });
  
  let output = result ? "Its a valid name" : "NOT A VALID NAME";
  console.log(output);
}
isValidName("Joe John")
isValidName("Joe55")




/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){
    var result;
    if(dersSayisi && dersSuresi){
        var isDersSayisiValid = typeof dersSayisi === "string" || typeof dersSayisi === "number"; 
        var isDersSuresiValid = typeof dersSuresi === "string" || typeof dersSuresi === "number";
        if(isDersSayisiValid && isDersSuresiValid){
                 result =  dersSayisi * dersSuresi; 
        }else{
          console.log("Her iki parametre de sayi ya da string olmali");
        }
    }else{
          result = "En az iki parametre gecilmeli";
    }
  console.log(result);
}



katilimSaati(true, "3a");

function katilimSayisi(number: string)
// Java, c++ static typing
// JavaScript dynamic typing






  
  
  
  
 
numbers.multiply();
