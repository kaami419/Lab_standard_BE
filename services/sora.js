const axios = require('axios');

async function generateVideo(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/sora/video', {
      prompt: prompt,
      format: "mp4",  // or other formats supported
    }, {
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.video_url;
  } catch (error) {
    console.error('Error generating video:', error);
    throw new Error('Failed to generate video');
  }
}


async function generatePresentation(prompt) {
    try {
      const response = await axios.post('https://api.openai.com/v1/sora/presentation', {
        prompt: prompt,
        format: "pptx",  // or "pdf", depending on the output format
      }, {
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json'
        }
      });
  
      return response.data.presentation_url;
    } catch (error) {
      console.error('Error generating presentation:', error);
      throw new Error('Failed to generate presentation');
    }
  }

  
  module.exports = {
    generatePresentation,
    generateVideo
  }