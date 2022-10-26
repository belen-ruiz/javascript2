const prodNoEncontrado = `No se han encontrado productos con esas caracteristicas`
const opIncorrecta = `Ingrese opción correcta`

let newArray = [];
let carrito = [];

//class constructora
    //datos producto 
class Producto{
    constructor(id, cat, talle, color, gen, precio){
        this.id = id,
        this.cat = cat,
        this.talle = talle,
        this.color = color,
        this.gen = gen,
        this.precio = precio
    }
    mostrarDatos(){
        console.log(`Caracteristicas de éste/a ${this.cat}:
                Articulo #${this.id}
                Talle: ${this.talle}
                Color: ${this.color}
                Género: ${this.gen}
                Precio: $${this.precio}`)
    }
    sumarIva(){
        this.precioIva = this.precio * 1.21
    }
}

    //catalogo  
const producto1 = new Producto (1, "Remera London", "S", "Rojo", "Unisex", 990 )
const producto2 = new Producto (2, "Remera Paris", "M", "Verde", "Niño", 1299 )
const producto3 = new Producto (3, "Pantalon Buenos Aires", "XL", "Verde", "Niño", 1399 )
const producto4 = new Producto (4, "Pantalon Berlin", "M", "Rojo", "Niña", 1499 )
const producto5 = new Producto (5, "Buzo Amsterdam", "L", "Violeta", "Niña", 2999 )
const producto6 = new Producto (6, "Buzo Rome", "S", "Violeta", "Unisex", 2599 )

    //deposito
const deposito = [producto1, producto2, producto3, producto4, producto5, producto6]


//FUNCIONES

function verCatalogo(array){
    array.forEach((producto) => {
        producto.mostrarDatos()
    })    
}

function filtrar(array){
    let opcion = parseInt(prompt(`Filtrar por:
    1 - Categoria
    2 - Color
    3 - Género`)) 
    
    switch(opcion){
        case 1:
            filtrarCat(array)
        break
        case 2:
            filtrarColor(array)
        break
        case 3:
            filtrarGen(array)
        break
        default: alert(`${opIncorrecta}`)
        break
    }
}

function filtrarCat(array){
    let prodBuscado = prompt ("Ingrese el producto que desea buscar")
    let busqueda = array.filter((producto)=>producto.cat.toUpperCase().includes(prodBuscado.toUpperCase()))

    if(busqueda == 0){
        alert(`${prodNoEncontrado}`)
    }
    else{
        verCatalogo(busqueda)
    }
}

function filtrarColor(array){
    let colorBuscado = prompt ("Ingrese el color que desea buscar")
    let busqueda = array.filter((producto)=>producto.color.toLowerCase() == colorBuscado.toLowerCase())

    if(busqueda == 0){
        alert(`${prodNoEncontrado}`)
    }
    else{
        verCatalogo(busqueda)
    }
}

function filtrarGen(array){
    let genBuscado = parseInt(prompt (`Seleccione opción: 
    Niños - Niñas - Unisex`))
    let busqueda = array.filter((producto)=>producto.gen.toLowerCase() == genBuscado.toLowerCase())

    if(busqueda == 0){
        alert(`${prodNoEncontrado}`)
    }
    else{
        verCatalogo(busqueda)
    }
}

function ordenar(array){
    let opcion = parseInt(prompt(`Ordenar:
    1 - Alfabeticamente
    2 - Por precio (menor a mayor)
    3 - Por precio (mayor a menor)`)) 
    
    switch(opcion){
        case 1:
            ordenarAz(array)
        break
        case 2:
            ordenarPrecioMenorMayor(array)
        break
        case 3:
            ordenarPrecioMayorMenor(array)
        break
        default: alert(`${opIncorrecta}`)
        break
    }
}

function ordenarAz(array){
    console.log(array.sort((a, b) => {
      if(a.cat == b.cat) {
        return 0; 
      }
      if(a.cat < b.cat) {
        return -1;
      }
      return 1;
    }))
}

function ordenarPrecioMayorMenor(array){
    console.log(array.sort((a,b) => (b.precio - a.precio)))
}

function ordenarPrecioMenorMayor(array){
    console.log(array.sort((x,y)=>(x.precio - y.precio)))
}

function pedirId(array) {
    let idProducto = parseInt(prompt(`Ingrese ID del producto a agregar`))
    let idAgregado = array.filter(producto => producto.id == idProducto)
    carrito.push(idAgregado)
}

//menu
function preguntaOpcion(){
    let opcion = prompt(`Seleccione la opción deseada:
    1 - Ver Catalogo
    2 - Filtrar 
    3 - Ordenar
    4 - Agregar productos al carrito
    0 - Ver Carrito
    "ESC" - Para salir`)

    menu(opcion)
}

function menu (opcionSelecc){
    switch (opcionSelecc){
        case "ESC":
            salir = true
            alert(`Ha salido del menú`)
            break
            case "1": verCatalogo(deposito)
                break
                case "2": filtrar(deposito)
                    break
                    case "3": ordenar(deposito)
                        break
                        case "4": pedirId(deposito)
                        break
                        case "0": 
                        console.log (carrito)
                        default:
                            alert(`${opIncorrecta}`)
                        break;
    }
}
salir = false
while(salir !=true){
    preguntaOpcion()
}





