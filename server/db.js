const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "7859",
    host: "localhost",
    port: 5432,
    database: "todo-javascript"
});

module.exports = pool;