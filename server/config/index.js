const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  POSTGRES_DB_HOST,
  POSTGRES_DB_USER,
  POSTGRES_DB_PASSWORD,
  POSTGRES_DB_NAME,
  POSTGRES_DB_PORT,
} = process.env;

export const MONGODB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
export const ALLOWED_ORIGIN = 'http://localhost:3000';
export const COOKIE_NAME = 'qid';
export const ACCESS_TOKEN_SECRET = 'access_token_secret';
export const SENTRY_DSN = 'sentry_dsn';
export const VERIFICATION_CODE = 'verification_code';
export const CONFIG_POSTGRES_DB = {
    user: POSTGRES_DB_USER,
    host: POSTGRES_DB_HOST,
    database: POSTGRES_DB_NAME,
    password: POSTGRES_DB_PASSWORD,
    port: POSTGRES_DB_PORT,
};