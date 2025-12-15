const express = require('express');
const router = express.Router();

// Conexión a la base de datos
const db = require('../config/db');

/* =========================
   GET - Obtener clientes
========================= */
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM clientes';

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

/* =========================
   POST - Agregar cliente
========================= */
router.post('/', (req, res) => {
    const { nombre, apellido, modelo, precio } = req.body;

    const sql = `
        INSERT INTO clientes (nombre, apellido, modelo, precio)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [nombre, apellido, modelo, precio], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({
            mensaje: 'Cliente agregado correctamente',
            id: result.insertId
        });
    });
});

/* =========================
   PUT - Actualizar cliente
========================= */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, modelo, precio } = req.body;

    const sql = `
        UPDATE clientes
        SET nombre = ?, apellido = ?, modelo = ?, precio = ?
        WHERE id = ?
    `;

    db.query(sql, [nombre, apellido, modelo, precio, id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({
            mensaje: 'Cliente actualizado correctamente'
        });
    });
});

/* =========================
   DELETE - Eliminar cliente
========================= */
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM clientes WHERE id = ?';

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({
            mensaje: 'Cliente eliminado correctamente'
        });
    });
});

module.exports = router;
