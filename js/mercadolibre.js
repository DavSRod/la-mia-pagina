let mainContent = document.getElementById("mainContent")

let boxProducto = document.createElement("div")
mainContent.appendChild(boxProducto)
boxProducto.setAttribute("class", "box-producto")

let marcaProducto = document.createElement("label")
mainContent.appendChild(marcaProducto)
let nodoMarcaProducto = document.createTextNode("Mazda")
marcaProducto.appendChild(nodoMarcaProducto)

let imgProducto = document.createElement("img")
mainContent.appendChild(imgProducto)
imgProducto.setAttribute("src", "img/mazda.webp")