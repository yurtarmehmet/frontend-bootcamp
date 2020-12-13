/* Ornek 5:
  - tum cumleleri ayri bir paragraf icinde.
*/

const paragraph    = document.querySelector("p");
let newParagraph   = "";

const sentences = paragraph.innerHTML.split('.');

sentences.forEach((sentence) => {
  const newSentence = sentence.trim();
  if(newSentence){
     newParagraph += "<p>"+sentence+".</p>"; 
  }
});

paragraph.innerHTML = newParagraph;

// uygulama, p tagiyla \n ile satir gecelim
