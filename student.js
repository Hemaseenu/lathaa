const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String
});

module.exports = mongoose.model('Student', StudentSchema);