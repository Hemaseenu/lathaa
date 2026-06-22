const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Student = require('./model/Student');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/cruddb')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('CRUD API Running');
});

// CREATE
app.post('/students', async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

// READ
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// UPDATE
app.put('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(student);
});

// DELETE
app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted Successfully' });
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});