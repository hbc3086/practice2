<template>
  <section class="wrap sub complete">
    <div class="w_inner type2">
      <section class="wrap_scroll">
      <div class="top">
        <h1><b>상담신청 완료!</b><br />전문상담원이 곧 연락드릴게요</h1>
      </div>
        <article class="content">
          <ul class="list">
            <li>
              <h3>다된다 금융매칭 진행과정</h3>
              <div class="cont img_appli1">
                1.기업정보조회 2.상담신청 3.맞춤상담 특허분석리포트,
                비상장주식가치 평가 4.전문가매칭 프로젝트진행 5.기업관리
                토탈솔루션 제공
              </div>
            </li>
          </ul>
          <ul class="list">
            <li>
              <h3>상담하면 2가지 리포트가 무료!</h3>
            </li>
          </ul>
          <div class="bx col2">
            <div class="col">
              <img
                :src="$store.state.ui.url + '/img/sub/img_appli2.png?v=1'"
                alt="재무제표 이미지"
                onclick="window.open('../CASAB0401/', '재무제표 경영평가 리포트', 'width=1180, height=1600, fullscreen=yes, location=no, menubar=no, titlebar=no, toolbar=no, scrollbars=yes, resizable=no')"
              />
              <span>재무제표 <br />경영평가 리포트</span>
              <button
                onclick="window.open('../CASAB0401/', '재무제표 경영평가 리포트', 'width=1180, height=1600, fullscreen=yes, location=no, menubar=no, titlebar=no, toolbar=no, scrollbars=yes, resizable=no')"
                class="btn2"
              >
                샘플보기
              </button>
            </div>
            <div class="col">
              <img
                :src="$store.state.ui.url + '/img/sub/img_appli3.png'"
                alt="분석 리포트 이미지"
                onclick="window.open('../CASAB0402/', '재무제표 경영평가 리포트', 'width=1180, height=1600, fullscreen=yes, location=no, menubar=no, titlebar=no, toolbar=no, scrollbars=yes, resizable=no')"
              />
              <span>기술력 <br />분석 리포트</span>
              <button
                onclick="window.open('../CASAB0402/', '재무제표 경영평가 리포트', 'width=1180, height=1600, fullscreen=yes, location=no, menubar=no, titlebar=no, toolbar=no, scrollbars=yes, resizable=no')"
                class="btn2"
              >
                샘플보기
              </button>
            </div>
          </div>
        </article>

      <div class="area_bottom">
        <div class="inner">
          <nuxt-link to="/" class="btn">홈으로</nuxt-link>
          <!--
          <button @click="fnShowAlert" class="btn">홈으로</button>
          -->
        </div>
      </div>
    </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "complete",
  mounted() {
    window.onpopstate = null;
  },
  methods: {
    fnShowAlert() {
      this.txtAlert = !this.txtAlert;
      let data = {
        state: true,
        type:"confirm",
        msg:
          "<h2>상담신청이 <br/>완료되었습니다.</h2>" +
          "입력하신 정보로 상담을 원하실 경우 <br/>다음 단계로 이동해주세요.",
        btns: [{ //취소지만 텍스트가 다른경우
          name: "계속하기",
          link: "cancel",
        },
        // { 취소 버튼
        //   link: "cancel",
        // },
        {
          name: "홈으로가기",
          link: "/",
        }],
      };
      this.$store.dispatch("ui/setPopupAlertData", data);
    },
  },
};
</script>
