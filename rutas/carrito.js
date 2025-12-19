const express = require('express');
const router = express.Router();
const db = require('../config/db');

/* =========================
   POST - Guardar compra
========================= */
router.post('/', (req, res) => {
    const { nombre, apellido, modelo, precio, cantidad } = req.body;
    const total = precio * cantidad;

    const sql = `
        INSERT INTO carrito 
        (cliente_nombre, cliente_apellido, moto_modelo, precio, cantidad, total)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [nombre, apellido, modelo, precio, cantidad, total], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            mensaje: 'Compra registrada correctamente',
            id: result.insertId
        });
    });
});

/* =========================
   GET - Ver historial
========================= */
router.get('/', (req, res) => {
    db.query('SELECT * FROM carrito', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

module.exports = router;
