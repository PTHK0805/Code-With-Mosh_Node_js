const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Cannot connect to Database...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  tags: [],
  author: String,
  date: Date,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('course', courseSchema);

async function getCourse() {
  return await Course
    .find({ isPublished: true, tags: {$in : ['frontend', 'backend']}})
    .sort('-price')
    .select('name author price');
  
}

async function run() {
  const courses = await getCourse();
  console.log(courses);
}

run();