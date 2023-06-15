// VARIABLE GLOBAL
const INVENTARIO = [];

// MOLDE DE LOS OBJETOS 
class objeto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

// OBJETOS DEL JUEGO
const HERRAMIENTAS = new objeto('herramientas', 30)
const ARMADURA = new objeto('armadura', 25)
const COMIDA = new objeto('comida', 3)
const LIBROS = new objeto('libro encantado', 30)

// MONEDA DEL JUEGO
let esmeralda = 200;

// ELEMENTO
const elementoEsmeralda = document.querySelector("#esmeralda");
elementoEsmeralda.innerText = esmeralda;


// FUNCIONES

// PARA COMPRAR SI LA CANTIDAD DE ESMERALDAS DISPONIBLES LO PERMITE
function comprar(objeto){
    if(esmeralda - objeto.precio <= 0){
        alert('Lo siento, no puedes comprar ' + objeto.nombre);
    } else {
        INVENTARIO.push(objeto);
        esmeralda -= objeto.precio;
        console.log('Has comprado: ' + objeto.nombre + ' por ' + objeto.precio + ' esmeraldas.');
        actEsmeraldas();
    }
}

// PARA MOSTRAR LOS OBJETOS QUE SE HAN COMPRADO
function listInventario(){
    let mensaje = 'Inventario:\n';

    for (let i = 0; i < INVENTARIO.length; i++) {
    mensaje += 'Tienes: ' + INVENTARIO[i].nombre + ', por: ' + INVENTARIO[i].precio + ' esmeraldas cada una.\n';
    }

    alert(mensaje);
}

// PARA BUSCAR UN OBJETO ESPECIFICO DENTRO DEL INVENTARIO
function buscarEnInventario(){
    const busqueda = prompt('¿Qué objeto estás buscando?');
    const objetoEncontrado = INVENTARIO.find(objeto => objeto.nombre.toLowerCase() === busqueda.toLowerCase());
    if (objetoEncontrado){
        alert('Sí tienes ' + objetoEncontrado.nombre + ' en tu inventario.');
    } else {
        alert('No tienes ' + busqueda + ' en tu inventario.');
    }
}

// ACTUALIZA LA CANTIDAD DE ESMERALDAS DISPONIBLES
function actEsmeraldas(){
    elementoEsmeralda.innerText = esmeralda;
}