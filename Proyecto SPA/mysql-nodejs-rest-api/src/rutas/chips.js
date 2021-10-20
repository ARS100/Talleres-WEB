const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) =>{
    mysqlConnection.query('SELECT * FROM CIRCUITO', (err, rows, fields) =>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
    });
});

router.get('/:id_circuito', (req, res) =>{
    const {id_circuito} = req.params;
    mysqlConnection.query('SELECT * FROM CIRCUITO WHERE id_circuito = ?', [id_circuito], (err, rows, fields) =>{
        if(!err) {
            res.json(rows[0]);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const {id_circuito, tipo, nombre, componentes, costo} = req.body;
    const query =  `
    SET @id_circuito = ?;
	SET @tipo = ?;
	SET @nombre = ?;
	SET @componentes = ?;
	SET @costo = ?;
    CALL agregarActualizarCircuito(@id_circuito, @tipo, @nombre, @componentes, @costo);`;
    mysqlConnection.query(query, [id_circuito, tipo, nombre, componentes, costo], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Circuitos guardados'});
        }else {
            console.log(err);
        }
    });
});

router.put('/:id_circuito', (req, res) => {
    const { tipo, nombre, componentes, costo } = req.body;
    const { id_circuito } = req.params;
    const query = `
    SET @id_circuito = ?;
	SET @tipo = ?;
	SET @nombre = ?;
	SET @componentes = ?;
	SET @costo = ?;
    CALL agregarActualizarCircuito(@id_circuito, @tipo, @nombre, @componentes, @costo);`;
    mysqlConnection.query(query, [id_circuito, tipo, nombre, componentes, costo], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Circuitos actualizados'});
      } else {
        console.log(err);
      }
    });
  });

  router.delete('/:id_circuito', (req, res) =>{
    const {id_circuito} = req.params;
    mysqlConnection.query('DELETE FROM CIRCUITO WHERE id_circuito = ?', [id_circuito], (err, rows, fields) =>{
        if(!err) {
            res.json('Circuito eliminado');
            
        }else {
            console.log(err);
        }
    });
});
module.exports = router;