const { v4: uuidv4 } = require('uuid');
const { ClientError } = require('../../../commonModel/ErrorModel');
const cryptionUtil = require('../../../utils/CryptionUtil');

module.exports = class AvailLenderReq {
  constructor(req) {
    this.bizNo = this.mappingNull(req.bizNo); // 상품코드번호
    this.compNm = this.mappingNull(req.compNm);// 상품번호
    this.prstNm = this.mappingNull(req.prstNm);// 상품타입
    this.fndDt = this.mappingNull(req.fndDt); // 상품이름
    this.tel = this.mappingNull(req.tel); // 상품내용
    this.cnsltEmail = this.mappingNull(req.cnsltEmail); // 특허코드번호
    this.cnsltTel = this.mappingNull(req.cnsltTel); // 포트폴리오코드번호
    this.patnYn = this.mappingNull(req.patnYn); // 라이선싱 수
    this.labYn = this.mappingNull(req.labYn); // 특허번호
    this.certYn = this.mappingNull(req.certYn); // 특허출원번호
    this.agrTm01 = this.mappingNull(req.agrTm01); // 특허등록번호
    this.agrTm02 = this.mappingNull(req.agrTm02);// 상품가격
    this.idscd = this.mappingNull(req.idscd);
  }

  generateId = () => {
    const tokens = uuidv4().split('-')
    this.id = tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
    //this.id = uuidv4();
  }

  encrypt = () => {
    if(!this.isEmpty(this.tel))
      this.encTel = cryptionUtil.encrypt(this.tel);
    if(!this.isEmpty(this.cnsltEmail))
      this.encCnsltEmail = cryptionUtil.encrypt(this.cnsltEmail);
    if(!this.isEmpty(this.cnsltTel))
      this.encCnsltTel = cryptionUtil.encrypt(this.cnsltTel);
  }

  mappingNull = (value) => {
    return value !== undefined ? value : null
  }

  isEmpty = (value) => {
    return value === undefined || value === null || value === '' ? true : false;
  }

  validate = () => {
    if(this.isEmpty(this.bizNo))
      throw new ClientError('사업자 번호는 필수입니다.');
    if(this.isEmpty(this.compNm))
      throw new ClientError('회사명은 필수입니다.');
    if(this.isEmpty(this.prstNm))
      throw new ClientError('대표자명은 필수입니다.');
    if(this.isEmpty(this.fndDt))
      throw new ClientError('설립일은 필수입니다.');
    if(this.isEmpty(this.agrTm01) || this.agrTm01 === false)
      throw new ClientError('개인정보 수집 및 이용 약관에 동의해주세요');
    if(this.isEmpty(this.agrTm02) || this.agrTm02 === false)
      throw new ClientError('개인정보 제3자 제공에 동의해주세요');
  }
}
