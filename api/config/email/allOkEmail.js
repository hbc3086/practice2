const nodemailer = require('nodemailer');
const logger = require('../logger');

const testMode = process.env.TEST_MODE==='TRUE';
const emailPassing = process.env.EMAIL_PASSING==='TRUE';

const from = process.env.SMTP_FROM;
const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user,
    pass,
  },
});

async function sendMail(to, subject, content) {
  console.log(emailPassing, to,subject);
  if(emailPassing){
    console.log('email passing');
    return true;
  } else {
    if(testMode){
      subject = `[TEST]${subject}`
    }
    console.log('email send');
    const config = {
      from: '"ALL-OK" <'+from+'>',
      to: to,
      subject: subject,
      html: content
    }
    return transporter.sendMail(config)
      .then(info => {
        logger.debug('메일을 발송했습니다 : %O', info);
        return true;
      })
      .catch(err => {
        logger.error("메일 발송에 실패했습니다. : %O", err);
        return false;
      })
  }
}

module.exports = {
  sendMail,
}
