const config = require('config');
const morgan = require('morgan');
const Joi = require('joi');

const logger = require('./middleware/logger')
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();


// Templating Engine
app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use('/api/courses', courses);
app.use('/', home);
app.use(express.json());
app.use(logger);

// Environment Variables
console.log(process.env.NODE_ENV);

// Configurations
console.log('Application name : ', config.get('name'));
console.log('Mail Server : ', config.get('mail.host'));
console.log('Mail password : ', config.get('mail.password'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan Enabled....')
}

app.listen(3000, () => console.log('Listening on port 3000...'));