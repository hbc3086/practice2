let Setting = {
  data() {
    return {
      device: "pc",
      view: "mobile",
    };
  },
  beforeMount() {
    this.settingDevice();
  },
  mounted() {
    window.addEventListener("resize",() => {
      this.settingDevice();
    },true);
  },
  update(){
    this.settingDevice();
  },
  methods: {
    settingDevice() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.device = "mobile";
      } else {
        this.device = "pc";
      }
      this.view = window.innerWidth >= 1280? "pc" : window.innerWidth >= 768 ? "tablet" : "mobile";
      if (this.$store.state.ui.view === "pc" && (this.view === "tablet" || this.view === "mobile")) {
        this.$store.dispatch("ui/setView", this.view);
        this.$store.dispatch("ui/setDevice", this.device);
        $nuxt.$router.go();
        return;
      }
      if (this.$store.state.ui.view !== this.view) {
        this.$store.dispatch("ui/setView", this.view);
      }
      if (this.$store.state.ui.device !== this.device) {
        this.$store.dispatch("ui/setDevice", this.device);
      }
    }
  },
  mounted() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }
};
export default Setting; 
