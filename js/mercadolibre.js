class Automovil {
    constructor (marca, modelo, precio, anyo, kilometros, ciudad, imagen)
    {
        this.imagen = imagen
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.anyo = anyo
        this.kilometros = kilometros
        this.ciudad = ciudad
    }
}

let auto1 = new Automovil("Mazda", "CX-5 2.5 Grand Touring", "$125.000.000", 2022, "38.600 Km", "Usaquén - Bogotá D.C.", "img/mazda.png")
let auto2 = new Automovil("Toyota", "Prado 3.0 Tx-l", "$275.000.000", 2020, "72.000 Km", "Medellín - Antioquia", "img/toyota.jpg")
let auto3 = new Automovil("Mazda", "3 2.0 Grand Touring", "$74.500.000", 2018, "38.600 Km", "Puente Aranda - Bogotá D.C.", "img/mazda3.jpg")
let auto4 = new Automovil("Toyota", "Fortuner 4.0 Sr5", "$107.000.000", 2011, "169.000 Km", "Usaquén - Bogotá D.C.", "img/toyotaFortuner.jpg")

let boxProductos = document.getElementById("boxProductos")
let inputBusqueda = document.getElementById("inputBusqueda").value

window.addEventListener("keydown", (event) => {
    if (event.key =="Enter") {
        let inputBusquedaAux = inputBusqueda.toString()
        if(inputBusquedaAux == "mazda") {
            cargarAutomovil(auto1)
            cargarAutomovil(auto3)
        }
    }
})

cargarAutomovil(auto1)
cargarAutomovil(auto2)
cargarAutomovil(auto3)
cargarAutomovil(auto4)

function cargarAutomovil(auto) {
    /* Contenedor para productos inividuales */
    let boxProducto = document.createElement("div")
    boxProductos.appendChild(boxProducto)
    boxProducto.setAttribute("class", "box-producto")

    /* Contenedor para la imagen */
    let boxImagen = document.createElement("div")
    boxProducto.appendChild(boxImagen)
    boxImagen.setAttribute("class", "box-imagen")
    let imagenProducto = document.createElement("img")
    boxImagen.appendChild(imagenProducto)
    imagenProducto.setAttribute("src", auto.imagen)
    imagenProducto.setAttribute("class", "imagen-producto")

    /* Contenedor para la informacion */
    let infoProducto = document.createElement("div")
    boxProducto.appendChild(infoProducto)
    infoProducto.setAttribute("class", "box-info-producto")

    let marcaProducto = document.createElement("label")
    infoProducto.appendChild(marcaProducto)
    let nodoMarcaProducto = document.createTextNode(auto.marca + " ")
    marcaProducto.appendChild(nodoMarcaProducto)
    marcaProducto.setAttribute("class", "marca-producto")

    let modeloProducto = document.createElement("label")
    infoProducto.appendChild(modeloProducto)
    let nodoModeloProducto = document.createTextNode(auto.modelo)
    modeloProducto.appendChild(nodoModeloProducto)
    modeloProducto.setAttribute("class", "modelo-producto")

    let precioProducto = document.createElement("label")
    infoProducto.appendChild(precioProducto)
    let nodoPrecioProducto = document.createTextNode(auto.precio)
    precioProducto.appendChild(nodoPrecioProducto)
    precioProducto.setAttribute("class", "precio-producto")

    let yearProducto = document.createElement("label")
    infoProducto.appendChild(yearProducto)
    let nodoYearProducto = document.createTextNode(auto.anyo + " · ")
    yearProducto.appendChild(nodoYearProducto)
    yearProducto.setAttribute("class", "year-producto")

    let kilometraje = document.createElement("label")
    infoProducto.appendChild(kilometraje)
    let nodoKilometraje = document.createTextNode(auto.kilometros + " · ")
    kilometraje.appendChild(nodoKilometraje)
    kilometraje.setAttribute("class", "kilometraje")

    let ciudad = document.createElement("label")
    infoProducto.appendChild(ciudad)
    let nodoCiudad = document.createTextNode(auto.ciudad)
    ciudad.appendChild(nodoCiudad)
    ciudad.setAttribute("class", "ciudad")
}

