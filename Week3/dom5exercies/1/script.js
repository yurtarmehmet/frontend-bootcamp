
/* Ornek 1:
- 8 karakterden buyuk her kelimenin backgroundu yesil, text coloru beyaz olsun
*/
// paragrafi getir
let paragraph    = document.querySelector("p");
// paragrafin yeni hali ici bir degisken olustir
let newParagraph = [];

// paragrafin kelinelerini getir ve bosluk ile ayirarak bir arraye at.
let paragraphWords = paragraph.innerHTML.split(" ");

// kelimeler arrayinde forEach donerek 8 karakterden buyuk olanlara stil ekle,
// olmayanlara bir sey yapma
paragraphWords.forEach((word, wordIndex) => {
  if(word.length >= 8){
    let styledWord = "<span style='background:green;color:white'>"+word+"</span>";
    newParagraph.push(styledWord); 
  }else{
     newParagraph.push(word); 
  }
});


// bosluklar tekrar string olustur
newParagraph = newParagraph.join(" ");

// paragrafin icini son newParagraph ile doldur.
paragraph.innerHTML = newParagraph;

