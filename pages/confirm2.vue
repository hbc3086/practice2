<template>
  <div class="wrap confirm2">
    <div class="w_inner type2">
      <div class="bx_step">
        <span class="item done"><em>1</em></span>
        <span class="item on"><em>2</em></span>
        <span class="item"><em>3</em></span>
        <span class="item"><em>4</em></span>
      </div>
      <section class="wrap_scroll">
        <div class="top">
          <h1>
            <b>정확한 매칭을 위해<br />추가 정보가 필요해요</b>
          </h1>
          <p class="desc">
            입력한 정보에 따라 더 유리한 혜택을 알려드릴 수 있어요
          </p>
        </div>
        <div class="area2">
          <ul class="list">
            <li>
              <h3 class="tit">
                <span>대표님의 연령을 알려주세요.</span>
                <Tooltip2 desc="만 39세 미만 대표님을 위한 우대상품이 있어요."/>
              </h3>
              <div class="tip">
                <span class="ico_tip"></span><span>만 39세 미만 대표님을 위한 우대상품이 있어요.</span>
              </div>
              <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: fnCodeList('prstAgeCd'),
                  full: true && $store.state.ui.view === 'mobile',
                }"
                @onChange="fnFormChange"
                ref="prstAgeCd"
              />
              <!-- <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: [
                    {
                      title: '만 39세 미만',
                      name: 'ageYn',
                      defaultValue: true,
                    },
                    {
                      title: '만 39세 이상',
                      name: 'ageYn',
                    },
                  ],
                }"
              /> -->
            </li>
            <li>
              <h3 class="tit">
                <span>근무하는 직원수를 알려주세요.</span>
                <Tooltip2 desc="상시근로자 수에 따라 금융기관이 달라져요."/>
                <span class="txt_mint">(대표님을 제외한 상시근로자 수)</span>
              </h3>
              <div class="tip">
                <span class="ico_tip"></span><span>상시근로자 수에 따라 금융기관이 달라져요.</span>
              </div>
              <!-- <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: fnCodeList('empNumCd'),
                  full: true && $store.state.ui.view === 'mobile',
                }"
                @onChange="fnFormChange"
                ref="empNumCd"
              /> -->
              <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: [
                    {
                      title: '5인 미만',
                      name: 'numYn',
                    },
                    {
                      title: '5인 이상~10인 미만',
                      name: 'numYn',
                    },
                    {
                      title: '10인 이상',
                      name: 'numYn',
                    },
                    {
                      title: '잘 모르겠어요',
                      name: 'numYn',
                    },
                  ],
                }"
              />
            </li>
            <li>
              <h3 class="tit">
                최근 6개월 이내 고용증가가 있었거나, 향후 6개월 이내 고용계획이
                있으신가요?
                <span class="another"><Tooltip2 desc="고용증가 및 고용계획이 있을 시 지원 가능한 상품이 추가돼요."/></span>
              </h3>
              <div class="tip">
                <span class="ico_tip"></span><span>고용증가 및 고용계획이 있을 시 지원 가능한 상품이 추가돼요.</span>
              </div>
              <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: [
                    {
                      title: '네, 있어요',
                      name: 'planYn',
                    },
                    {
                      title: '잘 모르겠어요',
                      name: 'planYn',
                    },
                  ],
                  full: true && $store.state.ui.view === 'mobile',
                }"
              />
              <!-- <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: fnCodeList('hireCd'),
                  full: true && $store.state.ui.view === 'mobile',
                }"
                @onChange="fnFormChange"
                ref="hireCd"
              /> -->
            </li>
            <li>
              <h3 class="tit">
                <span>회사에 맞는 특허를 추천해드릴까요?</span>
                <Tooltip2 desc="특허인수를 통해 IP금융으로 자금혜택을 받을 수 있어요."/>
              </h3>
              <div class="tip">
                <span class="ico_tip"></span><span>특허인수를 통해 IP금융으로 자금혜택을 받을 수 있어요.</span>
              </div>
              <Item
                :data="{
                  type: 'radio',
                  title: '',
                  list: fnCodeList('techRcmCd'),
                  full: true && $store.state.ui.view === 'mobile',
                }"
                @onChange="fnFormChange"
                ref="techRcmCd"
              />
            </li>
          </ul>
        </div>
        <div class="area_bottom">
          <div class="inner">
            <button class="btn" @click="fnNextStep">다음</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Item from "~/components/common/ItemForm.vue";
import CheckBox from "~/components/common/CheckBox.vue";
import Alert from "~/components/common/Alert.vue";
import Tooltip2 from "@/components/common/Tooltip2.vue";

export default {
  name: "confirm2",
  components: {
    Item,
    Alert,
    CheckBox,
    Tooltip2,
  },
  data() {
    return {
      codeKeyNameMap : {
        prstAgeCd: 'ETC300',
        techRcmCd: 'ETC400',
        hireCd: 'ETC200',
        empNumCd: 'ETC100',
      }
    }
  },
  methods: {
    fnFormChange(data) {
      this.$store.commit('lenderLookupStore/UPDATE_USER_FORM', {
        [data.name]: data.value
      })
    },
    fnCodeList(name){
      const key = this.codeKeyNameMap[name];
      const codes = this.$store.state.lenderLookupStore.codes[key];
      const defaultValue = this.$store.state.lenderLookupStore.userForm[name];
      return codes ?
        codes.map(c => {
          return {
            ...c,
            name: name,
            defaultValue: defaultValue,
          }
        }) : []
    },
    fnNextStep() {
      const userForm = this.$store.state.lenderLookupStore.userForm;
      if( !userForm.prstAgeCd ){
        this.fnAlert('대표님의 연령을 알려주세요.');
      }
      else if( !userForm.empNumCd ) {
        this.fnAlert('근무하는 직원수를 알려주세요.');
      }
      else if( !userForm.hireCd ) {
        this.fnAlert('최근 6개월 이내 고용증가가 있었거나, 향후 6개월 이내 고용계획이 있으신가요?');
      }
      else if( !userForm.techRcmCd ) {
        this.fnAlert('회사에 맞는 특허를 추천해드릴까요?');
      }
      else {
        this.$router.push('./confirm3')
      }
    },
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
    fnBackEvent(event){
      let data = {
        state: true,
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
  async beforeMount() {
    const bizNo = this.$store.state.lenderLookupStore.companyInfo.bizNo;
    // if( !bizNo )
    //   await this.$router.push("/")
  },
  mounted() {
    this.$store.dispatch('lenderLookupStore/fetchCodes');

    window.onpopstate = this.fnBackEvent;
  },
  beforeDestroy() {
    if( this.$route.path === '/confirm' || this.$route.path==='/failure'){
      this.$router.forward();
    }
  },
};
</script>
