const query = require('../../config/database/allOkDatabase');
const errorModel = require('../../commonModel/ErrorModel');
const mailService = require('../../config/email/allOkEmail');
const mailTemplate = require('./consultingMailTemplate');
const logger = require('../../config/logger');

const requestConsulting = async (req) => {
  req.generateId();
  const isAlreadyRequested = await findAlreadyRequest(req);
  if(isAlreadyRequested){
    throw new errorModel.ClientError("이미 상담 신청이 되어있습니다.");
  }
  await saveConsultingRequest(req);
  await sendConsultingInfoMail(req.llid);
  return req.id;
}

const findAlreadyRequest = async ( req ) => {
  const row = await selectByLlidQuery(req.llid);
  return row ? true : false;
}

const selectByLlidQuery = async ( llId ) => {
  const sql = `
  SELECT * FROM consulting WHERE llid = '${llId}'
  `;
  return await query.selectOne(sql);
}

const saveConsultingRequest = async ( req ) => {
  const sql = `
  INSERT INTO consulting
      (id, llid)
  VALUES ('${req.id}', '${req.llid}')`;
  const insertCount = await query.insert(sql);
  if(insertCount === 0){
    logger.warning("database insert failed : %s", sql)
    throw new errorModel.ServerError();
  }
}

const adminMailAddress = process.env.TEST_MODE==='TRUE' ? process.env.ADMIN_EMAIL_TEST : process.env.ADMIN_EMAIL;
const sendConsultingInfoMail = async (llid) => {
  const lenderLookupRow = await findLenderLookupRowByLlId(llid);
  if(lenderLookupRow){
    const userMailAddress = lenderLookupRow.encCnsltEmail;
    sendMailToUser(userMailAddress, llid);
    sendMailToAdmin(adminMailAddress, lenderLookupRow);
  }
}

const consultingInfoMailSubject = "다된다 서비스 상담요청 안내";
const sendMailToUser = (email, llid) => {
  if(email){
    const contents = mailTemplate.userHtml;
    mailService.sendMail(email, consultingInfoMailSubject, contents)
      .then(success => {
        if(!success){
          noticeFailedMail(llid);
        }
      })
  }
}

const sendMailToAdmin = (email, lenderLookupRow) => {
  let subject = `'${lenderLookupRow.compNm}'(으)로 부터 상담요청이 들어왔습니다.`;
  let contents = mailTemplate.adminHtml(lenderLookupRow);
  mailService.sendMail(email, subject, contents);
}

const findLenderLookupRowByLlId = async (llid) => {
  const sql = `
  SELECT
    *
  FROM
    lender_lookup
  WHERE
    id = '${llid}'
  `;

  const row = await query.selectOne(sql);
  if(row){
    return row;
  }
  return null;
}

const noticeFailedMail = (llid) => {
  logger.warn("상담요청은 완료되었으나 안내 메일 발송이 실패했습니다. : %s", llid);
}

module.exports = {
  requestConsulting,
}



