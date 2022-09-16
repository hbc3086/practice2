<template>
  <div class="wrap">
    <section class="visual">
      <div class="area_searchh">
        <Item
            :data="{
              id: 'form_biz_no',
              type: 'text',
              placeholder: $store.state.ui.view === 'mobile'?  '사업자번호를 입력하세요.':'사업자번호를 입력하세요.(숫자만)',
              btn: true,
              btnNm: '조회하기',
              dot: true,
            }"
            :value.sync="bizNo"
            @enter="fnSearchCompany"
            @onClick="fnSearchCompany"
          />
      </div>
    </section>
    <section class="area1">
      <div class="inner">
        <h2><b class="txt_point">대출가능기관</b> 찾아드립니다!</h2>
        <div class="col3">
          <article class="unit u1">
            <h3>특허가 있는 기업이라면? <br/>기술을 담보로 <br class="tablet"/>대출을 받을수 있어요!</h3>
            <p>특허가 없더라도 <br class="tablet"/>출원, 등록, <br class="mobile"/>매매를 <br class="tablet pc"/>통해 기술담보대출가능!</p>
          </article>
          <article class="unit u2">
            <h3>사업자번호로 <br class="tablet"/>간편하게 조회! <br/>기업대표라면 누구나!</h3>
            <p>사업자등록번호만 입력하면 <br/>대출가능기관 <br class="tablet"/>무료로 확인가능!</p>
          </article>
          <article class="unit u3">
            <h3>기업의 신용도가 <br class="tablet"/>낮아도 <br/>해결방안제시</h3>
            <p>기업재무관리를 통해 <br/>기업신용도 상승 <br class="tablet"/>해결방안제시</p>
          </article>
        </div>
      </div>
    </section>
    <section class="area2">
      <div class="inner colb">
        <div class="col">
          <div class="a_wrap">
            <article class="unit">
              <h2>80,000여 기업 기술분석데이터로  <br/>기업이 보유한 <b>특허의 특허가치평가</b></h2>
            </article>
            <article class="unit">
              <h2>사업자번호만 입력하면  <br/><b>금융기관, 정책자금 자동매칭</b></h2>
            </article>
            <article class="unit">
              <h2>세무, 노무, 법무 <br/><b>기업을 위한 원스톱 관리 서비스 </b></h2>
            </article>
          </div>
        </div>
        <div class="col_img">
          왜  다된다일까요? 내기업 기술력분석정보, 보유특허가치, 기술금융대출 가능기관정보 제공
        </div>
      </div>
    </section>
    <aside class="area_bnr">
      <div class="inner">
        <p>복잡한 기업자금, <b>다된다</b>에서 쉽고, 간편하게!</p>
      </div>
    </aside>
    <section class="area3">
      <div class="inner">
        <article class="unit">
          <h3 class="blind">리스트</h3>
          <ul class="list">
            <li :class="{'on': faq.toggle1==true}">
              <div class="top" @click="fnToggle(1)">
                <div class="left">
                  <h3>기술금융(TCB)이란 무엇인가요?</h3>
                </div>
                <div class="right">
                  <span class="btn_more">더보기</span>
                </div>
              </div>
              <div class="cont">
                자본이 부족하고 낮은 신용등급의 중소기업 기술력을 담보로 저금리로 제공하는 대출이며 2022년 금융권은 4대 은행의 기술신용대출 잔액 이 올해 200조원을 돌파할 것으로 보고 있을정도 로 활성화 되고 있습니다. <br/>
                중소기업이 대출을 신청 하면 은행은 기술신용평가기관(TCB)에 평가를 의뢰해 대출 여부를 결정하게 됩니다.
              </div>
            </li>
            <li :class="{'on': faq.toggle2==true}">
              <div class="top" @click="fnToggle(2)">
                <div class="left">
                  <h3>기업 신용도가 낮은데도 가능할까요?</h3>
                </div>
                <div class="right">
                  <button class="btn_more">더보기</button>
                </div>
              </div>
              <div class="cont">
                네, 가능합니다. 2019년 특허청 자료에 의하면 IP담보대출 기업의 신용등급은 최저 B-등급부터 최고 BBB+등급(9개 등급)까지 분포됐고 이 중 신용등급이 높지 않은 BB+등급 이하 기업에 대한 대출이 90.7%를 차지, 신용등급이 높지 않은 기업도 다수 대출을 받을 수 있는것으로 확인되었습니다. <br/>
                또한, 다된다에서는 기업신용도를 상승시킬수 있는 솔루션을 함께 제공합니다.
              </div>
            </li>
            <li :class="{'on': faq.toggle3==true}">
              <div class="top" @click="fnToggle(3)">
                <div class="left">
                  <h3>특허가 없는데 TCB대출이 가능할까요?</h3>
                </div>
                <div class="right">
                  <button class="btn_more">더보기</button>
                </div>
              </div>
              <div class="cont">
                기술금융대출은 특허가 없어도 기업이 보유한 기업의 기술력이 인정되면, 기술력을 담보로 대출 이 가능합니다. <br/>
                다된다에서는 상담신청을 통해 기업기술력분석을 무료로 해드리고 있습니다.
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Item from '~/components/common/ItemForm.vue';

