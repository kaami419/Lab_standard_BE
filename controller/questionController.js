const Questionnaire = require('../models/Questionnaire');
const { generateLabDesign } = require('../services/aiService');


exports.submitAnswers = async (req, res) => {
    const { questions, optionSelected } = req.body;
  
    const userInput = {
      labType: questions.labType,
      role: questions.role,
      purpose: questions.purpose,
      designPreferences: questions.designPreferences,
      outputType: optionSelected  // This could be 'image', 'video', or 'presentation'
    };
  
    try {
      const aiDesign = await generateLabDesign(userInput);
      res.json({ msg: 'Questionnaire saved successfully', aiDesign });
    } catch (error) {
      console.error('Error in submitAnswers:', error.message);
      res.status(500).send('Server error');
    }
};
// exports.submitAnswers = async (req, res) => {
//     const { questions, optionSelected } = req.body;
  
//     const userInput = {
//       labType: questions.labType,
//       role: questions.role,
//       purpose: questions.purpose,
//       designPreferences: questions.designPreferences,
//       outputType: optionSelected
//     };
  
//     try {
//       const aiDesign = await generateLabDesign(userInput);
//       res.json({ msg: 'Questionnaire saved successfully', aiDesign });
//     } catch (error) {
//       res.status(500).send('Server error');
//     }
//   };
