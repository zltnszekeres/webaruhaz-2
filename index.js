import { AUTOKLISTA} from "./adatok.js";
import { megjelenit } from "./adatkezeles.js";

window.addEventListener("load", init)

let MAIN;

let adatlapok;



function init() {
    MAIN = document.querySelector("main")
    

    adatlapok = document.querySelector("section.lapok")
     
    adatlapok.innerHTML = megjelenit(AUTOKLISTA);
    

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


