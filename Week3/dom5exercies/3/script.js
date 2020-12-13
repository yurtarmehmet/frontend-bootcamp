/* Ornek 3:
  - toplam kelime sayisini h1 den sonraya yazdiralim.
*/

const bodyEl       = document.querySelector("body");
const paragraph    = document.querySelector("p");
const paragraphArr = paragraph.innerHTML.split(" ");
const wordsCount   = paragraphArr.length;


const wordsCountEl = document.createElement("span");
wordsCountEl.innerHTML = "There are " + wordsCount+ " words in text.";

bodyEl.insertBefore(wordsCountEl, paragraph);

// uygulama
// tahmini okuma suresini dakika cinsinden yazdiralim.



