const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Cannot connect to Database...', err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlenght: 255,
    //match: /pattern/,
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network'],
    lowercase: true,
    //uppercase: true,
    trim: true,
  },
  author: String,

  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = v && v.length > 0;
            resolve(result);
          }, 4000);
        });
      },
      message: 'A course should have at least one tags',
    }
  },

  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () { return this.isPublished; },
    get: v => Math.round(v),
    set: v => Math.round(v)
  }
});

const Course = mongoose.model('course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    category: 'web',
    author: 'Mosh',
    tags: ['  WEB  '],
    isPublished: true,
    price: 15.7,
  })

  try {
    const result = await course.save();
    console.log(result);
  }
  catch (err) {
    for (field in err.errors)
      console.log(err.errors[field].message);
  }
}

async function getCourse() {
  const course = await Course
    .find({ _id: '632926884e45d905afbf10ce' })
    .select('price');
  
  console.log(course[0].price);
}

getCourse();