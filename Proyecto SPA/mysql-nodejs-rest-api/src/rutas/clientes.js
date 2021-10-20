const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) =>{
    mysqlConnection.query('SELECT * FROM CLIENTE', (err, rows, fields) =>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
    });
});

router.get('/:id_cliente', (req, res) =>{
    const {id_cliente} = req.params;
    mysqlConnection.query('SELECT * FROM CIRCUITO WHERE id_cliente = ?', [id_cliente], (err, rows, fields) =>{
        if(!err) {
            res.json(rows[0]);
        }else {
            console.log(err);
        }
    });
});

//post


//put


//delete

router.delete('/:id_cliente', (req, res) =>{
    const {id_cliente} = req.params;
    mysqlConnection.query('DELETE FROM CIRCUITO WHERE id_cliente = ?', [id_cirid_clientecuito], (err, rows, fields) =>{
        if(!err) {
            res.json('Cliente eliminado');
            
        }else {
            console.log(err);
        }
    });
});
module.exports = router;