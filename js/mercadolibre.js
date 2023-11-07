let boxProductos = document.getElementById("boxProductos")

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
imagenProducto.setAttribute("src", "img/mazda.png")
imagenProducto.setAttribute("class", "imagen-producto")

/* Contenedor para la informacion */
let infoProducto = document.createElement("div")
boxProducto.appendChild(infoProducto)
infoProducto.setAttribute("class", "box-info-producto")

let marcaProducto = document.createElement("label")
infoProducto.appendChild(marcaProducto)
let nodoMarcaProducto = document.createTextNode("Mazda CX-5 2.5 Grand Touring")
marcaProducto.appendChild(nodoMarcaProducto)

/* Marca */
/* Cargar el modelo */
/* Precio */
/* Año */
/* Kilometraje */
/* Ciudad de procedencia */