const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Technical', 'Soft Skills', 'Languages', 'Tools', 'Other']
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema); 