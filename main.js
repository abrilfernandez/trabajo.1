alert ("bienvenidos a la escuela nuestra senora de lourdes"); 
let nota1;
let nota2;
let promedio;
do {nota1=parseFloat(prompt("ingresa la primer nota"));
nota2=parseFloat(prompt("ingresa la segunda nota"));
let resultado=(nota1+nota2)/2;
if (resultado >= 7) {
   alert("Su promedio es de " + resultado + ". Aprobado")}
   else if (resultado <= 6) { 
   alert ("Su promedio es de " + resultado + ". Desaprobado.")}
   else { 
   alert("Por favor ingresar solo números")
   }}
while(isNaN(resultado), "nota1" === "nota2"){


   
}
function resultado (){
alert("nota1"+"nota2") 
return resultado
}



let alumno="juan"
let materia="lengua"
let nota=7

const alumno1= {alumno:"juan", materia: "lengua", nota:7
}
console.log(alumno1.alumno)
console.log(alumno1.materia)
console.log(alumno1.nota)
 



const materias = [{ id: 1, materia: "lengua" },
                  { id: 2, materia: "matematicas"},
                  { id: 3, materia: "ingles"}];

for (const materia of materia) {
   console.log(materia.id);
   console.log(materia.materia)
}



const final= [ 5,8,10,25,15 ];
const res= final.reduce( (acc,item ) =>{
   return acc= acc+item;
 }); 
console.log(res)