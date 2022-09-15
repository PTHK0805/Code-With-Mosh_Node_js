const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'Nodejs' },
    { id: 2, name: 'PHP' },
    { id: 3, name: 'Ruby' },
  ];  

router.get('/', (req, res) => {
    res.send(courses);
})

router.get('/api/post/:year/:month', (req, res) => {
    res.send(req.params);
    res.send(req.query);
})

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Your given ID not found');

    else res.send(course);

});

// HTTP POST Request
router.post('/', (req, res) => {
    //if (!req.body.name || req.body.name.length < 3) {
    //  res.send('Name is reqiured and minimum 3 characters');
    //  return;
    //}

    const { error } = validateCourse(req.body);

    if (error) {
        res.status(400).send(error.message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
})

// HTTP PUT Request
router.put('/:id', (req, res) => {
    // Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // If not found error
    if (!course) {
        res.status(404).send('Given course ID not found (404 error)');
        return;
    }

    // If found the course | Validate error
    const { error, result } = validateCourse(req.body);

    // If error , send error message
    if (error) {
        res.status(400).send(error.message);
        return;
    }

    // If All perfect, change name and send changed course
    course.name = req.body.name;
    res.send(course);
})

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(course);
}

module.exports = router;