const express = require('express');
const cors = require('cors');
const app = express();
const PUERTO = 5001;

// Middleware para JSON
app.use(express.json());

// Importar microservicios (rutas)
const clientesRoutes = require('./rutas/clientes');
const motosRoutes = require('./rutas/motos');
const carritoRoutes = require('./rutas/carrito');

// Registrar microservicios
app.use('/api/clientes', clientesRoutes);
app.use('/api/motos', motosRoutes);
app.use('/api/carrito', carritoRoutes);

// Iniciar servidor
app.listen(PUERTO, () => {
    console.log(`Servidor funcionando en puerto ${PUERTO}`);
});
