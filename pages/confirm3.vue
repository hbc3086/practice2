<template>
  <div class="wrap confirm3">
    <div class="w_inner type2">
      <div class="bx_step">
        <span class="item done"><em>1</em></span>
        <span class="item done"><em>2</em></span>
        <span class="item on"><em>3</em></span>
        <span class="item"><em>4</em></span>
      </div>
      <section class="wrap_scroll">
        <div class="top">
          <h1>
            <b>마지막으로<br />상담 받을 연락처를 입력해주세요</b>
          </h1>
          <p class="desc">
            기업금융, 재무전문가가 매칭결과를 자세히 분석하고 안내해드려요
          </p>
        </div>
        <div class="area1">
          <Item
            :data="{
              id: 1,
              type: 'text',
              title: '이메일',
              placeholder: 'example@allok.co.kr',
              name: 'clientEmail',
            }"
            :value.sync="form.clientEmail"
            ref="clientEmail"
          />
          <Item
            :data="{
              id: 2,
              type: 'text',
              title: '전화번호',
              placeholder: '‘-’ 없이 입력',
              name: 'clientTel',
            }"
            :value.sync="form.clientTel"
            ref="clientTel"
          />
        </div>
        <div class="area3">
          <h3>
            <CheckBox2
              :data="{ title: '<b>약관 전체 동의</b>', id: '3' }"
              classNm="txt_black, title"
              @onChange="fnCheckAllTerms"
            />
          </h3>
          <div class="toggle_item" :class="{ on: priv.toggle1 }">
            <div class="c_top">
              <CheckBox
                :data="{
                  title:
                    $store.state.ui.view === 'pc'
                      ? '개인정보 수집 및 이용에 관한 동의 <span class=\'txt_blue\'>(필수)</span>'
                      : '개인정보 수집 및 이용에 동의' +
                        '<span class=\'txt_blue\'>(필수)</span>',
                  checked: form.agrTm01,
                  id: '1',
                }"
                ref="agrTm01"
                @onChange="
                  (checked) => fnFormChange({ name: 'agrTm01', value: checked })
                "
              />
              <button class="btn_link" @click="fnToggle(1)">
                {{ priv.toggle1 ? "닫기" : "보기" }}
              </button>
            </div>
            <div class="c_cont">
              <div class="bx" v-html="terms.tm01"></div>
            </div>
          </div>
          <div class="toggle_item2" :class="{ on: priv.toggle2 }">
            <div class="c_top">
              <CheckBox
                :data="{
                  title:
                    $store.state.ui.view === 'pc'
                      ? '개인정보 제3자 제공에 관한 동의 <span class=\'txt_blue\'>(필수)</span>'
                      : '개인정보 제3자 제공에 대해 동의' +
                        '<span class=\'txt_blue\'>(필수)</span>',
                  checked: form.agrTm02,
                  id: '2',
                }"
                ref="agrTm02"
                @onChange="
                  (checked) => fnFormChange({ name: 'agrTm02', value: checked })
                "
              />
              <button class="btn_link" @click="fnToggle(2)">
                {{ priv.toggle2 ? "닫기" : "보기" }}
              </button>
            </div>
            <div class="c_cont">
              <div class="bx" v-html="terms.tm02"></div>
            </div>
          </div>
        </div>
        <div class="area_bottom">
        <div class="inner">
          <button class="btn" @click="fnNextStep">매칭시작</button>
        </div>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
import Item from "~/components/common/ItemForm.vue";
import CheckBox from "~/components/common/CheckBox.vue";
import CheckBox2 from "~/components/common/CheckBox2.vue";
import Alert from "~/components/common/Alert.vue";

export default {
  name: "confirm3",
  data() {
    return {
      priv: {
        toggle1: false,
        toggle2: false,
      },
      form: {
        clientEmail:null,
        clientTel:null,
        agrTm01:null,
        agrTm02:null,
      },
      clientTel:null,
      terms:{}
    }
  },
  components:{
    Item, CheckBox, CheckBox2,
    Alert,
  },
  methods: {
    fnAlert(msg){
      let data = {
        state: true,
        type: "alert",
        msg: `<h2>입력확인</h2>${msg}`,
        btn: {
          name: "확인",
        },
      };
      this.$store.dispatch("ui/setPopupAlertData", data);
    },
    fnToggle(i) {
      this.priv["toggle" + i] = !this.priv["toggle" + i];
    },
    fnEmailValidation(){
      const success = this.$validator('email', this.form.clientEmail);
      if(!success){
        const message = '이메일 형식이 올바르지 않습니다.';
        this.fnAlert(message);
      }
    },
    fnFormChange(data) {
      this.form[data.name] = data.value
    },
    fnCheckAllTerms(checked) {
      this.form.agrTm01 = checked;
      this.form.agrTm02 = checked;
    },
    fnRegTest(phone){
      const telRegEx = /\d{9,12}/g
      return telRegEx.test(phone);
    },
    fnNextStep(){
      if( !this.form.clientEmail ) {
        this.fnAlert('이메일을 입력해주세요')
        this.$refs.clientEmail.focus();
      }
      else if ( !this.$validator('email', this.form.clientEmail )){
        this.fnAlert('이메일 형식이 올바르지 않습니다.')
        this.$refs.clientEmail.focus();
      }
      else if ( !this.form.clientTel ) {
        this.fnAlert('전화번호를 입력해주세요 ')
        this.$refs.clientEmail.focus();
      }
      else if ( !this.fnRegTest(this.form.clientTel) ) {
        this.fnAlert('전화번호 형식이 올바르지 않습니다.');
        this.$refs.clientTel.focus();
      }
      else if ( !this.form.agrTm01 ) {
        this.fnAlert('개인정보 수집 및 이용에 관한 동의를 해주세요.');
      }
      else if ( !this.form.agrTm02 ) {
        this.fnAlert('개인정보 제3자 제공에 관한 동의를 해주세요.');
      }
      else {
        this.$store.commit('lenderLookupStore/UPDATE_USER_FORM', this.form);
        this.$store.dispatch('lenderLookupStore/lookupAction');
        this.$router.push('./loading')
      }
    },
    fnBackEvent(event){
      let data = {
        state: true,
        //type:"confirm",
        type:"confirm",
        msg:
          "<h2>상담신청이<br/>완료되지 않았습니다.</h2>" +
          "입력하신 정보로 상담을 원하실 경우 <br/>다음 단계로 이동해주세요.",
        btns: [
          {
            name: "계속하기",
            link: "cancel",
          },
          {
            name: "홈으로 가기",
            link: "/",
          },
        ],
      };
      this.$store.dispatch("ui/setPopupAlertData", data);
    }
  },
  watch:{
    'form.clientTel'(newVal, oldVal) {
      if(isNaN(newVal)){
        this.form.clientTel = oldVal;
      } else if(newVal.length > 11){
        this.form.clientTel = oldVal;
      }
    },
  },
  async beforeMount() {
  
    const bizNo = this.$store.state.lenderLookupStore.companyInfo.bizNo;
    // if( !bizNo )
    //   await this.$router.push("/")

    const tm01 = await this.$axios.get("/html/tm01.html");
    const tm02 = await this.$axios.get("/html/tm02.html");
    this.terms.tm01 = tm01.data;
    this.terms.tm02 = tm02.data;
  },
  mounted() {
    
    this.$store.dispatch('lenderLookupStore/fetchCodes');

    
    window.onpopstate = this.fnBackEvent;
  },
  beforeDestroy() {
    if( this.$route.path !== '/' && this.$route.path !== '/loading'){
      
      this.$router.forward();
    }
  },
};

</script>
