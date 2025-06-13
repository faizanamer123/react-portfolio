const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  imageUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  liveUrl: {
    type: String
  },
  features: [{
    type: String
  }],
  category: {
    type: String,
    required: true,
    enum: ['Web Development', 'Mobile App', 'Desktop App', 'Other']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema); 