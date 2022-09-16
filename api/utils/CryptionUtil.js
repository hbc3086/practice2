const crypto = require('crypto');

const password = 'wolfootjaIsSpecial';
const salt = 'specialSalt';

const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync(password,salt, 32); // 나만의 암호화키. password, salt, byte 순인데 password와 salt는 본인이 원하는 문구로~
const iv = crypto.randomBytes(16); //초기화 벡터. 더 강력한 암호화를 위해 사용. 랜덤값이 좋음
const cipher = crypto.createCipheriv(algorithm, key, iv); //key는 32바이트, iv는 16바이트
const decipher = crypto.createDecipheriv(algorithm, key, iv);

const encrypt = (plainText) => {
  /*
  try{
    cipher.update(plainText, 'utf8', 'base64');
    return cipher.final('base64');
  }catch (e){
    console.log(e);
    throw "암호화 에러 :"+plainText;
  }

   */
  return plainText;
}

const decrypt = (encrypted) => {
  /*
  try{
    decipher.update(encrypted, 'base64', 'utf8');
    return decipher.final('utf8');
  }catch (e){
    console.log(e);
    throw "복호화 에러"
  }

   */
  return encrypted
}

module.exports = {
  encrypt,
  decrypt
}
