
// const OpenAIApi = require('openai');
// const Configuration = require('openai');
// const { text2im } = require('./dalle'); // Assuming DALL·E or another tool is available for image generation
// const {generatePresentation, generateVideo} = require("./sora")

// // Configure OpenAI with API key
// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// // Predefined prompt for ISO 336 vocabulary for labs
// const ISO336_PROMPT = `
//   Create content based on the ISO 336 international standard for laboratories. 
//   Focus on lab design, equipment, safety measures, and any relevant vocabulary related to lab standards. 
//   Include clear and detailed information that explains these standards to a global audience.
// `;

// // Generate content based on user's format preference
// exports.generateLabDesign = async (userInput) => {
//   console.log("api key is", openai);
  
//   const { outputType } = userInput; // User only provides outputType

//   const prompt = `
//     ${ISO336_PROMPT}
//     Please generate content in the form of a ${outputType} (choose one: AI-generated images, video, or PowerPoint presentation).
//     Include relevant visuals and descriptions aligned with ISO 336 lab standards.
//   `;

//   try {
//     let result;

//     // Generate content based on the output type
//     if (outputType === 'image') {
//       // Generate an image (infographic or visual content)
//       const imageResponse = await text2im({
//         prompt: `${prompt} Generate an infographic image that explains the ISO 336 standards.`,
//         size: '1024x1024', // Customize size as needed
//       });
//       result = imageResponse; // Return the image URL
//     } else if (outputType === 'video') {
//       // Generate a video description (use GPT-4 for a script)
//       const videoResponse = await generateVideo({
//         prompt: `${prompt} Generate a video that explains the ISO 336 standards.`,
//         // size: '1024x1024', // Customize size as needed
//       });
//       result = videoResponse;
//       // You can integrate a third-party tool for video creation if needed
//     } else if (outputType === 'presentation') {
//       // Generate content for a presentation (text with slide content)
//       const presentationResponse = await generatePresentation({
//         prompt: `${prompt} Generate a presentation that explains the ISO 336 standards.`,
//         // size: '1024x1024', // Customize size as needed
//       });
//       result = presentationResponse; // Return the image URL
//       // You could integrate tools for automating slide creation if needed
//     } else {
//       throw new Error('Invalid output type');
//     }

//     return result;
//   } catch (error) {
//     console.error('Error generating content:', error.message);
//     throw new Error('Failed to generate content');
//   }
// };


// const OpenAIApi = require('openai');
// const Configuration = require('openai');
// const { text2im } = require('./dalle'); // Assuming DALL·E or another tool is available for image generation

// // Configure OpenAI with API key
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Make sure to store your API key in .env
// });
// const openai = new OpenAIApi(configuration);

// // Predefined prompt for ISO 336 vocabulary for labs
// const ISO336_PROMPT = `
//   Create content based on the ISO 336 international standard for laboratories. 
//   Focus on lab design, equipment, safety measures, and any relevant vocabulary related to lab standards. 
//   Include clear and detailed information that explains these standards to a global audience.
// `;

// // Generate content based on user's format preference
// exports.generateLabDesign = async (userInput) => {
//   const { outputType } = userInput;

//   const prompt = `
//     ${ISO336_PROMPT}
//     Please generate content in the form of a ${outputType} (choose one: AI-generated images, video, or PowerPoint presentation).
//     Include relevant visuals and descriptions aligned with ISO 336 lab standards.
//   `;

//   try {
//     let result;

//     // Generate content based on the output type
//     if (outputType === 'image') {
//       // Generate an image (infographic or visual content)
//       const imageResponse = await text2im({
//         prompt: `${prompt} Generate an infographic image that explains the ISO 336 standards.`,
//         size: '1024x1024', // Customize size as needed
//       });
//       result = imageResponse; // Return the image URL
//     } else if (outputType === 'video') {
//       // Generate a video description (you'll implement the video generation here)
//       const videoResponse = await generateVideo({
//         prompt: `${prompt} Generate a video that explains the ISO 336 standards.`,
//       });
//       result = videoResponse;
//     } else if (outputType === 'presentation') {
//       // Generate content for a presentation
//       const presentationText = await generatePresentationText(prompt);
//       // const images = await generatePresentationImages(presentationText);

