let express = require("express");
let app = express();
app.use(express.json());

var students = [{
    id: 1,
    name: "a"
}];

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

app.get('/students', (req, res) => {
    res.send(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student)
        return res.status(404).send("Invalid User ID");
    res.send(student);
});

app.post('/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name
    }
    if (!student)
        return res.status(400).send("Oops!Something went wrong.Please try again");
    students.push(student);
    res.send(student);
});


app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student)
        return res.status(404).send("Invalid User ID");
    student.name = req.body.name;
    res.send(student);
});

app.delete('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student)
        return res.status(404).send("Invalid User ID");
    const i = students.indexOf(student);
    students.splice(i, 1);
    res.send(student);
});

app.listen(5000, (req, res) => {
    console.log("server is listening to port number 5000");
});