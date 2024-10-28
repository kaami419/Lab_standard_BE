const OpenAIApi = require('openai');
const Configuration = require("openai")
require('dotenv').config();



// Configure the OpenAI API with your API key
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

/**
 * Generate an image based on the given prompt using DALL·E or any AI image generator.
 * @param {Object} options - The options for image generation.
 * @param {string} options.prompt - The prompt to describe the image.
 * @param {string} options.size - The size of the image to generate (e.g., '1024x1024').
 * @returns {Object} Image response data from OpenAI API.
 */
exports.text2im = async ({ prompt, size = '1024x1024' }) => {
  try {
  //   const detailedPrompt = `
  //   ${prompt}
  //   Here is the specific text to include in the image in different sections:
  //   1. Title: ISO/TC 336 International Standards
  //   2. Essential Equipment: Equipment like test tubes, beakers, and safety goggles are required.
  //   3. Safety Measures: Labs must follow proper waste disposal and have safety protocols.
  //   4. Lab Design: Laboratories must be equipped with modern tools, proper ventilation, and safety exits.
  //   Ensure all text in the image is in English and relevant to ISO/TC 336 standards. Do not use any fake text or placeholders.
  // `;

  // const detailedPrompt = `
  // Generate a clean and visually appealing image that represents the ISO/TC 336 international standards vocabulary for laboratories. 
  // The image should include the following text in clear and legible English:
  
  // - Title: ISO/TC 336 International Standards
  // - Essential Equipment: Equipment like test tubes, beakers, and safety goggles are required.
  // - Safety Measures: Labs must follow proper waste disposal and have safety protocols.
  // - Lab Design: Laboratories must be equipped with modern tools, proper ventilation, and safety exits.
  
  // Please ensure the text is easy to read and correctly displayed in the image.
  // `;
    const response = await openai.images.generate({
      model: "dall-e-3",
      // prompt: prompt,  
      // prompt: `${prompt} Make sure that all text in the image is in English and relevant to ISO/TC 336 lab standards. Do not use placeholder or dummy text or fake text!!`,     // The prompt that describes the image you want to generate
      // prompt: `${prompt}.  Again, remember to never write any text in the image you generate except explaining about the equipments being displayed inside the images like "fire extinguisher", "flask"`,     // The prompt that describes the image you want to generate
      // prompt: `Create an illustration of a laboratory setting. Include the following items with their names correctly spelled in English: "fire extinguisher," "flask," "test tube," and "safety goggles." No placeholder or dummy text should appear in the image.`,
      // prompt: `${prompt}.Illustrate a clean laboratory environment with items such as "fire extinguisher," "test tube," and "beaker." Each item's name should be written in a clear, bold font in English with correct spelling. No placeholder or dummy text is allowed.`,
      prompt: `${prompt}.Create a realistic image of a whole laboratory workspace. There should be no text or placeholder information in the image at all.`,
      n: 1,                 // Number of images to generate
      size: size,           // Size of the generated image, defaulting to 1024x1024
      response_format: 'url' // The format of the response (can be 'url' or 'b64_json' for base64)
    });

    return response.data; // Return the URL of the generated image
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};


/**
 * Generate an image based on the given prompt using DALL·E or any AI image generator.
 * @param {Object} options - The options for image generation.
 * @param {string} options.prompt - The prompt to describe the image.
 * @param {string} options.size - The size of the image to generate (e.g., '1024x1024').
 * @returns {Object} Image response data from OpenAI API.
 */
exports.presentationModel = async ({ prompt, size = '1024x1024' }) => {
  try {

  // `;
    const response = await openai.images.generate({
      model: "dall-e-3",
      // prompt: prompt,  
      // prompt: `${prompt} Make sure that all text in the image is in English and relevant to ISO/TC 336 lab standards. Do not use placeholder or dummy text or fake text!!`,     // The prompt that describes the image you want to generate
      // prompt: `${prompt}.  Again, remember to never write any text in the image you generate except explaining about the equipments being displayed inside the images like "fire extinguisher", "flask"`,     // The prompt that describes the image you want to generate
      // prompt: `Create an illustration of a laboratory setting. Include the following items with their names correctly spelled in English: "fire extinguisher," "flask," "test tube," and "safety goggles." No placeholder or dummy text should appear in the image.`,
      // prompt: `${prompt}.Illustrate a clean laboratory environment with items such as "fire extinguisher," "test tube," and "beaker." Each item's name should be written in a clear, bold font in English with correct spelling. No placeholder or dummy text is allowed.`,
      prompt: `${prompt}. Also remember to never write any text in the image you generate not even placeholder text or dummy text!`,
      n: 1,                 // Number of images to generate
      size: size,           // Size of the generated image, defaulting to 1024x1024
      response_format: 'url' // The format of the response (can be 'url' or 'b64_json' for base64)
    });

    return response.data; // Return the URL of the generated image
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};


/**
 * Generate an image based on the given prompt using DALL·E or any AI image generator.
 * @param {Object} options - The options for image generation.
 * @param {string} options.prompt - The prompt to describe the image.
 * @param {string} options.size - The size of the image to generate (e.g., '1024x1024').
 * @returns {Object} Image response data from OpenAI API.
 */
exports.posterGenerator = async ({ prompt, size = '1024x1024' }) => {
  try {
    const detailedPrompt = `
    ${prompt}
    Here is the specific text to include in the image in different sections:
    1. Title: ISO/TC 336 International Standards
    2. Safety Measures: Labs must follow proper waste disposal and have safety protocols.
    4. Lab Design: Laboratories must be equipped with modern tools, proper ventilation, and safety exits.
    Ensure all text in the image is in English and relevant to ISO/TC 336 standards. Do not use any fake text or placeholders.
  `;

//   const detailedPrompt = `
//  ${prompt}.
 
 
//  Remember!! Generate a clean and visually appealing image that represents the ISO/TC 336 international standards vocabulary for laboratories. 
//   The image should include the text in clear and legible English. Please ensure the text is easy to read and correctly displayed in the poster sectionwise and show a general lab on the background.
//   `;
    const response = await openai.images.generate({
      model: "dall-e-3",
      // prompt: prompt,  
      // prompt: `${prompt} Make sure that all text in the image is in English and relevant to ISO/TC 336 lab standards. Do not use placeholder or dummy text or fake text!!`,     // The prompt that describes the image you want to generate
      // prompt: `${prompt}.  Again, remember to never write any text in the image you generate except explaining about the equipments being displayed inside the images like "fire extinguisher", "flask"`,     // The prompt that describes the image you want to generate
      // prompt: `Create an illustration of a laboratory setting. Include the following items with their names correctly spelled in English: "fire extinguisher," "flask," "test tube," and "safety goggles." No placeholder or dummy text should appear in the image.`,
      // prompt: `${prompt}.Illustrate a clean laboratory environment with items such as "fire extinguisher," "test tube," and "beaker." Each item's name should be written in a clear, bold font in English with correct spelling. No placeholder or dummy text is allowed.`,
      prompt: `${detailedPrompt}.`,
      n: 1,                 // Number of images to generate
      size: size,           // Size of the generated image, defaulting to 1024x1024
      response_format: 'url' // The format of the response (can be 'url' or 'b64_json' for base64)
    });
    console.log("response.data from dalle", response.data);
    

    return response.data; // Return the URL of the generated image
  } catch (error) {
    console.error('Error generating poster:', error);
    throw new Error('Failed to generate poster');
  }
};