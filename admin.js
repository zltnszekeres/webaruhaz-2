import { AUTOKLISTA, AUTOKULCS } from "./adatok.js";
import { mutatTablazat } from "./adatkezeles.js";
window.addEventListener("load", init)


let ARTICLE;

let tablazat;


function init() {

  ARTICLE = document.querySelector("article")


  tablazat = document.querySelector("section.tablazat")
  tablazat.innerHTML = mutatTablazat(AUTOKLISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", adatFelvetel);
  
  const inputAr = document.querySelector("#szurar");
  inputAr.addEventListener("mouseout", function () {
    let szurFeltetel = inputAr.value;
    szuresArSzerint(AUTOKLISTA, szurFeltetel);
  });










}
function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 1; index <= AUTOKLISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index );
    });
  }
}
function torlesFunkcio(index ) {
  AUTOKLISTA.splice(index , 1);

  tablazat.innerHTML = mutatTablazat(AUTOKLISTA);
  torlesGomb();
}
function adatFelvetel() {
  const ujmodell = {};
  const NevInputElem = document.querySelector("#mnev");
  ujmodell.modell = NevInputElem.value;




  const MéretarányInputElem = document.querySelector("#mmeret");
  ujmodell.méretarány = MéretarányInputElem.value;

  const ArInputElem = document.querySelector("#mar");
  ujmodell.ár = ArInputElem.value;
  console.log(ujmodell);
  AUTOKLISTA.push(ujmodell)
  tablazat.innerHTML = mutatTablazat(AUTOKLISTA);
  torlesGomb();
} 
function szuresNevSzerint(lista, szurFeltetel) {
  let kesz_lista = lista.filter(function (elem) {
    let elem_nev = elem.nev.toUpperCase();
    let keresett = szurFeltetel.toUpperCase();

    return elem_nev.includes(keresett);
  });

  console.log(kesz_lista);
} 


function szuresArSzerint(lista, keresett) {
  let kesz_lista = lista.filter(function (elem) {
    return eval(elem.ár + keresett);
  });

  console.log(kesz_lista);
}


