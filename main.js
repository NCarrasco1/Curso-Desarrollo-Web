const contProductos = document.querySelector(`#cont-productos`);
let carrito = []; 
let productos = []; 

const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
};

const cargarProductos = async () => {
  try {
    const response = await fetch('/data.json'); 
    if (!response.ok) {
      throw new Error('Error al cargar los productos');
    }
    productos = await response.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error('Error:', error);
  }
};


const mostrarProductos = (d) => {
  d.forEach(producto => {
    const cardProducto = document.createElement(`article`);
    cardProducto.setAttribute(`id`, `tarjeta-producto`); 
    cardProducto.innerHTML =`
        <img class = "prod-img" src ="${producto?.img}" alt="${producto?.nombre}" style="width: 200px"
        <div class = "producto-description">
          <h3 class = "producto-nombre">${producto?.nombre}</h3>
          <h3 class = "producto-marca">${producto?.marca}</h3>
          <h3 class = "producto-precio">$${producto?.precio}</h3>
          <button id = '${producto.id}' class = "btn-compra">AGREGAR AL CARRITO</button>
        </div> 
        `; 
    contProductos.appendChild(cardProducto); 
  })
  const btnComprar  = document.querySelectorAll('.btn-compra'); 
  btnComprar.forEach (el => {
      el.addEventListener('click', (e) => {
          agregarAlCarrito(e.target.id)
const productoAgregado = productos.find(prod => prod.id === parseInt(e.target.id));
      Swal.fire({
        title: 'Producto agregado al carrito',
        html: `
          <p>Nombre: ${productoAgregado.nombre}</p>
          <p>Marca: ${productoAgregado.marca}</p>
          <p>Precio: $${productoAgregado.precio}</p>
        `,
        icon: 'success',
      });
    });
  });
};

const mostrarCarrito = () => {
  console.log("Carrito de compras:");
  carrito.forEach(producto => {
    console.log(` 
    ID: ${producto.id}, 
    Nombre: ${producto.nombre}, 
    Marca: ${producto.marca}, 
    Precio: $${producto.precio}
    `);
  });
}; 

cargarProductos();
 

function agregarAlCarrito(id){
  let prodEncontrado = productos.find (prod => prod.id === parseInt(id));
  
  carrito.push(prodEncontrado);
  mostrarCarrito(); 

  localStorage.setItem("carrito", JSON.stringify(carrito)); 
}; 
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase(); 

  const productosFiltrados = productos.filter(producto => {
    const nombreProducto = producto.nombre.toLowerCase();
    return nombreProducto.includes(searchTerm);
  });
  
  if (productosFiltrados.length > 0) {
    const resultados = productosFiltrados.map(producto => producto.nombre).join('<br>');
    Swal.fire({
      title: 'Resultados de la búsqueda',
      html: resultados,
      icon: 'info',
    });

    mostrarProductos(productosFiltrados);
  } else {
    Swal.fire({
      title: 'No se encontraron resultados',
      text: 'No hay productos que coincidan con la búsqueda.',
      icon: 'error',
    });
  }
});





  





 


