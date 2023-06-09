//routes express js file
const express = require('express');
const router = express.Router();
const db = require('../db');

//get all users
router.get('/projets', (req, res) => {
    try {
        let sql = 'SELECT id, title, description, lang, link, perso FROM projets';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch (err) {
        console.log(err);
    }
    
})

//export
module.exports = router;