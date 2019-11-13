const express = require('express');
const app = express();
app.use(express.json());

const movies = [{id: 1, name: 'Movie_1'}]

app.get('/films', (req, res) => {
    res.json(films);
});

app.put('/films', (req, res) => {
    const id = req.body.id;
    const film = films.find(movie => movie.ID === id);
    if (film) {
        film.likes++;
        res.send(films);
    }
    else res.send("Película no encontrada");
});

app.post('/films', (req, res) => {
    const title = req.body.title;
    if (title !== null) {
    films.push({ id: films[films.length - 1].id + 1, likes: 0, title: title });
    }
});

app.delete('./films', (req, res) => {
    const id = req.body.id;
    const film = films.findIndex(film => film.ID == id);
    films.splice(film);
});

app.listen(3000, ()=> console.log('Ready on port 3000!!'))