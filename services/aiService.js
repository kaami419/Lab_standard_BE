// const { Configuration, OpenAIApi } = require('openai');

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API key in the .env file
// });
// const openai = new OpenAIApi(configuration);

// exports.generateLabDesign = async (userInput) => {
//     const { labType, role, purpose, designPreferences, outputType } = userInput;
  
//     const prompt = `
//     I am working on a ${labType} lab as a ${role}.
//     The lab's purpose is ${purpose}.
//     Here are some design preferences or standards: ${designPreferences}.
//     Please generate a ${outputType} (choose one: AI-generated images, video, or PowerPoint presentation) that aligns with Australian lab standards. 
//     Include details like equipment layout, safety features, and space optimization for this specific type of lab.`;
  
//     try {
//       const response = await openai.createCompletion({
//         model: "gpt-4",
//         prompt,
//         max_tokens: 2000,
//       });
//       return response.data.choices[0].text;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to generate lab design');
//     }
//   };
  


const { Configuration, OpenAIApi } = require('openai');
const { text2im } = require('./dalle'); // Assuming DALL·E or another tool is available for image generation

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Generate content based on user's format preference
exports.generateLabDesign = async (userInput) => {
  const { labType, role, purpose, designPreferences, outputType } = userInput;

  // Base prompt for any format
  const prompt = `
    I am working on a ${labType} lab as a ${role}.
    The lab's purpose is ${purpose}.
    Here are some design preferences or standards: ${designPreferences}.
    Please generate content that aligns with Australian lab standards. 
    Include details like equipment layout, safety features, and space optimization for this specific type of lab.
  `;

  try {
    let result;

    // Generate content based on the output type
    if (outputType === 'image') {
      // Call the image generation function (e.g., DALL·E)
      const imageResponse = await text2im({
        prompt: `${prompt} Generate an image visualization of the lab.`,
        size: '1024x1024', // Customize size as needed
      });
      result = imageResponse.data; // Return the image URL or data
    } else if (outputType === 'video') {
      // Generate video (could integrate with a video generation API if available)
      const videoDescription = await openai.createCompletion({
        model: 'gpt-4',
        prompt: `${prompt} Create a detailed plan for a video presentation about the lab.`,
        max_tokens: 2000,
      });
      result = videoDescription.data.choices[0].text;
      // You can integrate a video generation service here for further automation
    } else if (outputType === 'presentation') {
      // Generate PowerPoint or presentation-like content
      const pptDescription = await openai.createCompletion({
        model: 'gpt-4',
        prompt: `${prompt} Create a detailed description of a PowerPoint presentation for the lab design.`,
        max_tokens: 2000,
      });
      result = pptDescription.data.choices[0].text;
      // You could later integrate tools for automating actual slide generation if needed
    } else {
      throw new Error('Invalid output type');
    }

    return result;
  } catch (error) {
    console.error('Error generating lab design:', error.message);
    throw new Error('Failed to generate lab design');
  }
};
