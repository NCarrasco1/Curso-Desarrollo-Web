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

const patologias = [
    {id: 1, nombre: "Acne" },
    {id: 2, nombre: "Psoriasis"},
    {id: 3, nombre: "Urticaria"},
    {id: 4, nombre: "Sequedad extrema"},
    {id: 5, nombre: "Lunares"},
    {id: 6, nombre: "Alopecia"},
    {id: 7, nombre: "Foliculitis"},
];

let nombre = prompt("Ingrese el nombre de la patologia a consultar").toLowerCase();

let patologia = patologias.find(item => item.nombre.toLowerCase() === nombre);

if (patologia) {
    let mensaje = `
    ID: ${patologia.id}
    Nombre: ${patologia.nombre}
    `;
    alert(mensaje);
} else {
    alert("La patologia mencionada no se encuentra en la lista");
} 

alert ("Excelente, su consulta ya fue procesada!");
alert("Por favor ingrese su correo para enviarle el dia de su turno");

function ingresarCorreo() {
    let correo = prompt("Ingrese su correo electrónico");
    return correo;
}

let correo = ingresarCorreo();

alert(`Correo electrónico ingresado: ${correo}`);
alert("Se le enviara al correo ingresado el dia y la hora de su turno. Muchas gracias.")

