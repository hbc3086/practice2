const getConnection = require('./connection/mariaDb')
const errorModel = require('../../commonModel/ErrorModel');
const logger = require('../logger');

const query = async (sql) => {
  let connection;
  let result;
  try{
    connection = await getConnection();
    result = await connection.query(sql);
  }catch (e){
    logger.error('database : %O',e);
    result = null;
  }finally {
    if(connection) {
      await connection.release();
    }
  }
  return result;
}

const insert = async ( sql ) => {
  const success = await query(sql);
  if(success){
    return success.affectedRows;
  }
  throw new errorModel.ServerError();
}

const selectOne = async ( sql ) => {
  const success = await query(sql);
  if(success){
    const row = success[0];
    return row;
  }
  throw new errorModel.ServerError();
}

module.exports = {
  insert,
  selectOne
};
