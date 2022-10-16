//array de objetos//
const productos = [
    {id: 1, nombre: "dogchow adultos grandes", especie: "perros", precio: 7215, stock: "disponible" },
    {id: 2, nombre: "dogchow adultos pequeños", especie: "perros", precio: 5980, stock: "no disponible" },
    {id: 3, nombre: "dogchow cachorros", especie: "perros", precio: 7215, stock: "no disponible" },
    {id: 4, nombre: "catchow adultos de pescado", especie: "gatos", precio: 5080, stock: "disponible" },
    {id: 5, nombre: "catchow adultos de carne", especie: "gatos", precio: 5080, stock: "no disponible" },
    {id: 6, nombre: "catchow cachorros", especie: "gatos", precio: 5690, stock: "disponible" },
    {id: 7, nombre: "cama azul", especie: "perros", precio: 5200, stock: "disponible" },
    {id: 8, nombre: "collar modelo lucy", especie: "perros", precio: 1500, stock: "disponible" },
    {id: 9, nombre: "Sobrecito whiskas de pollo", especie: "gatos", precio: 140, stock: "no disponible" },
    {id: 10, nombre: "Sobrecito whiskas de carne", especie: "gatos", precio: 142, stock: "disponible" },
    {id: 11, nombre: "Sobrecito whiskas para cachorros, de pavo", especie: "gatos", precio: 143, stock: "no disponible" },
    {id: 12, nombre: "pedigree cachorros", especie: "perros", precio: 6000, stock: "disponible" },
];

//otra forma //
/*class Producto {
    constructor (id, nombre, especie, precio){
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.precio = precio;
    }
}

const productos =[
  new Producto  (1,"dogchow adultos grandes","perros", 7215) ,
  new Producto  (2,"dogchow adultos pequeños","perros", 5980),
  new Producto  (3,"dogchow cachorros","perros", 7215),
  new Producto  (4,"catchow adultos de pescado","gatos", 5080),
  new Producto  (5,"catchow adultos de carne", "gatos", 5080),
  new Producto  (6,"catchow cachorros", "gatos", 5690),
  new Producto  (7,"cama azul", "perros", 5200),
  new Producto  (8,"collar modelo lucy","perros", 1500),
  new Producto  (9,"Sobrecito whiskas de pollo", "gatos", 140),
  new Producto  (10,"Sobrecito whiskas de carne", "gatos", 140),
  new Producto  (11,"Sobrecito whiskas para cachorros, de pavo", "gatos",140),
  new Producto  (12,"pedigree cachorros", "perros",  6000),
];*/


//FILTRADO DE PRODUCTOS CON INTERACCION DEL USUARIO
for(let i = 0; i < 10; i++){
let entrada = parseInt(prompt("Ingrese el rango de precio maximo con la que esta a dispuest@ a pagar y le enseñaremos lo que tiene disponible"));
let resultado = productos.filter(item => item.precio <= entrada && item.stock === "disponible");
resultado.forEach(item => {
    let mensaje = `
      Id: ${item.id}
      Nombre: ${item.nombre}
      Especie: ${item.especie}
      Precio: $${item.precio}
    `;
    alert(mensaje);
})}

//CALCULAR EL COSTO TOTAL DEL CARRITO

let totalCarrito = productos.reduce ((acumulador, item) => acumulador + item.precio, 0);
console.log(totalCarrito);

//ORDENAR PRODUCTOS SEGUN EL PRECIO, DE MENOR A MAYOR
console.log(
productos.sort((a, b) => {
  if (a.precio > b.precio){
    return 1;  
  }
  if (a.precio < b.precio){
    return -1;
  }
  return 0;
})
);


