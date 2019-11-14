const _ = require("lodash");
const fs = require("fs");
const express = require("express");
const app = express();

let param = process.argv[2];
app.use(express.json());

let db = [];
let films = [
    { ID: 0, likes: 0, title: "El misterio de los cuadros" },
    { ID: 1, likes: 0, title: "Apocalipsis final" },
    { ID: 2, likes: 0, title: "One bullet three deads" }
];

function fillDB() {
    for (var x = 0; x < 3; x++) {
        db.push({ name: "Alexa" + _.random(0, 100), age: 28 + _.random(0, 50) });
    }
}

//API REST USERS
app.get('/getusers', (req, res) => {
    res.send(db);
});

app.post('/adduser', (req, res) => {
    const { name, age } = req.body;
    if (name != null && age != null) {
        db.push({ name: name, age: parseInt(age) });
        res.send(db);
    } else {
        res.send("No se han proporcionado todos los campos necesarios");
    }
});

//API REST FILMS
app.get('/films', (req, res) => {
    res.send(films);
});

app.put('/films', (req, res) => {
    var id = req.body.id;
    var film = films.find(movie => movie.ID === id);
    if (film) {
        film.likes++;
        res.send(films);
    }
    else res.send("Película no encontrada");
});

app.post('/films', (req, res) => {
    var title = req.body.title;
    if (title != null) films.push({ id: films[films.length - 1].id + 1, likes: 0, title: title })
});

app.delete('/films', (req, res) => {
    var id = req.body.id;
    var film = films.findIndex(movie => movie.ID == id);
    if (film > 0) films.splice(film, 1);
    res.send(films);
});

//APP START
fillDB();
app.listen(3000, () => console.log('Ready on port 3000!'));