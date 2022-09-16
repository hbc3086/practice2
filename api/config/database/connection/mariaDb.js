const maria = require('mariadb');
const logger = require('../../logger');

const host = process.env.ALL_OK_DB_HOST;
const user = process.env.ALL_OK_DB_USER;
const password = process.env.ALL_OK_DB_PASSWORD;
const database = process.env.ALL_OK_DB_DATABASE;
const connectionLimit = process.env.ALL_OK_DB_CONNECTION_LIMIT;

const pool = maria.createPool({
  host,
  port: 3306,
  user,
  password,
  database,
  connectionLimit,
});


const getConnection = async () => {
  let conn = await pool.getConnection();
  logger.debug('Total connections : %s \n Active connections : %s \n Idle connections : %s',
    pool.totalConnections(),
    pool.activeConnections(),
    pool.idleConnections()
  )
  return conn;
}

module.exports = getConnection;
