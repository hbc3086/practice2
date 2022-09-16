<template>
  <aside class="quick_menu">
    <div class="unit">
      <a href="tel:02-2055-0296" class="btn_cs"><b>전화문의</b></a>
      <a href="http://www.namuasset.com/?page_id=7702&mod=list&pageid=1" target="_blank" class="btn_qna"><b>자주묻는질문</b></a>
      <a href="http://www.namuasset.com/?page_id=5909" target="_blank" class="btn_case"><b>컨설팅사례</b></a>
    </div>
    <button class="btn_top"  @click="fnMoveTop()"><b>TOP</b></button>
  </aside>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    fnMoveTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  },  
};
</script>
