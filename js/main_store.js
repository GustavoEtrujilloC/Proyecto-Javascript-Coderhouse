// Productos

class Juegos {
  constructor(nombre, precio, plataforma, img) {
      this.nombre = nombre;
      this.precio = precio;
      this.plataforma = plataforma;
      this.img = img;
  }
}

let fc24 = new Juegos("FC 24", "80 $", "Ps5", "fc24.webp");
let acm = new Juegos("Assassins Creed® Mirage", "70 $", "Ps5", "acm.webp");
let battlefield = new Juegos("Battlefield 2042", "60 $", "Ps5", "battlefield.webp");
let codmw = new Juegos("Call of Duty: Modern Warfare® III", "500 $", "Ps5", "callofduty3.webp");

const JUEGOS = [fc24, acm, battlefield, codmw];

JUEGOS.forEach(Juegos => {
  let div= document.createElement("div"); 
  div.className ="card";
  container_card.appendChild(div);
  
  let div1= document.createElement("div");
  div1.className = "imgBx";
  div1.innerHTML= `
                <img src="${Juegos.img}"></img>
  `;
  div.appendChild(div1);

  let div2= document.createElement("div");
  div2.className = "contentBx";
  div2.innerHTML= `<h2>${Juegos.nombre}</h2>
                    <h3><span>${Juegos.precio}</span></h3>
                    <a>Comprar</a>
                   
                    `;

  div.appendChild(div2);

  let div3= document.createElement("div");
  div3.className = "consola";
  div3.innerHTML= `<h3><span>${Juegos.plataforma}</span></h3>
                            `

  div2.appendChild(div3);


  
})


