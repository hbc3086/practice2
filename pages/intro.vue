<template>
  <div class="wrap intro">
    <div class="w_inner type2">
      <section class="wrap_scroll">
        <div class="container">
          <div class="top">
            <h1><b class="txt_point3">유니콘랜치</b> 대표님, 안녕하세요!</h1>
            <p>
              <b>다된다</b>가 가장 적합한 자금혜택을<br />
              매칭해드릴게요
            </p>
          </div>
          <article class="content">
            <div class="img_intro"></div>
            <p><b>다된다</b>는 <br />기업현황(기술, 재무)을 조회하여</p>
            <div class="img_intro2"></div>
            <p>총 3가지 방식으로 <br /><b>기업에 최적화된 대출</b>을 매칭합니다.</p>
          </article>
          <div class="area_bottom">
            <div class="inner">
              <nuxt-link to="/confirm" class="btn">시작하기</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async beforeMount() {
    const bizNo = this.$store.state.lenderLookupStore.companyInfo.bizNo;
    // if( !bizNo )
    //   await this.$router.push("/")
  },
  mounted() {
    window.onpopstate = null;
  }
};
</script>
