/* Ornek 2:
- Paragrafin sonuna kaynak linkini ekleyelim.
*/
const bodyEl = document.querySelector("body");
const link = document.createElement("a");
link.textContent = "Yazi kaynagi";
link.setAttribute("href", "http://google.com");
bodyEl.appendChild(link)
