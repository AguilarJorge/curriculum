const db = require('../database/config');

const router = app => {
    app.get(`${process.env.API_URL}/trabajos`, (request, response) => {
        let queryString = 'SELECT t.id, t.nombre, c.nombre AS categoria FROM trabajos AS t INNER JOIN categorias AS c ON t.id_categoria = c.id';
        db.query(queryString, (error, trabajos) => {
            if (error) throw error;
            response.send(trabajos);
        })
    })
}

module.exports = router;