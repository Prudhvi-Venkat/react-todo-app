module.exports = {
  host: process.env.DB_HOST || process.env.DOCKER_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: "postgres",
  typeValidation: true,
  logQueryParameters: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