export default {
  name: "index",
  head() {
    return {
      title: "중소기업대출 | 다된다",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Item,
  },
	data() {
    return {
      base_link:'lookup',
      referer: null,
      view: "",
      btnFix: false,
      aniInfo:{
        visual: {
          h1:"false",
          h2:"false",
          p:"false",
        },
        area2:"false",
      },
      faq: {
        toggle1 : false,
        toggle2 : false,
        toggle3 : false,
      },
      swiperOption: {
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        loop: true,
        touchRatio: 0,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false
        },
        effect: "fade",
        speed: 300,
        navigation: false,
        pagination: {
          el: ".sw_pagination",
          clickable: true,
        },
      },
      bizNo:null
    }
	},
  computed: {
    link() {
      if (this.path) {
        return this.base_link + '?path=' + this.path;
      }
      return this.base_link;
    },
    companyInfo(){
      return this.$store.state.lenderLookupStore.companyInfo;
    }
  },
  mounted(){
    this.view = this.$store.state.ui.view;
    this.fnStartVisualAni();
    window.addEventListener("scroll", () => {
      if(this.$route.path == "/"){
        let target = document.querySelector(".visual").clientHeight;
        if(target < window.scrollY ){
          this.fnEndVisualAni();
        }else{
          if(!document.querySelector(".visual h1.animate__animated").classList.contains("animate__fadeInDown")){
            this.fnStartVisualAni();
          }
        }
        let target2 = (document.querySelector(".area1").offsetTop );
        target2 -= this.$store.state.ui.view == "pc" ? 55 : 0;
        if(window.scrollY > target2){
          this.fnStartAni("area2");
        }else{
          this.fnEndAni("area2");
        }
      }
    });

    this.$store.commit('lenderLookupStore/CLEAR')

    this.$store.commit('lenderLookupStore/UPDATE_CAMPAIGN_CD', this.$route.query);

    window.onpopstate = null;
  },
  updated(){
    this.view = this.$store.state.ui.view;
  },
  methods:{
    fnAlert(message){
      let data = {
        state: true,
        type:"alert",
        msg: message,
        btn: {
          name: "닫기",
        },
      };
      this.$store.dispatch("ui/setPopupAlertData", data);
    },
    async fnSearchCompany(){
      if(isNaN(this.bizNo)){
        this.fnAlert('<h2>사업자번호 입력오류</h2>숫자만 입력해주세요')
      } else if (this.bizNo === null || this.bizNo.length != 10){
        this.fnAlert('<h2>사업자번호 입력오류</h2>10자리 숫자의<br/>사업자번호를 입력해주세요')
      } else {
        await this.$store.commit('lenderLookupStore/UPDATE_COMPANY_INFO', {bizNo:this.bizNo})
        const result = await this.$store.dispatch('lenderLookupStore/companyInfoAction');
        if(result.success){
          await this.$router.push("/intro")
        }else{
          if(result.error.cd==='2001'){
            await this.$router.push("/failure")
          } else if(result.error.cd==='2100'){
            this.fnAlert('<h2>전화문의 요청</h2>해당업종은 현재<br/>전화문의만 가능합니다.')
          } else {
            this.fnAlert('알수 없는 문제가 발생했습니다.')
          }
        }
      }
    },
    fnToggle(i){
      this.faq["toggle"+i] = !this.faq["toggle"+i];
    },
    fnStartVisualAni(){
			if(this.aniInfo.visual.h1 == "hide"){
        this.aniInfo.visual.h1 = "false";
        this.aniInfo.visual.h2 = "false";
        this.aniInfo.visual.p = "false";
      }
      this.aniInfo.visual.h1 = "true";
      this.aniInfo.visual.h2 = "true";
      this.aniInfo.visual.p = "true";
    },
    fnEndVisualAni(){
			if(this.aniInfo.visual.h1 == "hide"){
        this.aniInfo.visual.h1 = "false";
        this.aniInfo.visual.h2 = "false";
        this.aniInfo.visual.p = "false";
      }
      this.aniInfo.visual.h1 = "hide";
      this.aniInfo.visual.h2 = "hide";
      this.aniInfo.visual.p = "hide";
    },
    fnStartAni(name){
			if(this.aniInfo[name] == "true") this.aniInfo[name] = "false";
      this.aniInfo[name] = "true";
    },
    fnEndAni(name){
			if(this.aniInfo[name] == "false") this.aniInfo[name] = "true";
      this.aniInfo[name] = "false";
    }
  },
  watch:{
    bizNo(newVal, oldVal){
      if(isNaN(newVal)){
        this.bizNo = oldVal;
      } else if(newVal && newVal.length > 10){
        this.bizNo = oldVal;
      }
    }
  }
}
</script>
