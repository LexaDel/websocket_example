const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

export const MONGODB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
export const ALLOWED_ORIGIN = 'http://localhost:3000';
export const COOKIE_NAME = 'qid';
export const ACCESS_TOKEN_SECRET = 'access_token_secret';
export const SENTRY_DSN = 'sentry_dsn';
export const VERIFICATION_CODE = 'verification_code';