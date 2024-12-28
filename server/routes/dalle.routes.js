import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

// const openai = new OpenAI(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').post(async (req, res) => {
  try {
    // incoming post request has JSON body containing field: 'prompt'
    const { prompt } = req.body;
    // generate image (await)
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    })
    const image = response.data[0].b64_json;
    console.log('Image generated via DALLE.')
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ message: "Something went wrong."});
  }
})

export default router;