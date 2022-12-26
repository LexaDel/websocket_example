import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import {
  ALLOWED_ORIGIN,
  CONFIG_POSTGRES_DB,
} from './config/index.js';
import pg from 'pg';

const app = express();
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true
  })
);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

const client = new pg.Client(CONFIG_POSTGRES_DB);

app.get('/api/data', async (req, res) => {
    const result = await client.query('SELECT $1::text as message', ['Hello world!']);
    res.send({ result });
});

app.use((err, req, res) => {
  console.log(`${err.message || JSON.stringify(err, null, 2)}`);
  res.status(500).json({ message: 'Something went wrong. Try again later' });
});

const PORT = process.env.NODE_SERVER_DOCKER_PORT || 5000;

(async () => {
  try {
    await client.connect();
  } catch (e) {
    console.log(`Error while connecting to postgres DB: ${e}`);
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
