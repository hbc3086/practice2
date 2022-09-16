<template>
  <div class="bx_radio">
    <input type="radio" :id="data.name+'_'+data.id" :name="data.name" :value="data.value" class="radio" :checked="data.value === data.defaultValue" @click="fnChange" :disabled="data.disabled"/>
    <label :for="data.name+'_'+data.id">{{data.title}}</label>
  </div>
</template>
<script>
export default {
	props: ["data"],
  methods:{
    fnChange(e){
      const payload = {
        name: this.data.name,
        value: this.data.value,
      }
      this.$emit('change', payload)
    }
  }
}
</script>
