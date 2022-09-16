<template>
  <div :class="[('bx_'+shape), classNm]" :style="{width: data.width}">
    <input v-if="shape=='file'" type="file" @change="fnUpload" class="ipt_file" ref="ipt_file" id="file" :placeholder="data.placeholder" :disabled="data.disabled == true?'disabled':false"/>
    <input v-else :type="type" class="ipt" ref="ipt" :id="data.id" v-model="value" :placeholder="data.placeholder" :disabled="data.disabled == true?'disabled':false"/>
    
    <span v-if="shape=='file'" class="file_name"><em>파일선택</em>{{fileNm}}</span>
    
    <button v-if="shape=='ipt'" class="btn_remove" @click="fnRemove" :disabled="data.disabled == true?'disabled':false">지우기</button>
    <button v-else-if="shape=='search'" class="btn_search" :disabled="data.disabled == true?'disabled':false">지우기</button>
    <label for="file" v-else class="btn_file">파일선택</label>
  </div>
</template>
<script>
export default {
	props: ["data", "classNm"],
  data(){
    return {
      shape: this.data.shape || "ipt",
      type: this.data.type || "text",
      value: "",
      fileNm: this.data.placeholder || "",
    }
  },
  methods:{
    fnRemove(){
      this.value = "";
      this.$refs.ipt.focus();
    },
    fnUpload(e){
      try {
        let files = e.target.files || e.dataTransfer.files;
        this.fileNm = files[0].name || ""; 
      } catch (e) {
        this.fileNm = ""; 
      }
    }
  }
}
</script>
