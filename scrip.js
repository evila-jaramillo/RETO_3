// Carrito virtual


function mostrarCarrito(){
  const carritoDiv = document.getElementById("carrito");
  carritoDiv.style.display = "block";
  carritoDiv.innerHTML = "<h3>Carrito</h3>";

  let total = 0;
  carrito.forEach(item => {
    carritoDiv.innerHTML += `<p>${item.nombre} - $${item.precio}</p>`;
    total += item.precio;
  });
  carritoDiv.innerHTML += `<hr><p><strong>Total: $${total}</strong></p>`;
}

// Menú que muestra alertas o secciones
function mostrarSeccion(seccion){
  alert(`Navegando a la sección: ${seccion}`);
}

// Mostrar/ocultar redes
function mostrarRedes(){
  let seccion = document.getElementById("contacto");
  if(seccion.style.display === "block"){
    seccion.style.display = "none";
  } else {
    seccion.style.display = "block";
  }
}

let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    const contador = document.getElementById("contador");

    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = producto.nombre + " - $" + producto.precio;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.onclick = () => eliminarProducto(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });

    totalElemento.textContent = total;

    // 🔥 ACTUALIZA EL CONTADOR
    contador.textContent = carrito.length;
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function realizarPago() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    alert("Compra realizada 🎉 Total: $" + total);

    carrito = [];
    total = 0;
    actualizarCarrito();
}
