//routes express js file
const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

//photos 
router.get('/photos', (req, res) => {
    try {
        let sql = 'SELECT id, description, file FROM photos';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch (err) {
        console.log(err);
    }
})

//login 
router.post('/login', (req, res) => {
    try {
        let login = req.body.username;
        let password = req.body.password;
        let sql = 'SELECT id, login, password, token FROM user WHERE login = ?';
        db.query(sql, [login], (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                bcrypt.compare(password, results[0].password, (err, result) => {
                    if (err) throw err;
                    if (result) {
                        //create token valid for 30 sec
                        let token = jwt.sign({ id: results[0].id }, "secret", { expiresIn: "1w" });
                        //update token in db
                        let sql = 'UPDATE user SET token = ? WHERE id = ?';
                        db.query(sql, [token, results[0].id], (err, results) => {
                            if (err) throw err;
                            res.json({ message: "Connexion réussie", token: token });
                        })
                    } else {
                        res.json({ message: "Mot de passe incorrect" });
                    }
                })
            } else {
                res.json({ message: "Utilisateur non trouvé" });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

//crypt 
router.post('/crypt', (req, res) => {
    const password = req.body.password;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        res.json(hash);
    })
})

//check token
router.post('/checktoken', (req, res) => {
    let token = req.body.token;
    try {
        jwt.verify(token, "secret", (err, result) => {
        if (err) throw err;
        //if expired
        if (result.exp < Date.now() / 1000) {
            let sql = 'UPDATE user SET token = ? WHERE id = ?';
            db.query(sql, [null, result.id], (err, results) => {
                if (err) throw err;
            })
            res.json({ message: "invalid token" });
        } else {
            res.json({ message: "valid token" });
        }
    })
    }
    catch (err) {
        res.json({ message: "invalid token" })
    }

})



//export
module.exports = router;

