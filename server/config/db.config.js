const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "7859",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    database: "todo-javascript",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = pool;