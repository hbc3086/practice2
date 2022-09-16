<template>
  <div class="bx_chk">
    <input type="checkbox" :name="data.name" :id="'chk_'+data.id" :value="data.value" class="chk" :checked="data.checked" :disabled="data.disabled == true?'disabled':false"/>
    <label :for="'chk_'+data.id" :class="classNm" v-html="data.title"></label>
  </div>
</template>
<script>
export default {
	props: ["data", "classNm"],
  methods:{
  }
}
</script>
