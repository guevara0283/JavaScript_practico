//Código para un cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados de cuadrados miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro de un cuadrado es:" + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area de un cuadrado es:" + areaCuadrado + "cmˆ2");

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();





//Código para un triangulo
console.group("triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("los lados del triángulo miden:" + ladoTriangulo1 + "cm,"+ ladoTriangulo2 + "cm,"+ baseTriangulo + "cm" );
//const alturaTriangulo = 5.5 ;
//console.log("La altura del triangulo es de:" + alturaTriangulo + "cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es:" + areaTriangulo + "cmˆ2");   

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();






//Código para un circulo
console.group("circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es:" + radioCirculo + "cm");

// Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del circulo es:" + diametroCirculo + "cm");
function diametroCirculo(radio) {
   return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El PI del circulo es:" + PI);

// Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es:" + perimetroCirculo + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del circulo es:" + areaCirculo + "cmˆ2");
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//configurando el html

//funciones para el cuadrado

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//funciones para el Triangulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById('inputTriangulo1');
    const inputLado2 = document.getElementById('inputTriangulo2');
    const inputBase = document.getElementById('inputTriangulo3');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

    alert('El perimetro es: ' + perimetro + 'cm');
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('inputTriangulo3');
    const inputAltura = document.getElementById('inputTriangulo4');
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);

    alert('El área es: ' + area + 'cm^2');
}

//funciones para el circulo
function calcularPerimetroCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}