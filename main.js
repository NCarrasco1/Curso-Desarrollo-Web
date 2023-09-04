//3er preentrega 
const contProductos = document.querySelector(`#cont-productos`);
console.log(productos);
let carrito = []; 

const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
}

const mostrarProductos = (d) => {
  d.forEach(producto => {
    const cardProducto = document.createElement(`article`);
    cardProducto.setAttribute(`id`, `tarjeta-producto`); 
    cardProducto.innerHTML =`
        <img class = "prod-img" src ="${producto?.img}" alt="${producto?.nombre}" style="width: 150px"
        <div class = "producto-description">
          <h3 class = "producto-nombre">${producto?.nombre}</h3>
          <h3 class = "producto-marca">${producto?.marca}</h3>
          <h3 class = "producto-precio">$${producto?.precio}</h3>
          <button id = '${producto.id}' class = "btn-compra">COMPRAR</button>
        </div> 
        `; 
    contProductos.appendChild(cardProducto); 
  })
  const btnComprar  = document.querySelectorAll('.btn-compra'); 
  btnComprar.forEach (el => {
      el.addEventListener('click', (e) => {
          agregarAlCarrito(e.target.id)
      });  
  })
}

const mostrarCarrito = () => {
  console.log("Carrito de compras:");
  carrito.forEach(producto => {
    console.log(`- ID: ${producto.id}, Nombre: ${producto.nombre}, Marca: ${producto.marca}, Precio: $${producto.precio}`);
  });
}

mostrarProductos(productos); 

function agregarAlCarrito(id){
  let prodEncontrado = productos.find (prod => prod.id === parseInt(id));
  
  carrito.push(prodEncontrado);
  mostrarCarrito(); 

  localStorage.setItem("carrito", JSON.stringify(carrito)); 
}; 



  





 


