import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';
import OpenAI from 'openai';

// config (.env file config)
dotenv.config();

// express app setup
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// routes
app.use('/api/ai-image-generate', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running.' });
})

// start server on port 8080
app.listen(8080, () => console.log('Server has started on port 8080.'));