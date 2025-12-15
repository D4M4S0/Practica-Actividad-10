const express = require('express');
const router = express.Router();
const db = require('../config/db');


// 🔹 GET - Obtener todas las motos
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM motos';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


// 🔹 POST - Agregar una moto
router.post('/', (req, res) => {
    const { marca, modelo, cilindrada, precio } = req.body;

    const sql = `
        INSERT INTO motos (marca, modelo, cilindrada, precio)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [marca, modelo, cilindrada, precio], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            mensaje: 'Moto agregada correctamente',
            id: result.insertId
        });
    });
});


// 🔹 PUT - Actualizar una moto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, cilindrada, precio } = req.body;

    const sql = `
        UPDATE motos 
        SET marca = ?, modelo = ?, cilindrada = ?, precio = ?
        WHERE id = ?
    `;

    db.query(sql, [marca, modelo, cilindrada, precio, id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ mensaje: 'Moto actualizada correctamente' });
    });
});


// 🔹 DELETE - Eliminar una moto
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM motos WHERE id = ?';

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ mensaje: 'Moto eliminada correctamente' });
    });
});

module.exports = router;
