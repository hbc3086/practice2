<template>
  <div class="app" :class="page"  oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
    <nuxt/>
     <transition name="fade">
       <Alert v-if="$store.state.ui.popupAlertData.state === true"/>
     </transition>
  </div>
</template>

<script>
import Setting from "~/mixins/Setting";
import Footer from "~/components/layouts/Footer";
import Alert from "~/components/common/Alert";

export default {
  name: "layout",
  components: {
    Footer,
    Alert
  },
  mixins: [Setting],
  head() {
    return {
      title: "중소기업대출 | 다된다",
    };
  },
  computed: {
    page: function () {
      return this.$nuxt.$route.path === "/" ? 'main' : 'sub';
    },
  },
  methods: {

  }
};
</script>
