<template>
  <div class="wrap confirm">
    <div class="w_inner type2">
      <div class="bx_step">
        <span class="item on"><em>1</em></span>
        <span class="item"><em>2</em></span>
        <span class="item"><em>3</em></span>
        <span class="item"><em>4</em></span>
      </div>
      <section class="wrap_scroll">
        <div class="top">
          <h1>
            <p>
              사업자 번호 <b class="txt_point3">{{ $dataPattern('bizNo',companyInfo.bizNo) }}</b>로
              <br />
              조회한 정보를 확인할게요
            </p>
          </h1>
        </div>
        <div>
          <div class="area1">
            <div class="coln">
              <p class="desc">
                * 해당 정보는 진위여부 확인과정에만 이용되며 다른 서비스에 활용되지 않습니다.
              </p>
            </div>
            <Item
              classNm="col"
              :data="{
                id: 1,
                type: 'text',
                title: '회사명',
              }"
              :value="companyInfo.compNm"
              ref="compNm"
              :disabled="true"
            />
            <div class="col2">
              <Item
                classNm="col"
                :data="{
                  id: 2,
                  type: 'text',
                  title: '대표자명',
                }"
                :value="companyInfo.prstNm"
                :disabled="true"
              />
              <Item
                classNm="col"
                :data="{
                  id: 3,
                  type: 'text',
                  title: '설립일',
                }"
                :value="companyInfo.fndDt"
                :disabled="true"
              />
            </div>
            <Item
              :data="{
                id: 4,
                type: 'text',
                title: '업종',
              }"
              :value="companyInfo.sector"
              :disabled="true"
            />
            <Item
              :data="{
                id: 5,
                type: 'text',
                title: '소재지',
              }"
              :value="companyInfo.korAddr"
              :disabled="true"
            />
          </div>
          <div class="area2">
            <div class="f_item item_radio">
              <div class="tit">
                <span>인증보유현황</span>
                <Tooltip desc="<p>각 인증담당 기관을 통해 기업이 보유하고 있는 인증현황을 조회한 결과입니다.<br/>실제 기업의 인증현황과 차이가 있는 경우 다된다에 문의를 남겨주시면 확인해드리겠습니다.</p>"/>
              </div>
              <div class="col">
                <Radio
                  v-for="(item, i) in list_radio"
                  :key="i"
                  :data="{ ...item, id: i }"
                />
              </div>
            </div>
            <div class="f_item item_radio">
              <div class="tit">
                <span>기술보유현황</span>
                <Tooltip desc="<p>(주)위즈도메인의 특허가치평가 엔진을 통해 산출한 기업의 기술보유 현황 및 특허자산가치 금액입니다.<br/>실제 기업의 기술보유현황과 차이가 있는 경우 다된다에 문의를 남겨주시면 확인해드리겠습니다.</p>"/>
              </div>
              <div class="coln cont">
                <span><em>보유특허수</em> <b class="num">{{companyInfo.patnCnt}}개</b></span>
                <span><em>특허자산가치</em> <b class="num">{{companyInfo.technicalAsset !== '-' ? (companyInfo.technicalAsset)+'억원' : '-'}}</b></span>
                <span><em>기술경쟁력등급</em> <b class="grade">{{companyInfo.techRate}}</b></span>
              </div>
            </div>
          </div>
        </div>
        <div class="area_bottom">
          <div class="inner">
            <nuxt-link to="/confirm2" class="btn">다음</nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
  import Item from "~/components/common/ItemForm.vue";
  import CheckBox from "~/components/common/CheckBox.vue";
  import Alert from "~/components/common/Alert.vue";
  import Tooltip from "@/components/common/Tooltip.vue";
  import Radio from "~/components/common/RadioBox.vue";


  export default {
    name: "confirm",
    data() {
      return {
        priv: {
          toggle1: false,
          toggle2: false,
        },
        txtAlert: false,
        message: {
          default01: "사업자번호 조회 시 자동입력됩니다.",
        },
        terms: {
          tm01: "",
          tm02: "",
        },
      };
    },
    components: {
      Item,
      Alert,
      CheckBox,
      Tooltip,
      Radio
    },
    async beforeMount() {
      const bizNo = this.$store.state.lenderLookupStore.companyInfo.bizNo;
    //   if( !bizNo )
    //     await this.$router.push("/")
    },
    mounted() {
      window.onpopstate = null;
    },
    computed: {
      companyInfo() {
        const info = this.$store.state.lenderLookupStore.companyInfo;
        if(info){
          return info;
        }
        return {
          labYn: false,
          deptYn: false,
          ventureYn: false,
          innobizYn: false,
        }
      },
      certificated(){
        const {labYn, deptYn, ventureYn, innobizYn} = this.companyInfo
        return labYn || deptYn || ventureYn || innobizYn;
      },
      list_radio(){
        return [
          {
            title: '연구소',
            name: 'labYn',
            value: this.companyInfo.labYn,
            defaultValue: true,
            disabled:true,
          },
          {
            title: '연구전담부서',
            name: 'deptYn',
            value: this.companyInfo.deptYn,
            defaultValue: true,
            disabled:true,
          },
          {
            title: '벤처인증',
            name: 'ventureYn',
            value: this.companyInfo.ventureYn,
            defaultValue: true,
            disabled:true,
          },
          {
            title: '이노비즈',
            name: 'innobizYn',
            value: this.companyInfo.innobizYn,
            defaultValue: true,
            disabled:true,
          },
          {
            title: '미보유',
            name: 'patnYn',
            value: this.certificated,
            defaultValue: false,
            disabled:true,
          },
        ]
      }
    },
    methods: {
      fnNext() {
        this.$router.push('./confirm2')
      }
    },
  };
</script>
