//Código para un cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("Los lados de cuadrados miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro de un cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area de un cuadrado es:" + areaCuadrado + "cm2");
console.groupEnd();

//Código para un triangulo
console.group("triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("los lados del triángulo miden:" + ladoTriangulo1 + "cm,"+ ladoTriangulo2 + "cm,"+ baseTriangulo + "cm" );
const alturaTriangulo = 5.5 ;
console.log("La altura del triangulo es de:" + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es:" + areaTriangulo + "cm2");    

console.groupEnd();

//Código para un circulo
console.group("círculos");
const radioCirculo = 5;

// Radio
const radioCirculo = 4;
// Diámetro
const diameterCirculo = radioCirculo * 2;
// PI
const piCirculo = 3.1416;

//  Circunferencia
const circunferenciaCirculo = piCirculo * diameterCirculo;

// Área
const areaCirculo = (radioCirculo * radioCirculo) * piCirculo;
