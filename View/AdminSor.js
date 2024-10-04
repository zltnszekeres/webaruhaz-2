export default class SorView {
    #adat = {};
    #index;

    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.#index = index;
        this.tablaElem = szuloElem;



        this.#sor();

        this.sorElem = this.tablaElem.children("tr:last-child");

        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.torolElem = this.sorElem.children("td").children(".megse");



        this.keszElem.on("click", () => { console.log(this) });
        this.torolElem.on("click", () => {
            this.#esemenyTrigger("torles");

        })

    }
    #sor() {

        let txt = '';
        txt += "<tr>";

        for (const key in this.#adat) {

            txt += `<td>${this.#adat[key]}</td> `

        }


        txt += `<td><span class="kesz">++</span><td><span class="torol">--</span></td>`

        txt += "<tr>";

        this.tablaElem.append(txt);
    }

    #esemenyTrigger(torles){

      const esemenyem =  new CustomEvent(torles,{detail:this.#index});
      window.dispatchEvent(torles);

    }





}