//       result = {
//         text: presentationText,
//         // images: images,
//       };
//     } else {
//       throw new Error('Invalid output type');
//     }

//     return result;
//   } catch (error) {
//     console.error('Error generating content:', error.message);
//     throw new Error('Failed to generate content');
//   }
// };

// // Function to generate text content for the presentation
// const generatePresentationText = async (prompt) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: prompt }]
//     });

//     return response.choices[0].message.content; // Return the text content
//   } catch (error) {
//     console.error('Error generating presentation text:', error);
//     throw new Error('Failed to generate presentation text');
//   }
// };

// // Function to generate images for the presentation based on the text
// const generatePresentationImages = async (presentationText) => {
//   const prompts = presentationText.split("\n\n").map(text => `Illustrate the following: ${text}`); // Create prompts from the text

//   const images = [];
//   for (const prompt of prompts) {
//     try {
//       const imageResponse = await text2im({
//         prompt: prompt,
//         size: '1024x1024',
//       });
//       images.push(imageResponse); // Assuming text2im returns the image URL
//     } catch (error) {
//       console.error('Error generating image:', error);
//     }
//   }

//   return images; // Return an array of image URLs
// };


// const axios = require('axios');
// const fs = require('fs');
// const path = require('path');
// const FormData = require('form-data');
// const OpenAIApi = require('openai');
// const Configuration = require('openai');
// const { text2im } = require('./dalle'); // Assuming DALL·E or another tool is available for image generation

// // Configure OpenAI with API key
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Make sure to store your API key in .env
// });
// const openai = new OpenAIApi(configuration);

// // Predefined prompt for ISO 336 vocabulary for labs
// const ISO336_PROMPT = `
//   Create content based on the vocabulary of ISO 336 international standard for laboratories. 
//   Focus on lab design, equipment, safety measures, and mostly on vocabulary related to ISO 336 international standard for laboratories. 
//   Include clear and detailed information that explains these standards to a global audience in english.
// `;

// // Generate content based on user's format preference
// exports.generateLabDesign = async (userInput) => {
//   const { outputType } = userInput;

//   const prompt = `
//     ${ISO336_PROMPT}
//     And remember to please generate content in the form of a ${outputType} (choose one: AI-generated images, video, or PowerPoint presentation).
//     Include relevant visuals and vocabulary aligned and related with ISO 336 lab design standards.
//   `;

//   try {
//     let result;

//     // Generate content based on the output type
//     if (outputType === 'image') {
//       // // Generate an image (infographic or visual content)
//       // const imageResponse = await text2im({
//       //   prompt: `${prompt} Generate an image that explains the ISO 336 lab design and no text, dummy or real, should be included in the images you generate except for explain except explaining about the equipments being displayed inside the images like "fire extinguisher", "flask" etc.`,
//       //   size: '1024x1024', // Customize size as needed
//       // });
//       // result = imageResponse; // Return the image URL

//       const imageResponse = await text2im({
//         prompt: `${prompt} Ensure the following items are visible: "fire extinguisher," "test tube," "lab coat," "safety goggles," and "beaker."`,
//         size: '1024x1024',
//       });

//       const imageUrl = imageResponse[0].url;
//       const imagePath = path.resolve('../uploads/generated_image.png');

//       // Step 1: Download the image locally
//       await downloadImage(imageUrl, imagePath);

//       // Step 2: Analyze the image using GPT-4 Vision
//       const vocabularyOverview = await analyzeImageWithGPT(imagePath);

//       result = { imageUrl, vocabularyOverview };
//     } else if (outputType === 'presentation') {
//       // Generate content for a presentation
//       const presentationText = await generatePresentationText(prompt);
//       console.log("presentation text is",presentationText);
//       const slides = extractSlides(presentationText);
//  const { images } = await generatePresentationImages(slides);

