const { Configuration, OpenAIApi } = require('openai');

// Configure the OpenAI API with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
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
    const response = await openai.createImage({
      prompt: prompt,       // The prompt that describes the image you want to generate
      n: 1,                 // Number of images to generate
      size: size,           // Size of the generated image, defaulting to 1024x1024
      response_format: 'url' // The format of the response (can be 'url' or 'b64_json' for base64)
    });

    return response.data.data[0].url; // Return the URL of the generated image
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};
