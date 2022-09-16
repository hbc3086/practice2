class Error {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

const ClientError = class ClientError extends Error{
  constructor(errorMessage) {
    super(400, errorMessage);
  }
}

const ServerError = class ServerError extends Error {
  constructor() {
    super(500, '시스템에 장애가 발생했습니다.');
  }
}

module.exports = {
  Error,
  ClientError,
  ServerError
}
