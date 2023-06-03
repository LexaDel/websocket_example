import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import {
  ALLOWED_ORIGIN,
  CONFIG_POSTGRES_DB,
} from './config/index.js';
import pg from 'pg';
import userController from './controllers/userController.js';
import userListController from './controllers/userListController.js';
import worktimeController from './controllers/worktimeController.js';

const app = express();
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const client = new pg.Client(CONFIG_POSTGRES_DB);

userController(app, client);
userListController(app, client);
worktimeController(app, client);

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
