<template>
  <div class="wrap confirm4">
    <div class="w_inner">
      <div class="bx_step">
        <span class="item done"><em>1</em></span>
        <span class="item done"><em>2</em></span>
        <span class="item done"><em>3</em></span>
        <span class="item on"><em>4</em></span>
      </div>
      <div class="top">
        <h1>
          <p>
            <b class="txt_point_line">{{ companyInfo.compNm }}</b> 에서 신청 가능한 <br/>
            총 <b class="txt_point">{{ productLength }}</b>개의 금융지원을 발견했어요
          </p>
        </h1>
      </div>
      <section class="list_finance">
        <article class="item" v-for="product in productList" :key="product.loadnPrdcNo">
          <div class="bx_label">
            <span class="txt_label" v-if="type.tcb">TCB기술금융</span>
            <span class="txt_label grean" v-if="type.org">정부정책자금</span>
            <span class="txt_label orange" v-if="type.ip">IP금융</span>
          </div>
          <h3>{{product.loanPrdcNm}}</h3>
          <dl>
            <dt>지원한도</dt>
            <dd><b>{{ product.aplcLmt }}</b></dd>
          </dl>
          <div class="col2">
            <dl class="col" v-if="product.displayRate">
              <dt>보증비율</dt>
              <dd>{{product.grntRate ? product.grntRate : '-'}}</dd>
            </dl>
            <dl class="col" v-if="product.displayFeeRate">
              <dt>보증료율</dt>
              <dd><b>{{product.grntFeeRate ? product.grntFeeRate : '-'}}</b></dd>
            </dl>
            <dl class="col" v-if="product.displayLoanIntrRate">
              <dt>대출금리</dt>
              <dd><b>{{product.loanIntrRate ? product.loanIntrRate : '-'}}</b></dd>
            </dl>
          </div>
          <dl>
            <dt>대출기간</dt>
            <dd>{{product.loanTerm}}</dd>
          </dl>
          <dl>
            <dt>금융기관</dt>
            <dd>{{ product.loanPrdcFnncInstType }}</dd>
          </dl>
          <dl>
            <dt>비고</dt>
            <dd>{{ product.loanPrdcDesc }}</dd>
          </dl>
        </article>
      </section>
      <div class="area_bottom">
        <div class="inner">
          <h3>지금 상담신청하고 <b class="txt_point">최적의 혜택</b>으로 <br/><b class="txt_point">자금지원</b> 받으세요!</h3>
          <p>(시설자금은 상담을 통해 자세히 안내해드려요)</p>
          <button class="btn" @click="fnConsultingReq">상담신청</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "confirm",
  data() {
    return {
    };
  },
  computed: {
    productList() {
      const productResult = this.$store.state.lenderLookupStore.lookupResult.productResult;
      if(productResult && productResult.success){
        return productResult.data.map( d => {
          let displayRate = true;
          let displayFeeRate = true;
          let displayLoanIntrRate = false;
          if( d.grntRate === null && d.grntFeeRate === null){
            displayRate = false;
            displayFeeRate = false;
            displayLoanIntrRate = true;
          }
          else if( d.grntRate !== null && d.grntFeeRate && d.loanIntrRate !== null) {
            displayRate = true;
            displayFeeRate = false;
            displayLoanIntrRate = true;
          }
          return {
            ...d,
            displayRate,
            displayFeeRate,
            displayLoanIntrRate,
          }
        });
      }
      return [];
    },
    productLength(){
      return this.productList.length;
    },
    type(){
      return this.$store.getters["lenderLookupStore/productType"];
    },
    companyInfo(){
      return this.$store.state.lenderLookupStore.companyInfo;
    },
  },
  methods:{
    async fnConsultingReq(){
      const success = await this.$store.dispatch('lenderLookupStore/requestConsulting');
      if(success){
        await this.$router.push('./complete')
      } else {

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
    if( this.$route.path !== '/' && this.$route.path !== './confirm3'){

      this.$router.forward();
    }
  },
};
</script>
