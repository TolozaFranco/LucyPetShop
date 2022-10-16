//array de objetos//
const productosTienda = [
    {
      id: 1, 
      nombre: "dogchow adultos grandes", 
      especie: "perros", 
      precio: 7215, 
      stock: "disponible",
      img: "../Images/Productos/dogchowadulto21kg.png",
    },
    {
      id: 2, 
      nombre: "dogchow adultos pequeños", 
      especie: "perros", 
      precio: 5980, 
      stock: "disponible",
      img: "../Images/Productos/dogchowadultospequenos.png",
    },
    {
      id: 3, 
      nombre: "dogchow cachorros", 
      especie: "perros", 
      precio: 7215, 
      stock: "disponible",
      img: "../Images/Productos/dogchowcachorro3kg.png",
     },
    {
      id: 4, 
      nombre: "catchow adultos de pescado", 
      especie: "gatos", 
      precio: 5080, 
      stock: "disponible",
      img: "../Images/Productos/catchowadultos.png",
     },
    {
      id: 5, 
      nombre: "catchow adultos de carne", 
      especie: "gatos", 
      precio: 5080, 
      stock: "disponible",
      img: "../Images/Productos/catchowadultoscarne8kg.png",
     },
    {
      id: 6, 
      nombre: "catchow cachorros", 
      especie: "gatos", 
      precio: 5690, 
      stock: "disponible",
      img: "../Images/Productos/catchowgatitos8kg.png",
     },
    {
      id: 7, 
      nombre: "cama azul", 
      especie: "perros", 
      precio: 5200, 
      stock: "disponible",
      img: "../Images/Productos/camaperros.png", 
    },
    {
      id: 8, 
      nombre: "collar modelo lucy", 
      especie: "perros", 
      precio: 1500, 
      stock: "disponible", 
      img: "../Images/Productos/collar_modeloLucy.png",
    },
    {
      id: 9, 
      nombre: "Sobrecito whiskas de pollo", 
      especie: "gatos", 
      precio: 140, 
      stock: "disponible",
      img: "../Images/Productos/sobrecito_saborpollo.png",
    },
    {
      id: 10, 
      nombre: "Sobrecito whiskas de carne", 
      especie: "gatos", 
      precio: 142, 
      stock: "disponible", 
      img: "../Images/Productos/sobrecito_saborcarne.png",
    },
    {
      id: 11, 
      nombre: "Sobrecito whiskas para cachorros, de pavo", 
      especie: "gatos", 
      precio: 143, 
      stock: "disponible", 
      img: "../Images/Productos/sobrecito_saborpavo.png",
    },
    {
      id: 12, 
      nombre: "pedigree cachorros", 
      especie: "perros", 
      precio: 6000, 
      stock: "disponible", 
      img: "../Images/Productos/pedigree.png",
    },
];


let carrito = [];

const items =  document.querySelector("#items");
const carritoHtml = document.querySelector("#carrito");

//---PINTAR PRODUCTOS EN LA TIENDA ---
function renderizarProductos() {
  productosTienda.forEach((producto) => {
    let productoHtml = `
    <div class="col  justify-content-center">
    <div class="card shadow h-100">
        <img class="img-fluid d-block" src="${producto.img}" alt="">                    
        <div class="card-body h-100">
            <p class="card-tittle">${producto.nombre}</p>
            <p class="card-text">$${producto.precio}</p>
            
            <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
            
        </div>
    </div>
    </div>
    `;
    items.innerHTML += productoHtml;
  });
}
renderizarProductos();

//---AÑADIR PRODUCTOS AL CARRITO---

//---IDENTIFICAR PRODUCTOS ELEGIDOS ---

//---MOSTRAR INFORMACION DEL PRODUCTO---

//---SI EL PRODUCTO YA ESTA MODIFICO LA CANTIDAD---

//---CALCULAR EL TOTAL---

function agregarProductoAlCarrito(id) {
  let producto = productosTienda.find((producto) => producto.id === id);
  //console.log(producto.id);
  //console.log(producto.nombre);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if(productoEnCarrito){
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  } 
  
  renderizarCarrito();
  calcularTotal();

}

function renderizarCarrito(){
  let htmlCarrito = ""

  carrito.forEach((prod, id) =>{
    htmlCarrito+= `
    <div class="col  justify-content-center">
     <div class="card text-dark flex-row" style="width: 30rem:">
      <div>
       <img style="width: 100px;" src="${prod.img}" alt="card image cap">
      </div>
      <div class="card-body">
       <h5 class="card-tittle">${prod.nombre}</h5>
       <p>${prod.precio}$</p>
       <p>Cantidad: ${prod.cantidad}</p>
       <button class="btn btn-danger" onclick="eliminarProductoDelCarro(${id})">Eliminar</button>
      </div>
    </div>
    `

  })
  carritoHtml.innerHTML = htmlCarrito;

}

function calcularTotal(){
  let total = 0

  carrito.forEach((prod) => {
    total += prod.precio * prod.cantidad;
  });
  console.log(total)

  const t = document.getElementById("total")
  t.innerHTML = `<h5>$${total}</h5>`;
}


//---EDITAR CARRITO---
//Cuantos hay? Eliminar producto/s o vaciar carrito 

function eliminarProductoDelCarro (id){
  carrito[id].cantidad--;
  console.log(carrito[id]);
  if ( carrito [id].cantidad === 0) {
    carrito.splice(id,1);
  }
    renderizarCarrito();
    calcularTotal();
}
 
function vaciarCarro() {
  carrito = [];
  renderizarCarrito();
  calcularTotal();
}
const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarro);
