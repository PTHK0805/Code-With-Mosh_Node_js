const mongoose = require('mongoose');
//const config = require('config');

// Connect different database with Environment variable.

//mongoose.connect(config.get('database.host'))
//  .then(() => console.log('Connected to Mongodb...', config.get('database.host')))
//  .catch(err => console.error('Couldnot connect to Mongodb...'));

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to Mongodb...'))
  .catch(err => console.error('Couldnot connect to Mongodb...'));