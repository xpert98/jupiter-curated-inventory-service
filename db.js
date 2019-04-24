var pg = require('pg');

const config = {
  host: process.env.PG_HOST,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_SCHEMA,
  port: 5432
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Database connected');
});

module.exports = pool;