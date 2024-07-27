const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
})

const ContactModel = mongoose.model("users", ContactSchema)
module.exports = ContactModel