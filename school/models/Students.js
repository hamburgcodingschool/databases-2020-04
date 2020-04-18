const mongoose = require('mongoose')

const Student = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  number: { type: Number, default: 0 }
})

module.exports = mongoose.model('Student', Student)