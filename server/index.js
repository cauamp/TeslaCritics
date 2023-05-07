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


app.put('/filme/:movieName', (req,res) => {
    const movie = req.params.movieName
    res.send("teste");
    console.log("cheguei");
    
});

app.listen(3001, () => {
    console.log("Running on :3001")
});