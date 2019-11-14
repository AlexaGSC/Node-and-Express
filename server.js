const express = require('express');
const morgan = require('morgan');
const app = express();



const moviesRouter = require('./api/movie');

app.use(express.json());
app.use(morgan('conbined'));
app.use('/movies', moviesRouter);


app.listen(3000);
