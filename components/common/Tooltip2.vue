<template>
  <div class="tooltip type2" :class="{classNm, 'on':state==true}">
    <em class="ico" @click="fnToggle">TIP !</em>
    <div class="desc">
      <button class="btn_close" @click="fnToggle">
        닫기
      </button>
      <div class="bx" v-html="desc"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["desc", "classNm", "type"],
  data() {
    return {
      state:false,
    };
  },
  methods: {
    fnToggle(){
      this.state = !this.state;
    }
    // onpenTooltip(e) {
    //   const tooltipList = document.getElementsByClassName("tooltip");
    //   const target = e.target.parentNode;
    //   const onState = target.classList.contains("on") ? true : false;
    //   Array.prototype.forEach.call(tooltipList, (item) =>
    //     item.classList.remove("on")
    //   );
    //   if (!onState) target.classList.add("on");
    //   else target.classList.remove("on");
    // },
  },
};
</script>
