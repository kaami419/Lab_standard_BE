const mongoose = require('mongoose');

const QuestionnaireSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questions: { type: Array, required: true }, // Store user answers in array format
  optionSelected: { type: String, enum: ['ppt', 'video', 'images'], required: true }
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);
module.exports = Questionnaire;
