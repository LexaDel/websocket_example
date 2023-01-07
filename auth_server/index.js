import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import {
  ALLOWED_ORIGIN,
  MONGODB_URI,
} from './config/index.js';
import { setSecurityHeaders } from './middlewares/index.js';
import router from './routes/app.routes.js';

const app = express();
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true
  })
);
app.use(setSecurityHeaders);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

try {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('🚀 Connected to mongoose DB');
} catch (e) {
  console.log(`Error while connecting to mongoose DB: ${e}`);
}

app.use('/api', router);

app.use((err, req, res) => {
  console.log(`${err.message || JSON.stringify(err, null, 2)}`);
  res.status(500).json({ message: 'Something went wrong. Try again later' });
});

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