//       // Format the result to match the desired output structure
//       result = slides.map((slide, index) => ({
//         slide: `${slide}`,
//         image: images[index] || null, // Handle case where image might not be available
//       }));
//     } else {
//       throw new Error('Invalid output type');
//     }

//     return result;
//   } catch (error) {
//     console.error('Error generating content:', error.message);
//     throw new Error('Failed to generate content');
//   }
// };

// // Function to generate text content for the presentation
// const generatePresentationText = async (prompt) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{ role: "user", content: `${prompt} and also remember to add a description for it as well in a Description: tag always!` }]
//     });

//     return response.choices[0].message.content; // Return the text content
//   } catch (error) {
//     console.error('Error generating presentation text:', error);
//     throw new Error('Failed to generate presentation text');
//   }
// };

// // Function to generate images for the presentation based on the text
// const generatePresentationImages = async (slides) => {
//   const images = [];
//   const slideTexts = [];

//   try {
//     // Filter slides that should get images (e.g., Slide 1, Slide 2, Slide 3, Slide 4, Slide 5)
//     const slidesForImages = slides.filter(slide => 
//       slide.startsWith('Slide 1') || 
//       slide.startsWith('Slide 2') || 
//       slide.startsWith('Slide 3') || 
//       slide.startsWith('Slide 4') || 
//       slide.startsWith('Slide 5')
//     ).slice(0, 5);

//     // Generate images only for the filtered slides
//     const imageResponses = await Promise.all(
//       slidesForImages.map(async (slide) => {
//         try {
//           const imageResponse = await text2im({
//             prompt: `Create an illustration for the following slide: ${slide}. Any text shown in the image should be in English.`,
//             size: '1024x1024',
//           });
//           images.push(imageResponse); // Collect image responses
//           return imageResponse; // Return the image URL
//         } catch (error) {
//           console.error('Error generating image for slide:', error);
//           return null; // Return null if there is an error for this slide
//         }
//       })
//     );

//     // Filter out any null values from the results in case of errors
//     images.push(...imageResponses.filter(image => image !== null)); // Add valid images to the array

//     return { images, text: slideTexts }; // Return both images and remaining slide texts
//   } catch (error) {
//     console.error('Error generating images:', error);
//     throw new Error('Failed to generate images');
//   }
// };


// // Function to extract slide content from the presentation text
// const extractSlides = (presentationText) => {
//   // Use a regular expression to match lines that start with "Slide X:"
//   const slideRegex = /Slide \d+:/g;
  
//   // Split the text where "Slide X:" occurs to separate slides
//   const slideTitles = presentationText.match(slideRegex);

//   if (!slideTitles) {
//     console.error("No slides found in the text");
//     return [];
//   }

//   // Split the presentation text by slide titles to extract content for each slide
//   const slideContents = presentationText.split(slideRegex).filter(content => content.trim() !== '');

//   // Recombine titles with their respective content
//   const slides = [];
//   for (let i = 0; i < slideTitles.length; i++) {
//     slides.push(slideTitles[i] + slideContents[i + 1]?.trim());
//   }

//   console.log("slides", slides);  // Debugging to check extracted slides

//   return slides;
// };


// const downloadImage = async (url, path) => {
//   const response = await axios({
//     url,
//     responseType: 'stream',
//   });

//   return new Promise((resolve, reject) => {
//     const writer = fs.createWriteStream(path);
//     response.data.pipe(writer);
//     writer.on('finish', () => {
//       console.log(`Image saved to ${path}`);
//       resolve();
//     });
//     writer.on('error', reject);
//   });
// };

// // Function to analyze image with GPT-4 Vision
// const analyzeImageWithGPT = async (imagePath) => {
//   try {
//     const formData = new FormData();
//     formData.append('file', fs.createReadStream(imagePath));

//     const response = await openai.chat.completions.create({
//       model: 'gpt-4-vision',
//       messages: [
//         {
//           role: 'user',
//           content: 'Analyze this image and explain the vocabulary based on ISO 336 lab standards.',
//         },
//       ],
//       files: [formData], // Attach the image
//     });

//     return response.choices[0].message.content;
//   } catch (error) {
//     console.error('Error analyzing image with GPT-4 Vision:', error.message);
//     throw new Error('Failed to analyze image');
//   }
// };


const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const { text2im, presentationModel } = require('./dalle'); // Assuming DALL·E or another tool is available for image generation
const OpenAIApi = require('openai');
const Configuration = require('openai');

// Configure OpenAI with API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure to store your API key in .env
});
const openai = new OpenAIApi(configuration);

// Predefined prompt for ISO 336 vocabulary for labs
const ISO336_PROMPT = `Create content explaining the ISO/TC 336 international standard for laboratories, focusing on lab design, equipment, safety, and relevant terminology. The goal is to convey these standards clearly to a global audience. Below is a summary of the key aspects:

    Importance of Laboratories:
    Laboratories support various sectors such as pharmaceuticals, agriculture, medicine, and energy. However, no global standards exist for key aspects of lab design.

    Goals of ISO/TC 336:
        Establish global standards for lab design.
        Integrate environment, health, and safety (EHS) principles to ensure cost-efficiency, energy conservation, and worker safety.
        Promote modular and prefabricated lab structures for flexibility, sustainability, and recyclability.

    Key Benefits:
        Strengthen lab design innovations.
        Improve safety to prevent accidents.
        Ensure better working conditions to enhance worker well-being.
        Involve developing countries through partnerships like UNIDO to ensure inclusive participation.

    Scope of ISO/TC 336 Work:
        Lab design terminology and classification.
        Planning, designing, and safety standards.
        Standards for energy-saving and digital labs.
        Technical requirements for various lab types, including mobile labs.

    Global Impact and Challenges:
    The development of efficient, cost-effective labs is critical, especially in public health crises (e.g., COVID-19). Current global issues such as climate change, zoonotic diseases, and resource limitations demand improved lab infrastructure.

    Role of ISO:
    ISO aims to eliminate technical barriers to trade through standards. ISO/TC 336 ensures countries align with sustainable development goals (SDGs) by fostering standards that address environmental and health challenges.

    Participation and Representation:
    Currently, 33 countries are involved, with 15 as active participants and 18 as observers. Developing nations remain underrepresented, and ISO/TC 336 seeks to expand their participation through virtual and hybrid meetings.`;

// Generate content based on user's format preference
exports.generateLabDesign = async (userInput) => {
  const { outputType } = userInput;

  const prompt = `
    ${ISO336_PROMPT}
    And remember to please generate content in the form of a ${outputType} (choose one: AI-generated images, video, or PowerPoint presentation).
    Include relevant visuals related with ISO/TC 336 lab design standards.
  `;

  try {
    let result;

    // Generate content based on the output type
    if (outputType === 'image') {
      // Generate an image (infographic or visual content)
      const imageResponse = await text2im({
        prompt: `${prompt} Ensure the following items are visible: "whole laboratory with neccessary tools and equipments"`,
        size: '1024x1024',
      });

      const imageUrl = imageResponse[0].url;
      const imagePath = path.resolve(__dirname, '../uploads/generated_image.png');

      // Ensure the uploads directory exists
      const uploadDir = path.resolve(__dirname, '../uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Step 1: Download the image locally
      await downloadImage(imageUrl, imagePath);

      // Step 2: Analyze the image using GPT-4 Vision
      const vocabularyOverview = await analyzeImageWithGPT(imagePath,imageUrl);

      result = { imageUrl, vocabularyOverview };
    } else if (outputType === 'presentation') {
      // Generate content for a presentation
      const presentationText = await generatePresentationText(prompt);
      const slides = extractSlides(presentationText);
      console.log("Slides:", slides);
      
      const { images } = await generatePresentationImages(slides);

      // Format the result to match the desired output structure
      result = slides.map((slide, index) => ({
        slide: `${slide}`,
        image: images[index] || null, // Handle case where image might not be available
      }));
    }else if (outputType === 'video') {
      const videoResponse = await axios.post('http://localhost:5003/generate_video', { prompt });
      console.log("vid res is:", videoResponse.data);
      

      if (videoResponse.data.videoUrl) {
        result = { videoUrl: videoResponse.data.videoUrl };
      }
    }else {
      throw new Error('Invalid output type');
    }

    return result;
  } catch (error) {
    console.error('Error generating content:', error.message);
    throw new Error('Failed to generate content');
  }
};

// Function to generate text content for the presentation
const generatePresentationText = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert in ISO/TC 336 Lab standards and presentation making.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      // messages: [{ role: "user", content: `${prompt} and also remember to add a description for it as well in a Description: tag always!` }]
    });

    return response.choices[0].message.content; // Return the text content
  } catch (error) {
    console.error('Error generating presentation text:', error);
    throw new Error('Failed to generate presentation text');
  }
};

// Function to generate images for the presentation based on the text
const generatePresentationImages = async (slides) => {
  const images = [];
  const slideTexts = [];

  try {
    // Filter slides that should get images (e.g., Slide 1, Slide 2, Slide 3, Slide 4, Slide 5)
    const slidesForImages = slides.filter(slide => 
      slide.startsWith('Slide 1') || 
      slide.startsWith('Slide 2') || 
      slide.startsWith('Slide 3') || 
      slide.startsWith('Slide 4') || 
      slide.startsWith('Slide 5')
    ).slice(0, 5);

    // Generate images only for the filtered slides
    const imageResponses = await Promise.all(
      slidesForImages.map(async (slide) => {
        try {
          const imageResponse = await presentationModel({
            prompt: `Create an illustration for the following slide, show these items as  must: "the whole lab", "items mentioned in the slide" : ${slide}.`,
            size: '1024x1024',
          });
          images.push(imageResponse); // Collect image responses
          return imageResponse; // Return the image URL
        } catch (error) {
          console.error('Error generating image for slide:', error);
          return null; // Return null if there is an error for this slide
        }
      })
    );

    // Filter out any null values from the results in case of errors
    images.push(...imageResponses.filter(image => image !== null)); // Add valid images to the array

    return { images, text: slideTexts }; // Return both images and remaining slide texts
  } catch (error) {
    console.error('Error generating images:', error);
    throw new Error('Failed to generate images');
  }
};

// Function to extract slide content from the presentation text
const extractSlides = (presentationText) => {
  // Use a regular expression to match lines that start with "Slide X:"
  const slideRegex = /Slide \d+:/g;
  
  // Split the text where "Slide X:" occurs to separate slides
  const slideTitles = presentationText.match(slideRegex);

  if (!slideTitles) {
    console.error("No slides found in the text");
    return [];
  }

  // Split the presentation text by slide titles to extract content for each slide
  const slideContents = presentationText.split(slideRegex).filter(content => content.trim() !== '');

  // Recombine titles with their respective content
  const slides = [];
  for (let i = 0; i < slideTitles.length; i++) {
    slides.push(slideTitles[i] + slideContents[i + 1]?.trim());
  }

  console.log("slides", slides);  // Debugging to check extracted slides

  return slides;
};

// Function to download the generated image
const downloadImage = async (url, filePath) => {
  const response = await axios({
    url,
    responseType: 'stream',
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    writer.on('finish', () => {
      console.log(`Image saved to ${filePath}`);
      resolve();
    });
    writer.on('error', reject);
  });
};

// Function to analyze image with GPT-4 Vision
const analyzeImageWithGPT = async (imagePath,imageUrl) => {
  try {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {type: "text", "text": "Explain about the items in this image and how they are used in general laboratories globally and how they are useful in a lab?"},
            {
              type: "image_url",
              image_url: {
                "url": imageUrl,
              },
            },
          ],

          // content: 'Analyze this image and explain the vocabulary of the items displayed in the image and relate it to international ISO 336 general laboratory standards.',
        },
      ],
      
      // files: [formData], // Attach the image
    },
    max_tokens=300);

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error analyzing image with GPT-4 Vision:', error.message);
    throw new Error('Failed to analyze image');
  }
};
