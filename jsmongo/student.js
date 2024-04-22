const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: Number,
    city: String,
})
exports.Student = mongoose.model("Student", studentSchema)