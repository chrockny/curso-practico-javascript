//const precioOriginal = 100;
//const descuento = 18;



function calcularPrecioConDescuento(precio,descuento){
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function PriceDiscount(){
    let priceValue = document.getElementById("InputPrice").value;
    let discountValue = document.getElementById("InputDiscount").value;
    
    let precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    let resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son : $"+precioConDescuento;
}
