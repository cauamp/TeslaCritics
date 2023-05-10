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
    const sqlSelect = "SELECT * FROM filmes";
    db.query(sqlSelect, (err, result) => {
        if(err){
            console.log(err);
            console.log("\n DEU RUIM \n");
        } else{
            res.send(result);
        }
    }); 
})

app.get('/moviePage/:movieName', (req, res) => {
    const movie = req.params.movieName
    console.log("cheguei");

});

app.listen(3001, () => {
    console.log("Running on :3001")
});