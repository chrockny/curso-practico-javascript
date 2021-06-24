//Codigo cuadrado
console.group('Cuadrados');
//const ladoCuadrado = 5;

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log(`Los lados del cuadrado miden : ${ladoCuadrado} cm`);

//const perimetroCuadrado = ladoCuadrado * 4;

//console.log(`El perímetro del cuadrado es : ${perimetroCuadrado} cm`);

function areaCuadrado(lado){
    return lado * lado
}
//console.log(`El área del cuadrado es : ${areaCuadrado} cm²`);

console.groupEnd();

console.group('Triangulos')
//Codigo triangulo
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);

//const alturaTriangulo = 5.5;
//console.log(`La altura del triangulo es de: ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
};
//console.log(`El perímetro del triangulo es: ${perimetroTriangulo} cm`);

function areaTriangulo(base,altura){
    return (base * altura) /2;
}
//console.log(`El area del triangulo es : ${areaTriangulo} cm²`)

console.groupEnd();

//Codigo circulo
console.group('Circulos');

//Radio 
//const radioCirculo = 4;
//console.log(`El radio del circulo es : ${radioCirculo} cm`);
//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log(`El diametro del circulo es : ${diametroCirculo} cm`)
//Circunferencia
const PI = Math.PI;
//console.log(`Pi es : ${PI}`);

//Perímetro
function perimetroCirculo(radio){
    let diametro = diametroCirculo(radio) 
    return diametro * PI;
}
//console.log(`El perímetro del circulo es : ${perimetroCirculo} cm`);
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log(`El radio del circulo es : ${areaCirculo} cm²`);

console.groupEnd();

function calcularPerimetroCuadrado(){
    const value = document.getElementById('InputCuadrado').value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const value = document.getElementById('InputCuadrado').value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
    
}