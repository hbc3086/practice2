<template>
  <section class="container guide">
    <article class="g_bx" id="g_bx1">
        <div class="g_left">
          <div class="g_cont">
            <h3>INPUT_CHECK</h3>
            <GCheckBox
              :data="{
                title: '<b>default</b>',
                id: '1',
              }"
            />
            <GCheckBox
              :data="{
                title: '<b>check</b>',
                id: '2',
              }"
            />
            <GCheckBox
              :data="{
                title: '<b>disabled</b>',
                id: '2',
                disabled: true,
              }"
            />
            <h3 class="mt20">INPUT_RADIO</h3>
            <GRadioBox
              :data="{
                title: '<b>default</b>',
                // title:'<b>라디오버튼1</b>',
                id: 1,
                name: 'radio',
              }"
            />
            <GRadioBox
              :data="{
                title: '<b>check</b>',
                // title:'<b>라디오버튼 비활성화</b>',
                id: 2,
                name: 'radio',
              }"
            />
            <GRadioBox
              :data="{
                title: '<b>disabled</b>',
                // title:'<b>라디오버튼 비활성화</b>',
                id: 3,
                name: 'radio',
                disabled: true,
              }"
            />
          </div>
          <div class="g_cont">
            <SelectSearch
              title="INPUT-SELECT_TEXT"
              :list="[
                { name: 'AA' },
                { name: 'AA' },
                { name: 'AA' },
                { name: 'AA' },
              ]"
              :data="{
                placeholder: 'INPUT_TEXT',
              }"
            />
          </div>
        </div>
    </article>
  </section>
</template>

<script>
import GCheckBox from "~/components/common/GCheckBox";
import GRadioBox from "~/components/common/GRadioBox";
import SelectSearch from "~/components/common/SelectSearch";


export default {
  data() {
    return {
      popup: false,
    };
  },
  components: {
    GCheckBox,
    GRadioBox,
    SelectSearch,
  },
  methods: {
  },
};
</script>
