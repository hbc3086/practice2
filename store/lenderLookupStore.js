import lenderLookupService from '../service/lenderLookupService';

const DEFAULT_COMPANY_INFO = {
  bizNo: null,
  prstNm: null,
  compNm: null,
  compTel: null,
  fndDt: null,
  korAddr: null,
  sector: null,
  patnCnt: null,
  patnValue: null,
  techRate: null,
};

const DEFAULT_USER_FORM = {
  clientEmail: null,
  clientTel: null,
  prstAgeCd: null,
  empNumCd: null,
  hireCd: null,
  techRcmCd: null,
  agrTm01: null,
  agrTm02: null
}

export const state = () => ({
  consultantId: null,
  cmpgnCd: null,
  companyInfo: {...DEFAULT_COMPANY_INFO},
  userForm: {...DEFAULT_USER_FORM},
  form: {
    ...DEFAULT_COMPANY_INFO,
    ...DEFAULT_USER_FORM
  },
  lookupResult:{},
  codes:{},
  step:1,
});

export const mutations = {
  ADD_STEP(state){
    state.step = state.step + 1;
  },
  UPDATE_CAMPAIGN_CD(state, query){
    if(query){
      const { path } = query;
      if(path){
        state.cmpgnCd = path;
      }
    }
  },
  UPDATE_CONSULTANT_ID(state, req){
    if(req){
      const headers = req.headers;
      if(headers){
        if(headers.referer === 'http://localhost:3003/'){
          state.consultantId = req.query.q;
        }
      }
    }
  },
  UPDATE_LOOKUP_RESULT(state, payload) {
    state.lookupResult = payload;
  },
  UPDATE_COMPANY_INFO(state, payload){
    Object.keys(payload).forEach(key => {
      state.companyInfo[key] = payload[key];
    });
  },
  UPDATE_USER_FORM(state, payload){
    Object.keys(payload).forEach(key => {
      state.userForm[key] = payload[key];
    });
  },
  UPDATE_FORM(state, payload) {
    Object.keys(payload).forEach(key => {
      state.form[key] = payload[key];
    });
  },
  UPDATE_CODES(state, payload) {
    state.codes = payload;
  },
  CLEAR(state){
    state.lookupId = null;
    state.form = { ...DEFAULT_COMPANY_INFO,
      ...DEFAULT_USER_FORM };
    state.companyInfo= {...DEFAULT_COMPANY_INFO};
    state.userForm = {...DEFAULT_USER_FORM}
    state.step = 1;
    state.result = {}
  },
};

export const actions = {
  async companyInfoAction({ state, commit }) {
    const bizNo = state.companyInfo.bizNo;
    const result = await lenderLookupService.fetchCompanyInfo(this.$axios, bizNo);
    if (result.success) {
      commit('UPDATE_COMPANY_INFO', convertCompanyInfo(result.contents));
    }
    return result;
    // return {
    //   success: false,
    //   error: {
    //     cd: '2001'
    //   }
    // };
  },

  lookupAction({ state, commit }) {
    const form = {
      ...state.companyInfo,
      ...state.userForm,
      cmpgnCd: state.cmpgnCd
    }
    lenderLookupService.saveForm(this.$axios, form)
      .then(result => {
        if(result.success){
          commit('UPDATE_LOOKUP_RESULT', result.contents);
        }else{
          commit('UPDATE_LOOKUP_RESULT', {
            productResult:{
              data:[],
              success:false
            },
            saveResult:null,
          });
        }
      })
  },
  async requestConsulting({ state }) {
    const lookupId = state.lookupResult.saveResult.lookupId;
    const productList = state.lookupResult.productResult.data;
    if (lookupId) {
      const result = await lenderLookupService.saveConsultingReq(this.$axios, lookupId, productList);
      return result.success;
    }
    return false;
  },
  async fetchCodes({commit}){
    lenderLookupService.fetchCode(this.$axios)
      .then( result => {
        if(result.success){
          for(let key in result.contents){
            const mappedList = result.contents[key].map( c=> {
              return {
                title: c.nm,
                value: c.cd
              }
            })
            result.contents[key]=mappedList;
          }
          commit('UPDATE_CODES', result.contents);
        }
      })
  }
};

function convertCompanyInfo(raw) {
  let result = {
    compNm: raw.korentrnm,
    prstNm: raw.korreprnm,
    tel: raw.tel,
    fndDt: raw.etbDate,
    labYn: raw.labYN === 'N' ? false : true,
    ventureYn: raw.ventureYn === 'N' ? false : true,
    innobizYn: raw.innobizYn === 'N' ? false : true,
    deptYn: raw.deptYn === 'N' ? false : true,
    certYn: raw.crtYN === 'N' ? false : true,
    patnYn: raw.patentYN === 'N' ? false : true,
    korAddr: raw.koraddr,
    sector: raw.korIdscdnm,
    idscd: raw.idscd,

  };
  if(raw.companyValue){
    console.log(raw.companyValue.technicalAsset);
    result.patnCnt = raw.companyValue.patentCount ? raw.companyValue.patentCount : 0;
    result.techRate = raw.companyValue.tcg ? raw.companyValue.tcg : '-';
    result.technicalAsset = raw.companyValue.technicalAsset
                              ? raw.companyValue.technicalAsset
                              : '-';
    if(result.technicalAsset !== '-'){
      result.technicalAsset = result.technicalAsset.toFixed(1);
    }
  } else {
    result.patnCnt =  0;
    result.techRate = '-';
    result.technicalAsset= '-';
  }
  return result;
}

export const getters = {
  productType(state) {
    return {
      tcb: isCertHolder(state.companyInfo) || isTechHolder(state.companyInfo) || isAllowedSector(state.companyInfo),
      org: true,
      ip: isTechHolder(state.companyInfo),
    }
  }

}

const isCertHolder = (companyInfo) => {
  return companyInfo.labYn || companyInfo.ventureYn || companyInfo.innobizYn || companyInfo;
}

const isTechHolder = (companyInfo) => {
  return companyInfo.patnCnt > 0;
}

const SECTOR_INIT = ['C', 'E', 'F', 'G', 'J', 'M', 'N', 'P', "R"]
const isAllowedSector = (companyInfo) => {
  return SECTOR_INIT.includes(companyInfo.idscd.sub(0,1));
}
