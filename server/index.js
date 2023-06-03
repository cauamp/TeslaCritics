const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_site_critica',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/getFilmes', (req, res) => {
    const sqlSelect = "SELECT * FROM filmes ORDER BY nome";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            console.log("\n DEU RUIM \n");
        } else {
            res.send(result);
        }
    });
})

app.get('/api/getGeneros', (req, res) => {
    const sqlSelect = "SELECT * FROM generos ORDER BY nome";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            console.log("\n DEU RUIM \n");
        } else {
            res.send(result);
        }
    });
})

app.put(`/api/:movieName/updateNota`, (req, res) => {
    const filme = req.params.movieName
    const nota = req.body.nota

    const sqlUpdate =
        "UPDATE filmes SET nota = ? WHERE nome = ?"
    nota != undefined ?
        db.query(sqlUpdate, [nota, filme], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Nota Atualizada " + nota);
            }
        })
        : console.log("NOTA undefined = " + nota);
})

app.post('/moviePage/:movieName/get', (req, res) => {
    const filme = req.params.movieName
    const sqlSelect = "SELECT * FROM filmes WHERE nome = ?";

    db.query(sqlSelect, filme, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result[0]);
            console.log("MoviePage atualizada")
        }
    })

});


app.post('/moviePage/getReviews/:idfilme', (req, res) => {
    const idfilme = req.params.idfilme
    const sqlSelect = "SELECT * FROM criticas WHERE idfilme = ?";

    db.query(sqlSelect, idfilme, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Reviews atualizadas")
        }
    })
});


app.post('/moviePage/:movieName/insertReview', (req, res) => {

    const nomeUsuario = req.body.nomeUsuario;
    const criticaFilme = req.body.criticaFilme;
    const notaFilme = req.body.notaFilme;
    const idfilme = req.body.idFilme;

    const sqlInsert = "INSERT INTO criticas (usuario, critica, nota, idfilme) VALUES (?, ?, ?, ?)"
    db.query(sqlInsert, [nomeUsuario, criticaFilme, notaFilme, idfilme], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Critica adicionada");
        }

    });

})


app.post('/api/insert', (req, res) => {

    const nomeFilme = req.body.nomeFilme;
    const sinopseFilme = req.body.sinopseFilme;
    const anoFilme = req.body.anoFilme;
    const filmePicURL = req.body.filmePicURL;
    const generoFilme = req.body.generoFilme;

    const sqlInsert = "INSERT INTO filmes (nome, sinopse, ano, picURL, idgenero) VALUES (?, ?, ?, ?, (SELECT id FROM generos WHERE nome = ?))"
    db.query(sqlInsert, [nomeFilme, sinopseFilme, anoFilme, filmePicURL, generoFilme], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Adicionado");
        }

    });

})


app.listen(3001, () => {
    console.log("Running on :3001")
});