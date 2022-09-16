<template>
  <footer>
    <QuickMenu/>
    <div class="inner">
      <h2>(주) 유니콘랜치</h2>
      <ul class="bx_biz">
        <li>
          <span>대표자</span>
          <b>전호</b>
        </li>
        <li class="grow">
          <span>사업자등록번호</span>
          <b>698-87-02015</b>
        </li>
        <li>
          <span>통신판매신고번호</span>
          <b>제 2022-서울영등포-1994호</b>
        </li>
        <li>
          <span>주소</span>
          <b>서울특별시 영등포구 여의대로 108 파크원1, 5층</b>
        </li>
      </ul>
      <div class="coln">
        <h3>고객상담</h3>
        <ul class="bx_cs">
          <li>
            <span>전화</span>
            <a class="link" href="tel:02-2055-0296">02-2055-0296</a>
          </li>
          <li>
            <span>평일</span><span>10:00~18:00 (점심 12:00~13:00)</span> <br />
            <span>주말, 공휴일 휴무</span>
          </li>
        </ul>
        <ul class="bx_email">
          <li>
            <span>이메일</span>
            <a class="link" href="mailto:allok@unicornranch.co.kr"><b>allok@unicornranch.co.kr</b></a>
          </li>
        </ul>
      </div>
      <div class="copy">Copyright(c) Unicornranch Corp. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>
import QuickMenu from "~/components/common/QuickMenu";

export default {
  data() {
    return {
      fix: false,
    };
  },
  components: {
    QuickMenu
  },
  mounted() {
  },
  methods: {
  },
};
</script>
