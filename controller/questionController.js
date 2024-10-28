
const { generateLabDesign } = require('../services/aiService');

exports.submitAnswers = async (req, res) => {
  const { optionSelected } = req.body; // User only selects outputType

  const userInput = {
    outputType: optionSelected  // 'image', 'video', or 'presentation'
  };

  try {
    const aiDesign = await generateLabDesign(userInput);
    res.json({ msg: 'Content generated successfully', aiDesign });
  } catch (error) {
    console.error('Error in submitAnswers:', error.message);
    res.status(500).send({status: "Internal Server Error",message:error.message});
  }
};
