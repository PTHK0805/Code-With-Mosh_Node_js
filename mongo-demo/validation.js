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
    required: function () { return this.isPublished; }
  }
});

const Course = mongoose.model('course', courseSchema);

async function createCourse() {
  const course = new Course({
    //name: 'Angular Course',
    category: 'web',
    author: 'Mosh',
    tags: [],
    isPublished: true,
    //price: 15,
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

createCourse();