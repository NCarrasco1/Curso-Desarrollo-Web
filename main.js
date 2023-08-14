alert("!Bienvenido, usted ha ingresado a la pagina de la Dra. Palazzo!")
alert("Le vamos a solicitar unos datos para poder procesar su consulta")

function saludarPaciente () {
    let nombre = prompt("Por favor, ingrese su nombre");
    alert (`El nombre ingresado es ${nombre}`); 
}
saludarPaciente(); 

function Datos (edad, peso, altura) {
    this.edad = edad;                       
    this.peso = peso;
    this.altura = altura;
} 

const edad = parseInt(prompt("Ingrese su edad"));
const peso = parseFloat(prompt("Ingrese su peso en kg"));
const altura = parseFloat(prompt("Ingrese su altura"));

const Datos1 = new Datos(edad, peso, altura);

const mensaje = `Edad: ${Datos1.edad} años\nPeso: ${Datos1.peso} kg\nAltura: ${Datos1.altura} metros`;
alert(mensaje);
