async function fetchCompanyInfo(axios, bizNo){
  return axios.get(`https://c-api.10bagger.co.kr/v1/corp/nice/companyOutline/${bizNo}`)
    .then(result => result.data)
    .catch(err => null)
}

async function saveForm(axios, form){
  return axios.post('/api/availLender', form)
    .then(res => res.data)
    .catch(err => null)
}

async function saveConsultingReq(axios, lookupId){
  return axios.post(`/api/availLender/${lookupId}/consulting`)
    .then(res => res.data)
    .catch(err => null)
}

export default {
  fetchCompanyInfo,
  saveForm,
  saveConsultingReq,
}
