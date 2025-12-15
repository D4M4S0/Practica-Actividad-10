const express = require('express');
const app = express();
const PUERTO = 5001;

// Middleware para JSON
app.use(express.json());

// Importar microservicios (rutas)
const clientesRoutes = require('./rutas/clientes');
const motosRoutes = require('./rutas/motos');

// Registrar microservicios
app.use('/api/clientes', clientesRoutes);
app.use('/api/motos', motosRoutes);

// Iniciar servidor
app.listen(PUERTO, () => {
    console.log(`Servidor funcionando en puerto ${PUERTO}`);
});
