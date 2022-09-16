const {Error} = require("./ErrorModel");
const logger = require('../config/logger');

module.exports = (response, e) => {
  let status = 500;
  let message = 'Unknown Error occurred';
  if( e instanceof Error){
    status = e.status;
    message = e.message;
  }
  response
    .status(status)
    .send({message})
}
