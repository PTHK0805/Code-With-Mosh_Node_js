const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
const courses = [
  { id: 1, name: 'HTML'},
  { id: 2, name: 'CSS'},
  { id: 3, name: 'Javascript'},
];

// HTTP GET request
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send('Given course ID was not found');
  else res.send(course);
});

// HTTP POST request
app.post('/api/courses', (req, res) => {


  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// HTTP PUT request
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send('Given course ID was not found');

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.message);


  course.name = req.body.name;
  res.send(course);

})

// HTTP DELETE request
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send('Given course ID was not found');

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
  name: Joi.string().min(3).required(),
});

return result = schema.validate(course);
}


app.listen(3000, () => console.log('Listening on port 3000....'))