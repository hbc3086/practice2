<template>
  <div class="wrap confirm4">
    <QuickMenu/>
    <div class="w_inner">
      <div class="bx_step">
        <span class="item done"><em>1</em></span>
        <span class="item done"><em>2</em></span>
        <span class="item done"><em>3</em></span>
        <span class="item on"><em>4</em></span>
      </div>
      <div class="top">
        <h1>
          <b>정확한 매칭을 위해<br />추가 정보가 필요해요</b>
        </h1>
        <p class="desc">
          입력한 정보에 따라 더 유리한 혜택을 알려드릴 수 있어요
        </p>
      </div>
      <div class="asdf">
        <div class="a1">
          <img src="https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/test/study/allokpractice/img/%EC%95%84%EC%9D%B4%EC%BD%98-2.svg">
          <div class="step">STEP01</div>
          <div class="text">금융방식 매칭</div>
        </div>
        <div class="a2">
          <img src="https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/test/study/allokpractice/img/%EC%95%84%EC%9D%B4%EC%BD%98-1.svg">
          <div class="step">STEP02</div>
          <div class="text">금융기관 매칭</div>
        </div>
        <div class="a3">
          <img src="https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/test/study/allokpractice/img/%EC%95%84%EC%9D%B4%EC%BD%98.svg">
          <div class="step">STEP03</div>
          <div class="text">정책자금 매칭</div>
        </div>
      </div>
      <section class="list_finance">
        <article class="item" v-for="i in 1" :key="i">
          <div class="bx_label">
            <span class="txt_label">TCB기술금융</span>
            <span class="txt_label grean">정부정책자금</span>
            <span class="txt_label orange">IP금융</span>
          </div>
          <h3>시니어기술 창업자금</h3>
          <div class="col2">
            <dl class="col">
              <dt>지원한도</dt>
              <dd><b>최소 7천만원</b></dd>
            </dl>
            <dl class="col">
              <dt>대출기간</dt>
              <dd>기관별 상이</dd>
            </dl>
          </div>
          <div class="col2">
            <dl class="col">
              <dt>보증비율</dt>
              <dd>95%</dd>
            </dl>
            <dl class="col">
              <dt>보증료</dt>
              <dd><b>연 0.8%</b></dd>
            </dl>
          </div>
          <dl>
            <dt>금융기관</dt>
            <dd>신용보증재단</dd>
          </dl>
          <dl>
            <dt>비고</dt>
            <dd>대표자가 대기업·중견기업·정부출연연구소 경력 보유자, 기술사, 이공계  석·박사 학위 보유자</dd>
          </dl>
        </article>
      </section>
      <div class="area_bottom">
        <div class="inner">
          <button class="btn" @click="fnConsultingReq">매칭시작</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuickMenu from "~/components/common/QuickMenu";

export default {
  name: "confirm",
  // head() {
  //   return {
  //     title: "중소기업대출 | 다된다",
  //   };
  // },
  data() {
    return {
    };
  },
  components: {
    QuickMenu
  },
  mounted() {},
};
</script>
