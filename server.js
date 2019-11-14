const express = require('express');
const app = express();
app.use(express.json());

const moviesRouter = require('./api/movie');

app.use(express.json());
app.use('/movies', moviesRouter);


app.listen(3000, ()=> console.log('Ready on port 3000!'));
