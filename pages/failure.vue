<template>
  <div class="wrap failure">
    <div class="w_inner type2">
      <section class="wrap_scroll">
        <div class="container">
          <div class="top">
            <div class="ico_fail"></div>
            <h1>
              사업자번호 확인에 실패했어요 <br />입력한 정보를 다시 확인해주세요
            </h1>
          </div>
          <article class="content">
            <div class="img_fail"></div>
            <div class="cont">
              <p>사업자번호를 입력하면</p>
              <p>맞춤형 금융 매칭결과를 받아볼 수 있어요.</p>
            </div>
            <div class="tip">
              <div class="ico_tip"></div>
              <p>사업자번호가 조회되지 않는다면 건너뛰기 버튼을 눌러주세요.</p>
            </div>
          </article>
        </div>
        <div class="area_bottom">
          <div class="inner btns">
            <nuxt-link to="/intro" class="btn_gray">건너뛰기</nuxt-link>
            <button @click="fnShowAlert" class="btn">다시 조회하기</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fnShowAlert() {
      let data = {
        state: true,
        type:"alert",
        msg:
          "<h2>사업자번호 재입력</h2>" +
          "사업자번호를 다시 조회하기 <br/>위해 메인페이지로 이동합니다.",
        btn: {
          name: "확인",
          link: "/",
        },
      };
      this.$store.dispatch("ui/setPopupAlertData", data);
    },
  },
};
</script>
