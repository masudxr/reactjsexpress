import express from 'express'
const app = express()

app.use(express.json());

const courses = [
    {id: 1, name: 'Masud'},
    {id: 2, name: 'Shihab'},
    {id: 3, name: 'Rana'},
    {id: 4, name: 'Methu'},
    {id: 5, name: 'Rasel'},
    {id: 6, name: 'Zilani'},
]

app.get('/',(req, res) => {
  res.send('SetUp React JS and Express JS')
});

app.get('/api/courses',(req, res) => {
    res.send(courses)
});

app.get('/api/courses/:id',(req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send(`This ID ${req.params.id} is not found the courses`)
    res.send(course)
});

app.post('/api/courses',(req, res) => {
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
});

app.get('/api/posts/:year/:month',(req, res) => {
    res.send(req.params)
});


// listen Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening the Port ${port}.. Have a Good Journey`))