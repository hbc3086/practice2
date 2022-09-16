const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
//const regBizNo = /^([0-9]{3})-?([0-9]{2})-?([0-9]{5})$/;
//const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const regTypes = {
  email: regEmail,
  phone: regPhone,
}

export default (type, value) => {
  const validator = regTypes[type];
  if(!validator){
    //throw "포맷을 체크할 타입이 존재하지 않습니다.";
    return false;
  }
  if(!value){
    //throw "포맷을 체크할 값이 존재하지 않습니다.";
    return false;
  }

  return validator.test(value);
}
