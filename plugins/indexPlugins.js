import validationPlugin from "./validationPlugin";

// 프레임워크 내에서 불러서 사용할 수 있도록 생성
export default (context, inject) => {
  const { store } = context;

  inject('validator', ( type, value )=> {
    return validationPlugin(type, value);
  });

  inject('convertor', ( type, value ) => {
    if(type === 'phone'){
      return value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    }
    return '';
  });
}
