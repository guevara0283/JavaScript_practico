//funcion console.log

function calcularPrecioConDescuento(precio, descuento)
{ 
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioCondescuento = precio * porcentajePrecioConDescuento / 100;
    return precioCondescuento;   
}    

//funciones para mostrar en HTML

function onclickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}
