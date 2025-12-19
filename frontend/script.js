let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    renderCarrito();
}

function renderCarrito() {
    const lista = document.getElementById('listaCarrito');
    lista.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nombre} - $${item.precio}
            <button onclick="eliminar(${index})">❌</button>
        `;
        lista.appendChild(li);
    });

    document.getElementById('total').textContent = total;
}

function eliminar(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    renderCarrito();
}

function toggleCarrito() {
    document.getElementById('carrito').classList.toggle('oculto');
}

function finalizarCompra() {
    alert('Compra realizada correctamente ✅');
    carrito = [];
    total = 0;
    renderCarrito();
}
