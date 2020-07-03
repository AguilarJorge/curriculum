const db = require('../database/config');

const router = app => {
    app.get(`${process.env.API_URL}/trabajos`, (request, response) => {
        let queryString = 'SELECT t.id, t.nombre_corto, t.nombre, t.descripcion, t.url, t.mobile_thumb, t.tablet_thumb, t.laptop_thumb, t.color_theme, c.nombre AS categoria, e.nombre AS empresa FROM trabajo AS t INNER JOIN categoria AS c ON t.id_categoria = c.id  INNER JOIN empresa AS e ON t.id_empresa = e.id';
        db.query(queryString, (error, trabajos) => {
            if (error) throw error;
            response.send(trabajos);
        })
    })
}

module.exports = router;