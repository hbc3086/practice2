<template>
  <div
    class="f_item"
    :class="{ colb: data.btn, col: classNm == 'col' }"
    v-if="data.type === 'text'"
  >
    <label :for="'ipt' + data.id" class="tit" :class="{ dot: data.dot }"
      ><span>{{ data.title }}</span></label
    >
    <input
      :type="data.type === undefined ? 'text' : data.type"
      class="ipt"
      :id="'ipt' + data.id"
      :placeholder="data.placeholder"
      :value="value"
      ref="input"
      @input="$emit('update:value', $event.target.value)"
      @keyup.enter="onEnter"
      @change="onChange"
      :disabled="disabled"
    />
    <button v-if="data.btn" class="btn" @click="onClickBtn">{{ data.btnNm }}</button>
  </div>
  <div class="f_item item_radio" v-else>
    <div class="tit" :class="{ full: data.full, dot: data.dot }">
      <span>{{ data.title }}</span>
    </div>
    <div class="col">
      <Radio v-for="(item, i) in data.list"
             :key="data.title+'_'+i"
             :data="{...item, id:i}"
             @change="onRadioChange"
      />
    </div>
  </div>
</template>
<script>
import Radio from "~/components/common/RadioBox.vue";

export default {
  props: ["data", "value", "classNm", "disabled"],
  data() {
    return {};
  },
  methods: {
    onEnter(){
      this.$emit("enter", {
        name: this.data.name,
        value: this.value
      });
    },
    onChange(e) {
      this.$emit("onChange", {
        name: this.data.name,
        value: e.target.value,
      });
    },
    onClickBtn() {
      this.$emit("onClick", Math.random());
    },
    onRadioChange(e) {
      this.$emit("onChange", e);
    },
    focus() {
      this.$refs.input.focus();
    },
  },
  components: {
    Radio,
  },
};
</script>
