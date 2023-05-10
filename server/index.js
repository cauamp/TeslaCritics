const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'teslacriticsdatabase',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/getFilmes', (req, res) => {
    /*const sqlSelect = "SELECT * FROM FILMES";
    db.query(sqlSelect, (err, result) => {
        if(err){
            console.log(err);
            console.log("\n DEU RUIM \n");
        } else{
            res.send(result);
        }
    }); */

    const teste = [{
        nome: 'Harry Potter',
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXF7p7o769UgvHvJ27PZKqEU759BqVHsNwN66m0_y2uwbvb8k', nota: 5,
        id : 1
    }, {
        nome: 'Tropa de Elite',
        capa: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg', 
        nota: 5,
        id : 2
    }]
    res.send(
        teste
    );
})

app.get('/moviePage/:movieName', (req, res) => {
    const movie = req.params.movieName
    console.log("cheguei");

});

app.listen(3001, () => {
    console.log("Running on :3001")
});