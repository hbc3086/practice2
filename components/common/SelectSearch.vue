<template>
	<div class="slct_search" :class="classNm" :style="{width: width}">
		<button class="s_tit" type="button" @click="toggleSlct">{{tit}}</button>
		<div class="s_cont">
			<Input
				:data="{ type: 'text', id: 'id', placeholder: data.placeholder }"
			/>
			<div class="item" v-for="(item, index) in options" :class="{select : item.select === true}" :key="index" :data-id="index" @click="e=>onClickItem(e,item.value)">
				<span>
					{{item.name}}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
import Input from "~/components/common/Input";
export default {
	props: ["list", "data", "width","classNm","title"],
	data() {
		return {
			tit: "",
			on: false,
			options: this.list,
		}
	},
  components: {
    Input,
  },
	methods: {
		toggleSlct(e) {
			const slctList = document.getElementsByClassName("slct");
			const slctSearchList = document.getElementsByClassName("slct_search");
			const target = e.target.parentNode;
			const onState = target.classList.contains("on") ? true : false;
			Array.prototype.forEach.call(slctList, item => item.classList.remove("on"));
			Array.prototype.forEach.call(slctSearchList, item => item.classList.remove("on"));
			if (!onState) target.classList.add("on");
			else target.classList.remove("on");
		},
		onClickItem(e, value) {
			const id = e.target.parentNode.getAttribute("data-id");
			const target = e.target.parentNode.parentNode;
			// if(e.target.classList.contains("on"))
			this.options.map((item, index) => {
				item.select = false;
				if (index == id) {
					item.select = true;
					this.tit = item.name;
					this.on = false;
				}
			});
			target.classList.remove("on");
      this.$emit('change', value);
		},
		setTit(){
      const foundOption = this.options.find(option => option.select === true);
      this.tit = foundOption ? foundOption.name : this.title;
		}
	},
  mounted() {
		this.setTit();
		document.addEventListener("click", e => {
			const slctSearchList = document.getElementsByClassName("slct_search");
      if(slctSearchList.length > 0){
				const temp = e.target.className.split(" ");
				let target = e.target.className !== "" ? slctSearchList[0].querySelector("." + temp[0]) : null;
				if(temp[0]=="ipt") target = "ipt";
				if(target === null) {
					Array.prototype.forEach.call(slctSearchList, item => item.classList.remove("on"));
				}
			}
			const slctList = document.getElementsByClassName("slct");
      if(slctList.length > 0){
				const temp = e.target.className.split(" ");
				const target = e.target.className !== "" ? slctList[0].querySelector("." + temp[0]) : null;
				if (target === null) {
					Array.prototype.forEach.call(slctList, item => item.classList.remove("on"));
				}
			}
		});
  },
	beforeUpdate(){
		this.setTit();
	},
  watch: {
    list(newList){
      let updateOptions = (this.options[0].value !== newList[0].value)
      // console.log('updateOptions',updateOptions);
      if(updateOptions)
        this.options = newList;
    }
  }
}
</script>
