const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  portL: 5432,
  user: 'root',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;
