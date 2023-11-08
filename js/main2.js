let name = prompt ("Hola, bienvenido al mejor simulador para la eleccion de juegos para PlayStation 5, me dices tu nombre?")
alert("Hola " + name + " , te ayudare a seleccionar el juego que mas se adapte a tus nececidades, solo necesito un poco de informacion...");

let eleccion = prompt (name + ", quieres que busque por precio o por categoria?");
    eleccion = eleccion.toLowerCase();
let categoria;
let precio;

do {

    if (eleccion === "categoria") {
        alert("Escogiste buscar por Categoria")
        categoria = prompt(name + " cual es la categoria que mas te gusta?: aventura, combate, carreras, deportes, shooter, plataforma");
        categoria = categoria.toLowerCase();
    if (categoria === "aventura"){
        alert("El juego que necesitas es Assassin's Creed Mirage");
        break;
        }
    if (categoria === "combate") {         
        alert("El juego que necesitas es Mortal Kombat 1");
        break;
        }
    if (categoria === "carreras") {         
        alert("El juego que necesitas es Gran Turismo");
        break;
    }
    if (categoria === "deportes") {         
        alert("El juego que necesitas es EA FC 24");
        break;
        }
    if (categoria === "shooter") {         
        alert("El juego que necesitas es Call Of Duty Modern Warfare 3");
        break;
        }
    if (categoria === "plataforma") {         
        alert("El juego que necesitas es Sackboy");
        break;
        }
    else {
        alert("no he conseguido un juego para ti en mi base de datos");
        break;
    }    

    } 
    
    else if (eleccion === "precio") {
        precio = parseInt(prompt(name + " Cuanto dinero tienes para gastar con un maximo de 80$?"));
    
        if (precio < 10) {
            alert("Mejor ahorra un poco mas");
            break;
            }
            if (precio < 20 && precio > 10) {
                alert("Puedes comprar los titulos del año pasado");
                break;
        
            }
            if (precio < 40 && precio > 20) {
                alert("puedes comprar los titulos de este año");
                break;
        
            }
            if (precio < 80 && precio > 40) {
                alert("Puedes comprar los titulos que estan por salir al mercado");
                break;
        
            }
            if (precio > 80) {
                alert("Puedes comprar mas de un titulo");
                break;
        
            }

            else {
                alert("No puedo ayudarte en este momento, vuelve a intentarlo");
            }
    }
        
    
    }
while (continuar === "si") {
    alert("Gracias " + name + " espero haberte ayudado");
}

