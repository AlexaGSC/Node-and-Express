const express = require("express");
const router = express.Router();




let films = [
    { ID: 0, likes: 0, title: "El misterio de los cuadros" },
    { ID: 1, likes: 0, title: "Apocalipsis final" },
    { ID: 2, likes: 0, title: "One bullet three deads" }
];



//API REST FILMS
router.get('/', (req, res) => {
    res.send(films);
});

router.put('/', (req, res) => {
    var id = req.body.id;
    var film = films.find(movie => movie.ID === id);
    if (film) {
        film.likes++;
        res.send(films);
    }
    else res.send("Película no encontrada");
});

router.post('/', (req, res) => {
    var title = req.body.title;
    if (title != null) {
        films.push({ id: films[films.length - 1].id + 1, likes: 0, title: title });
        res.send(films);
    }
    else res.send("No se ha podido insertar la película")
});

router.delete('/', (req, res) => {
    var id = req.body.id;
    var film = films.findIndex(movie => movie.ID == id);
    if (film >= 0) {
        films.splice(film, 1);
        res.send(films);
    }
    else res.send("No se ha podido eliminar la película con ID: " + id);
});

//router START


module.exports = router;