const mongoose = require('mongoose');
 
const feedbackSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  text: {
    type: String,
  },
  rating: {
    type: Number,
  },
});


const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
