export function megjelenit(lista) {
  let txt = "";



  txt += `<div class = "container">`;
  for (let index = 0; index < lista.length; index++) {

    txt += `<div class= "adatlap">`;

    for (const kulcs in lista[index]) {

      if (kulcs == "kep") {
        
        txt += `<img src='${lista[index].kep}' alt="">`;
      } else {
        
        txt += `<p> ${lista[index][kulcs]} </p>`;
      }

    }
    txt += "<button>kiválasztom</button>"
    txt += `</div>`;
  }
  txt += `</div>`;

  return txt;
}
export function mutatTablazat(lista ) {
 
  let txt ="";
  txt += `<div class = "containert">`;
  txt += `<table class="table table-hover">`;
  
  txt += `<th> Modell</th>`;
  
  txt += `<th> Méretarány</th>`;
  txt += `<th> Ár</th>`;
  
  for (let index = 0; index < lista.length; index++) {
    
    txt += `<tr>`;
    for (const kulcs in lista[index]) {

      if (kulcs != "kep") {
        

        txt += `<td><p> ${lista[index][kulcs]}<p></td>`;
      }

      
    }
    txt += `</tr>`;
    
   
  }
  txt += "</table></div>";
   return txt;
}