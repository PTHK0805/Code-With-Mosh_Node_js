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
    enum: ['web', 'mobile', 'network']
  },
  author: String,

  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return v && v.lenght > 1;
      },
      message: 'A course should have one tag'
    }
  },

  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () { return this.isPublished; }
  }
});

const Course = mongoose.model('course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    category: 'web',
    author: 'Mosh',
    tags: ['anguular', 'forontend'],
    isPublished: false,
    //price: 15
  })

  try {
    const result = await course.save();
    console.log(result);
  }
  catch (err) {
    console.log(err.message);
  }
}

createCourse();