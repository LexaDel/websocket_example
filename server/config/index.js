const {
    POSTGRES_DB_HOST,
    POSTGRES_DB_USER,
    POSTGRES_DB_PASSWORD,
    POSTGRES_DB_NAME,
    POSTGRES_DB_PORT,
  } = process.env;
  
  export const ALLOWED_ORIGIN = 'http://localhost:5000';
  export const CONFIG_POSTGRES_DB = {
      user: POSTGRES_DB_USER,
      host: POSTGRES_DB_HOST,
      database: POSTGRES_DB_NAME,
      password: POSTGRES_DB_PASSWORD,
      port: POSTGRES_DB_PORT,
  };