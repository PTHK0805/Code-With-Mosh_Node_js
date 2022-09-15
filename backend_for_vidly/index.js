const Joi = require('joi');
const genre = require('./routes/genre');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/genres', genre);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));