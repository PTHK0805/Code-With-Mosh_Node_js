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

async function getCourse() {
  const courses = await Course
    // Comparison Query Operators
    // eq   (equal)
    // ne   (not equal)
    // gt   (greater than)
    // gte  (greater than or equal to)
    // lt   (less than)
    // lte  (less than or equal to)
    // in 
    // nin  (not in)
    
    .find({author: 'Mosh', isPublished: true })
    .find({ price: { $gte: 10, lte: 20 } })
    .find({ price: [10, 15, 20] })
    
    // Logical Query Operator
    // or
    // and

    .find()
    .or({ author: 'Mosh' }, { isPublished: true })
    .and([])
    
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourse();