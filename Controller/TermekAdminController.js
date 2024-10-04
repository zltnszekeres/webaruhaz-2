import { TERMEKLISTA } from "../adatok.js";
import TablazatView from "../View/AdminTermekekTablazat.js";
import DataService from "../Modell/TermekModell.js";

export default class Controller {



    constructor(){


        const szuloELEM= $(".tablazat")
        const dataservice = new DataService(TERMEKLISTA);
        new TablazatView(TERMEKLISTA, szuloELEM);
        $(window).on("torles",(event)=>{


            console.log(event.detail);

           dataservice.torles(event.detail);
            console.log(TERMEKLISTA);
            szuloELEM.empty();
            new TablazatView(TERMEKLISTA.szuloELEM);
        })
    }
}