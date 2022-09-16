<template>
  <div class="bx_radio">
    <input type="radio" :id="data.name+'_'+data.id" :name="data.name" class="radio" :checked="data.value === data.defaultValue" :disabled="data.disabled == true?'disabled':false"/>
    <label :for="data.name+'_'+data.id" v-html="data.title"></label>
  </div>
</template>
<script>
export default {
	props: ["data"],
  methods:{
  }
}
</script>
