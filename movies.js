const express = require('express');
const app = express();
app.use(express.json());

const movies = [{id: 1, name: 'Movie_1'}]

app.get('/films', (req, res) => {
    res.json(films);
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
    if (title !== null) {
    films.push({ id: films[films.length - 1].id + 1, likes: 0, title: title });
    }
});

app.delete('./films', (req, res) => {
    var id = req.body.id;
    var film = films.find(film => film.ID == id);
    films.splice(film);
});

app.listen(3000, ()=> console.log('Ready on port 3000!!'))