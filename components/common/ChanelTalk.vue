<template>
  <button id="chanelTalkBtn">ChanelTalk</button>
</template>

<script>
export default {
  data(){
    return {
      chanelService: null
    }
  },
  mounted() {
    if(process.client){
      var w = window;
      if (w.ChannelIO) {
        // return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
      } else {
        var ch = function() {
          ch.c(arguments);
        };
        ch.q = [];
        ch.c = function(args) {
          ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
          if (w.ChannelIOInitialized) {
            return;
          }
          w.ChannelIOInitialized = true;
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
          s.charset = 'UTF-8';
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        }
        if (document.readyState === 'complete') {
          l();
        } else if (window.attachEvent) {
          window.attachEvent('onload', l);
        } else {
          window.addEventListener('DOMContentLoaded', l, false);
          window.addEventListener('load', l, false);
        }
      }

      window.ChannelIO('boot', {
        "pluginKey": "7b1a74ae-60cd-45cf-abc8-78a126a2a034", //please fill with your plugin key
        "customLauncherSelector": "#chanelTalkBtn",
        "hideChannelButtonOnBoot": true
      });
    }
  },
  beforeDestroy() {
    if(process.client) {
      window.ChannelIO('shutdown');
    }
  }
}
</script>
