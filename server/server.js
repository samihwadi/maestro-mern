import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 

import routes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// DB Connection + Server Start
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
    console.log('Successfully connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });
