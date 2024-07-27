const mongoose = require('mongoose')

const DBCSchema = new mongoose.Schema({
    fullname: String,
    contactno: String,
    email: String,
    url: String,
    address: String,
    sevices: String,
})

const DBCModel = mongoose.model("customers", DBCSchema)
module.exports = DBCModel