//3er preentrega 

  let usuario; 
  let usuarioStorage = sessionStorage.getItem("usuario"); 

  if (usuarioStorage) {
    usuario = usuarioStorage;
    alert(`Bienvenido/a nuevamente ${usuario}`);
  } else {
    usuario = prompt("Ingrese el usuario");
    sessionStorage.setItem("usuario", usuario); 
    alert(`Bienvenido/a por primera vez ${usuario}`); 
  }; 



    const productos = [
    {
      id: 1, 
      nombre: "Crema Antiarrugas",
      marca: "Eucerin",
      precio: 15000 
    },  
    {
      id: 2, 
      nombre: "Crema AntiEdad" ,
      marca: "Dermaglos" ,precio: 7500 
    },  
    {  
      id: 3,
      nombre: "Acido Hialuronico",
      marca: "ART FILLER",
      precio: 30000 
    },  
    {
      id: 4,
      nombre: "Botox",
      marca: "Dysport",
      precio: 100000 
    },  
  ];

  localStorage.setItem("carrito", JSON.stringify(productos));

  const agregar = (id) => {
    let producto = productos.find((item) => item.id === id);
    console.log(producto);
  };

  productos.forEach((item) => {
    let div = document.createElement("div");
    div.className = "bloquemain"; 
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <p>Marca: ${item.marca}</p>
      <p>Precio: ${item.precio}</p>
      <button id="boton${item.id}">Agregar</button> 
    `;
    document.body.append(div);

    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id)); 
  }); 

  



 


