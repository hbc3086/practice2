const axios = require('axios');
const query = require('../../config/database/allOkDatabase');
const errorModel = require('../../commonModel/ErrorModel');
const logger = require('../../config/logger');

const lookupAvailLender = async (req) => {
  req.generateId();
  req.encrypt();
  await saveForm(req);
  const companyTypeResult = await checkCompanyType(req.idscd);
  return {
    id: req.id,
    typeCheck: companyTypeResult,
  };
}

const saveForm = async (req) => {
  const sql = `
    INSERT INTO lender_lookup
        (id, bizNo, compNm, prstNm, fndDt,
         encTel, encCnsltEmail, encCnsltTel, patnYn, labYn,
         certYn, agrTm01, agrTm02)
    VALUES ('${req.id}', '${req.bizNo}', '${req.compNm}', '${req.prstNm}', '${req.fndDt}',
            '${req.encTel}', '${req.encCnsltEmail}', '${req.encCnsltTel}', ${req.patnYn}, ${req.labYn},
            ${req.certYn}, ${req.agrTm01}, ${req.agrTm02})
  `;
  try{
    const affectedRows = await query.insert(sql);
    if(affectedRows === 0){
      logger.warn("다음 쿼리의 결과가 없습니다. 확인 바랍니다. : %s", sql);
      throw new errorModel.ServerError();
    }
  }catch (e){
    saveByLogger(req);
    throw e;
  }
}

const saveByLogger = (req) => {
  logger.warn('대출기관조회 양식이 데이터베이스 저장되지 않았습니다.: %O', req)
}

const checkCompanyType = async (idscd) => {
  return axios.get(`https://c-api.10bagger.co.kr/v1/corp/idscdid-loan/${idscd}`)
    .then(res=> {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}

module.exports = {
  lookupAvailLender,
}
