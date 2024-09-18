let a=20;
let b=30;
let c=[];
console.log(typeof c);
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const suma = function(a,b){
    return a+b;
    //sumamos los dos numeros 
}
const resta = function(a,b){
    return a-b;
    //restamos los dos numeros
}
const multiplicacion = function(a,b){
    return a*b;
    //multiplicamos los dos numeros
}
const divicion = function(a,b){
    return a/b;
    //dividimos los dos numerosg
}
console.log(suma(a,b),resta(a,b),multiplicacion(a,b),divicion(a,b));

console.clear();
const matematicas =function(a,b){
    let resultado = [];
    let suma=a+b;
    let resta=a-b;
    let multiplicacion=a*b;
    let divicion=a/b;
    resultado.push(["el resultado de la suma es " ,suma])
    //push agrega un valor al campo vacio
    resultado.push(["el resultado de la resta es ",resta])
    resultado.push(["el resultado de la multiplicacion es",multiplicacion])
    resultado.push(["el resultado de la divicion es ",divicion])
    return resultado;
}
let resultado=matematicas(a,b);
console.log(resultado);
