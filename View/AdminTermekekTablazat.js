import SorView from "./AdminSor.js";

export default class TablazatView {

    #list = [];




    constructor(list, szuloElem) {



        this.#list = list;
        szuloElem.append(`<"table class= table table-bordered table-striped">`);

        this.tablaElem = szuloElem.children("table");

        this.tablazatbaIr();

    }
    tablazatbaIr() {
        for (let index = 0; index < this.#list.length; index++) {
            const elem = this.#list[index];

            new SorView(elem, this.tablaElem);
        }
    }


}