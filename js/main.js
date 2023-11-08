const NAME = prompt ("Hola, bienvenido al mejor simulador para la eleccion de juegos para PlayStation 5, me dices tu nombre?")
const INICIALIZACION = prompt (NAME + ", tienes un codigo de descuento para tu compra? Si / No").toLowerCase();

let juego;
let presupuesto;
let precio;
let descuento;
let precioTotal;
let codigoPromocional;


do {
    
    if( INICIALIZACION === "si"){
        juego = parseInt(prompt("Estos son los juegos en donde puedes incluir tu descuento, por favor selecciona alguno eligiendo el numero respectivo: 1) 'FC 24', 80$, 2) 'Call Of Duty MW 3' 75$, 3) 'Spiderman 2 70$'"));
        switch (juego) {
            case 1:
                juego = "'FC 24' 80$"
                alert("Escogiste " + juego)
                precio = 80;
                descuento = 0;
                codigoPromocional = prompt("Escribe tu codigo promocional: ");
                codigoPromocional = codigoPromocional.toUpperCase();
                        switch(codigoPromocional) {
                        case "GTDIGITAL25":
                          descuento = 25;
                          alert("Codigo de descuento aplicado: 25$")
                          break; 
                        case "GTDIGITAL20" :
                          descuento = 20;
                          alert("Codigo de descuento aplicado: 20$")
                          break;
                        case "GTDIGITAL15" :
                          descuento = 15;
                          alert("Codigo de descuento aplicado: 15$")
                          break; 
                        case "GTDIGITAL10" :
                          descuento = 10;
                          alert("Codigo de descuento aplicado: 10$")
                          break;
                        case "GTDIGITAL5" :
                            descuento = 5;
                            alert("Codigo de descuento aplicado: 10$")
                            break;
                            default: 
                            alert("Tu codigo promocional ha caducado o no existe");
                        }
                break;
            case 2:
                juego = "'Call Of Duty MW 3' 75$"
                alert("Escogiste " + juego)
                precio = 75;
                descuento = 0;
                codigoPromocional = prompt("Escribe tu codigo promocional: ");
                codigoPromocional = codigoPromocional.toUpperCase();
                        switch(codigoPromocional) {
                        case "GTDIGITAL25":
                          descuento = 25;
                          alert("Codigo de descuento aplicado: 25$")
                          break; 
                        case "GTDIGITAL20" :
                          descuento = 20;
                          alert("Codigo de descuento aplicado: 20$")
                          break;
                        case "GTDIGITAL15" :
                          descuento = 15;
                          alert("Codigo de descuento aplicado: 15$")
                          break; 
                        case "GTDIGITAL10" :
                          descuento = 10;
                          alert("Codigo de descuento aplicado: 10$")
                          break;
                        case "GTDIGITAL5" :
                          descuento = 5;
                          alert("Codigo de descuento aplicado: 10$")
                          break;
                        default: 
                        alert("Tu codigo promocional ha caducado o no existe");
                        
                        }
                break;
            case 3:
                juego = "'Spiderman 2' 70$"
                alert("Escogiste " + juego)
                precio = 70;
                descuento = 0;
                codigoPromocional = prompt("Escribe tu codigo promocional: ");
                codigoPromocional = codigoPromocional.toUpperCase();
                        switch(codigoPromocional) {
                        case "GTDIGITAL25":
                          descuento = 25;
                          alert("Codigo de descuento aplicado: 25$")
                          break; 
                        case "GTDIGITAL20" :
                          descuento = 20;
                          alert("Codigo de descuento aplicado: 20$")
                          break;
                        case "GTDIGITAL15" :
                          descuento = 15;
                          alert("Codigo de descuento aplicado: 15$")
                          break; 
                        case "GTDIGITAL10" :
                          descuento = 10;
                          alert("Codigo de descuento aplicado: 10$")
                          break;
                        case "GTDIGITAL5" :
                          descuento = 5;
                          alert("Codigo de descuento aplicado: 10$")
                          break;
                        default: 
                        alert("Tu codigo promocional ha caducado o no existe");
                        
                        }
                break;

            default: 
            alert("Lo lamento, no escogiste una opcion correcta, vuelve a intentarlo")       
        }
    precioTotal = precio - descuento;
    alert("El precio total para " + juego + " con el descuento aplicado es de " + precioTotal + " $");
    }

    else if (INICIALIZACION === "no") {
        alert("Suscribete a nuestro Newsletter y te enviaremos un codigo");
        break;
    }

    else {
    alert("Lo siento, no te he entendido, suscribete a nuestro Newsletter y te enviaremos un codigo");
    break;
    }
    
}

while (INICIALIZACION === "no") {
    alert("Muchas gracias por visitarnos, te esperamos nuevamente.")
    

}


