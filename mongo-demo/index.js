const mongoose = require('mongoose');
//const config = require('config');

// Connect different database with Environment variable.

//mongoose.connect(config.get('database.host'))
//  .then(() => console.log('Connected to Mongodb...', config.get('database.host')))
//  .catch(err => console.error('Couldnot connect to Mongodb...'));

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Couldnot connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
  name: 'Angular Course',
  author: 'Mosh',
  tags: ['angular', 'frontend'],
  isPublished: true
})

const result = await course.save();
console.log(result);
} 

createCourse();