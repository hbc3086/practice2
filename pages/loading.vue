<template>
  <div class="wrap loading">
    <div class="w_inner type2">
      <section class="wrap_scroll">
        <div class="container">
          <div class="top">
            <h1>
              <p>
                <b class="txt_point_line">{{ companyInfo.compNm }}</b> 대표님을 위한 <br/>정책자금을 찾고 있어요
              </p>
            </h1>
          </div>
          <article>
            <div class="bx_lading">
              <transition name="fade" :key="btnState">
                <span>{{btnState?'매칭 완료':'매칭 중…'}}</span>
              </transition>
            </div>
            <div class="area_finance">
              <div slot="pagination" class="sw_pagination ac"></div>
              <button class="btn_prev">이전</button>
              <button class="btn_next">다음</button>
              <swiper class="sw_finance" ref="swiper" :options="swiperOption">
                <swiper-slide class="item" v-for="(i,idx) in examples" :key="idx">
                  <div class="i_top">
                    <div class="bx_label">
                      <span class="txt_label gray">{{i.tag1}}</span>
                      <span class="txt_label">{{i.tag2}}</span>
                      <span class="txt_label red">{{i.tag3}}</span>
                    </div>
                    <h3><b>{{i.title}}</b></h3>
                    <!-- <dl class="label_finance">
                      <dt>지원금 {{i}}</dt>
                      <dd>10억 지원</dd>
                    </dl> -->
                  </div>
                  <div class="i_cont">
                    <p v-html="i.text">-</p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </article>
          <div class="area_bottom">
            <div class="inner">
              <nuxt-link to="/confirm4" class="btn" :class="{'dis': btnState == false}">결과보기</nuxt-link>
            </div>
          </div>
        <!-- <nuxt-link to="/confirm4" class="btn dis">결과보기</nuxt-link> -->
        <!-- <button  class="btn" :disabled="btnState == false">결과보기</button> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "confirm",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 300,
        navigation: {
          prevEl: ".btn_prev",
          nextEl: ".btn_next",
        },
        pagination: {
          el: ".sw_pagination",
          clickable: true,
        },
      },
      examples:[
        {
          title: 'TCB기술금융 매칭사례',
          tag1: 'Kibo-star 밸리 보증',
          tag2: '정보통신업',
          tag3: '3억원',
          text: '먼저, 다된다 컨설턴트님께 너무 감사합니다.<br/>' +
            '코로나로 인해서 너무 힘들고 고된 시간이었습니다.<br/>' +
            '믿을건 기술 하나뿐인데.. 회사 운영자금은 턱없이 부족하고..<br/>' +
            '회사 연혁이 오래되지 않아 금융권 대출이 어렵다 합니다.<br/>' +
            '어려움이 이만저만 아니였습니다.<br/>' +
            '다된다에서 TCB대출을 연계해주셔서 한시름 놓았습니다',
        },
        {
          title: 'IP평가보증 매칭사례',
          tag1: 'IP평가보증',
          tag2: '제조업',
          tag3: '4억 5천만원',
          text: '운이 좋아 특허는 예상보다 빨리 등록했는데, \n' +
            '정작 대출이 되지 않아 사업하기 너무 어려웠어요. \n' +
            '기업대출 한참 찾다가 다된다에서 IP평가보증이란게 있다는 걸 처음 알았어요. \n' +
            '혼자라면 하기 힘들었을 텐데 전문 상담원, 컨설턴트님들만 믿고 따랐더니 \n' +
            '운전자금으로 4억 5천 수월하게 받았습니다. 감사합니다!!',
        },
        {
          title: 'IP인수자금 매칭사례',
          tag1: 'IP인수자금',
          tag2: '과학 및 기술서비스업',
          tag3: '7억원',
          text: '요즘 계속 특허가 중요하다 중요하다 소리만 들었지\n' +
            '막상 기술특허 관련해서 알아보니 준비서류에서부터 절차가 너무 복잡했어요.\n' +
            '찾아보다가 다된다에 문의해보니 IP인수보증이라는 제도를 말씀해주셨어요.\n' +
            '다된다 컨설턴트님께서 복잡하지 않게 처음부터 끝까지 모두 진행해주셨어요.\n' +
            '특허와 자금 두마리 토끼 모두 잡았어요.',
        },
        {
          title: '창업자금 매칭사례',
          tag1: '청년창업기업자금',
          tag2: '교육서비스업',
          tag3: '1억원',
          text: '예전부터 생각했던 사업아이템으로 일단 사업을 시작하긴 했는데\n' +
            '생각보다 자본이 많이 들어가네요.\n' +
            '회사가 자리를 잡기 전이라 기업대출은 전혀 안 나오고\n' +
            '개인신용대출이라도 받아야 되나 고민하다\n' +
            '지푸라기라도 잡는 심정으로 상담신청 했어요.\n' +
            '다된다 덕분에 청년전용창업자금 지원받았어요.\n' +
            '들숨에 건강을 날숨에 재력을',
        },
        {
          title: '기업 시설자금 매칭사례',
          tag1: '시설자금',
          tag2: '제조업',
          tag3: '10억원',
          text: '생산설비에 문제가 생겨서 새기계를 사야되는데\n' +
            '목돈 나올 구멍은 없고 주위에 빌리려고 해도 \n' +
            '한두푼도 아니라 눈앞이 캄캄하더라고요.\n' +
            '발에 불이 나게 발품 팔아봤지만 허탕만 쳤습니다.\n' +
            '다된다에 상담 신청하니까 바로 연락주시고 \n' +
            '착착 진행해 주셔서 빠르게 시설자금을 받을 수 있었습니다.\n' +
            '담당자님 복받으세요.',
        }
      ],
      timedOut:false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    companyInfo(){
      return this.$store.state.lenderLookupStore.companyInfo;
    },
    lookupResult(){
      return this.$store.state.lenderLookupStore.lookupResult;
    },
    btnState(){
      return this.timedOut && (this.lookupResult !== null)
    }
  },
  mounted() {
    setTimeout(()=>{
      this.timedOut = true;
    }, 3000)
  },
};
</script>
