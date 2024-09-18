let nombre = "Jose";
var apellido = "Paez";
const PI = 3.1416;

console.log(window); 
console.log('inicial', nombre);
console.log('inicial', apellido);

{
    let nombre = "otro nombre";
    var apellido = "otroapellido";
    console.log('bloque', nombre);
    console.log('bloque', apellido);
}

console.log('Fuera del bloque', nombre); 
console.log('Fuera del bloque', apellido);

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, itaque? Sit officia, nulla quod nam, ad molestias mollitia iste tenetur quia, dolorum fuga repellendus totam incidunt asperiores dolor animi reprehenderit!";
console.log(cadena.length);
console.log(cadena.toUpperCase());
console.log(cadena.includes('amet'));

let arreglo = cadena.split('');
console.log(arreglo);
console.log(arreglo.length)
console.clear();
let lunes,martes,miercoles;
lunes="lunes";
martes="martes";
miercoles="miercoles";
let lista =`<ul>
<li>${lunes}</li>
<li>${martes}</li>
<li>${miercoles}</li>
<li>jueves</li>
<li>viernes</li>
<li>sabado</li>
<li>domingo</li>
</ul>`;
console.log(lista)
console.clear();
let a=2;
let falso=false;
let b=new Number(25);
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof nombre);
console.log(typeof falso);
let resultado=suma(8,20);
console.log(resultados);
function suma(a,b){
	return a+b;
};
suma(8,20);

const resta=function(a,b){
	return a-b;
}
let restamos =resta(9,25);