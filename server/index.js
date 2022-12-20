import express from 'express'
import mongoose from 'mongoose'
import {
  MONGODB_URI   
} from './config/index.js'

const app = express();

try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('🚀 Connected to DB')
  } catch (e) {
    console.log(`Error while connecting to DB: ${e}`)
  }

  const PORT = process.env.NODE_DOCKER_PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });