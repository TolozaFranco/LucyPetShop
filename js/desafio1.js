let precio = parseInt (prompt("Por favor, ingrese el precio de su producto, se le agregara el I.V.A"));
let cuotas = parseInt (prompt("Ingresa la cantidad de cuotas en la que desea pagar:3, 6 o 12"));

dividir(precio, cuotas);
function preguntas () {
    let precio = parseInt (prompt("Por favor, ingrese el precio de su producto"));
    let cuotas = parseInt (prompt("Ingresa la cantidad de cuotas en la que desea pagar:3, 6 o 12"));

}

function dividir (numeroUno, numeroDos){
    if (numeroDos === 3 || numeroDos === 6 || numeroDos === 12){
        
        let numeros = (numeroUno/numeroDos)*1.21;
        let precioEnCuotasConIva = numeros.toFixed(2);
        alert("El precio a pagar según la cantidad de cuotas es de $" +  precioEnCuotasConIva);
    }else{
        alert("Esta cantidad de cuotas a pagar no esta permitida");
        
    }
}


