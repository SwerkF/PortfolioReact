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

router.get('/stages', (req, res) => {
    try {
        let sql = 'SELECT id, title, description, doc, datedebut, datefin FROM experiences';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch (err) {
        console.log(err);
    }
    
})

router.get('/certifs', (req, res) => {
    try {
        let sql = 'SELECT id, title, description, image FROM certifs';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/veilles', (req, res) => {
    try {
        let sql = 'SELECT id, title, description, doc FROM veilles';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch (err) {
        console.log(err);
    }
})

//lang
router.get('/lang', (req, res) => {
    try {
        let sql = 'SELECT id, title FROM lang ORDER BY title ASC';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch (err) {
        console.log(err);
    }
})

let clientId = '7da4547640144bc0bae4990cae740484';
let clientSecret = '0610ee44c024456e8a90a5e0d94ee63d';
let redirectUri = 'http://localhost:3000/api/spotify/callback';
var state = generateRandomString(16);
var scope = 'user-read-recently-played';

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i=0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}



//export
module.exports = router;

