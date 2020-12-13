/* Ornek 4:
  - Yazida yer alan soru isaretlerini 🤔, unlem isaretlerini ise 😲 ile degistirelim.
*/

const paragraph = document.querySelector("p");


/* const replacements = [
  {from: "!", to: "😲"},
  {from: "?", to: "🤔"},
  {from: " ", to: "😛"},
  {from: "p", to: "😂"}
]

replacements.forEach((replacement)=> {
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(replacement.from, replacement.to)
}); */

//paragraph.innerHTML = paragraph.innerHTML.replaceAll("?", "🤔")
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, "🤔")

paragraph.innerHTML = paragraph.innerHTML.replace(/\!/g, "😲")
