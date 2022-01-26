<template>
  <div id="centerRight1">
    <div class="bg-color-black">
		<div class="flex-col pd-lr-10 pd-tb-10">
			<icon name="chart-line" style="color:#5cd9e8"></icon>
			<span class="fs-xl text mx-2">分行统计</span>
		</div>
		
		<div class="d-flex jc-center body-box" style="height: calc(100% - 35px); width:100%; margin: 0 auto;">
		  <dv-scroll-board :config="config"  style="width:100%;height:6.5rem"/>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["分行","签约小区", "用户数", "动户数","钱包", "手机银行","交易笔数","交易额(元)"],
        data: [
          // ["组件1", "dev-1", "<span  class='colorGrass'>↑75%</span>"],
          // ["组件2", "dev-2", "<span  class='colorRed'>↓33%</span>"],
          // ["组件3", "dev-3", "<span  class='colorGrass'>↑100%</span>"],
          // ["组件4", "rea-1", "<span  class='colorGrass'>↑94%</span>"],
          // ["组件5", "rea-2", "<span  class='colorGrass'>↑95%</span>"],
          // ["组件6", "fix-2", "<span  class='colorGrass'>↑63%</span>"],
          // ["组件7", "fix-4", "<span  class='colorGrass'>↑84%</span>"],
          // ["组件8", "fix-7", "<span  class='colorRed'>↓46%</span>"],
          // ["组件9", "dev-2", "<span  class='colorRed'>↓13%</span>"],
          // ["组件10", "dev-9", "<span  class='colorGrass'>↑76%</span>"]
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [60],
        align: ["center"]
      }
    };
  },
  components: {},
  mounted() {
    const oData = this.$store.state.echart.data
    const keys = Object.keys(oData).sort((k1, k2) => {
      return parseInt(oData[k1].orderNum) - parseInt(oData[k2].orderNum)
    })

    keys.forEach((k) => {
      this.config.data.push([
        k,oData[k].communtCount,oData[k].userCount,oData[k].dhUserCount ,oData[k].walletCount,oData[k].sjyhCpunt,oData[k].transactionCount,oData[k].transactionSum
      ])
    })
  },
  methods: {}
};
</script>

<style lang="scss">
#centerRight1 {
  padding:0 0.2rem 0.2rem 0.2rem;
  height:100%;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 100%;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>