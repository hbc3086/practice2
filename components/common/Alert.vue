<template>
  <div class="popup" v-if="data !== null" :class=" data.type !== undefined ? data.type : 'alert'">
    <div class="p_inner">
      <button class="btn_close" @click="closePopup">닫기</button>
      <div class="content">
        <div class="msg" v-html="data.msg"></div>
      </div>
      <div class="btns" v-if="data.type==='alert'">
        <button v-if="data.btn.link == undefined" @click="closePopup" class="button"><b>{{data.btn.name}}</b></button>
        <nuxt-link v-else :to="data.btn.link" class="button"><b>{{data.btn.name}}</b></nuxt-link>
      </div>
      <div class="btns col2" v-else>
        <div class="col" v-for="(item, i) in data.btns" :key="i">
          <button @click="closePopup" class="button" v-if="item.link=='cancel'">
            <b>{{item.name == undefined? "취소" : item.name}}</b>
          </button>
          <nuxt-link :to="item.link == undefined?'':item.link" class="button" v-else><b>{{item.name}}</b></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: null,
    };
  },
  components: {
  },
  mounted() {
    this.data = this.$store.state.ui.popupAlertData;
    $nuxt.$router.beforeEach((to, from, next) => {
      this.closePopup();
      next();
    });
  },
  methods: {
    closePopup(){
      this.$store.dispatch('ui/setPopupAlertData', {
        state:false,
        type: null,
        title: null,
        msg: null,
        btn:{
          link:'',
          name:null,
        }
      });
    },
  },
};
</script>
