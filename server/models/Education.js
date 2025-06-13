const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  description: {
    type: String
  },
  location: {
    type: String
  },
  gpa: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Education', educationSchema); 