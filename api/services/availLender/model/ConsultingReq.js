const { v4: uuidv4 } = require('uuid');
const { ClientError } = require('../../../commonModel/ErrorModel');
module.exports = class ConsultingReq {
  constructor(llid) {
    this.llid = this.mappingNull(llid); // 대출기관조회 아이디
  }

  generateId = () => {
    const tokens = uuidv4().split('-')
    this.id = tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
  }

  mappingNull = (value) => {
    return value !== undefined ? value : null
  }

  isEmpty = (value) => {
    return value === undefined || value === null || value === '' ? true : false;
  }

  validate = () => {
    if(this.isEmpty(this.llid))
      throw new ClientError('대출기관 조회 아이디는 필수입니다.');
  }
}
