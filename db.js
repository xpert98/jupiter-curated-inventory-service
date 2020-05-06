const fs = require('fs');
var pg = require('pg');

let pgPassword = '';

if (!process.env.PG_PASSWORD) {
  pgPassword = fs.readFileSync(process.env.PG_PASSWORD_FILE);
}
else {
  pgPassword = process.env.PG_PASSWORD;
}

const config = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USERNAME,
  password: pgPassword,
  database: process.env.PG_SCHEMA,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Database connected');
});

module.exports = pool;