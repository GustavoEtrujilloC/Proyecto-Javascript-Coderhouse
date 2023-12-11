// Productos

class Juegos {
  constructor(nombre, precio, plataforma, img) {
      this.nombre = nombre;
      this.precio = Number(precio);
      this.plataforma = plataforma;
      this.img = img;
  }
}

let fc24 = new Juegos("FC 24", 80, "Ps5", "fc24.webp");
let acm = new Juegos("Assassins Creed® Mirage", 70, "Ps5", "acm.webp");
let battlefield = new Juegos("Battlefield 2042", 60, "Ps5", "battlefield.webp");
let codmw = new Juegos("Call of Duty: Modern Warfare® III", 500, "Ps5", "callofduty3.webp");

const JUEGOS = [fc24, acm, battlefield, codmw];

//Funcion para agregar los productos del carrito de compras al localStorage

function agregarAlCarrito(nombre, precio, plataforma, img) {
  const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
  const juego = new Juegos(nombre, precio, plataforma, img);
  CARRITO.push(juego);
  localStorage.setItem('carrito', JSON.stringify(CARRITO));
  mostrarCarrito();
}

//Funcion para agregar al carrito de compras los productos

function mostrarCarrito()  {
const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
const listaJuegos = document.getElementById('listaJuegos');
const totalJuegosSpan = document.getElementById('totalJuegos');
let totalJuegos = 0;

listaJuegos.innerHTML = '';

CARRITO.forEach(juego => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
                <span>${juego.nombre}</span>
                <span>${juego.precio}</span>
                <span>${juego.plataforma}</span>
                <span>${juego.img}</span>     
    `
    listaJuegos.appendChild(listItem);

    totalJuegos += parseFloat(juego.precio);
});

totalJuegosSpan.textContent = totalJuegos.toFixed(2);

};

//Funcion para vaciar carrito de comprar


const vaciarCarrito = document.getElementById('vaciar');
vaciarCarrito.addEventListener('click', function vaciarCarrito(){
  localStorage.removeItem('carrito');
  mostrarCarrito();
  });

//Funcion para generar tarjetas de productos

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
                    <a onclick="agregarAlCarrito('${Juegos.nombre}', ${Juegos.precio}, '${Juegos.plataforma}', '${Juegos.img}')">Comprar</a>
                    `;

  div.appendChild(div2);

  let div3= document.createElement("div");
  div3.className = "consola";
  div3.innerHTML= `<h3><span>${Juegos.plataforma}</span></h3>
                            `

  div2.appendChild(div3);


  
})



agregarAlCarrito();
mostrarCarrito();


