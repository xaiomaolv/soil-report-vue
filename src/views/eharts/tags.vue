<template>
  <div id="centerRight1">
    <div class="flex-col pd-lr-10 pd-tb-10">
			<icon name="chart-line" style="color:#5cd9e8"></icon>
			<span class="fs-xl text mx-2">全省总计</span>
		</div>
    <div class="flex-col flex-wrap bg-color-black">
      <div class="flex-col-6  tx-ct" v-for="item in titleItem" :key="item.title">
        <p class="flex-col-24 " style="margin-top: 0.1rem;">{{item.title}}</p>   
         <dv-digital-flop :config="item.number" style="width:100%; height:0.6rem;" />
      </div>
 
    <!-- <div class="down">
      <div class="ranking bg-color-black">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1">年度负责人组件达标榜</span>
        <dv-scroll-ranking-board :config="ranking" style="height:2.75rem" />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>今日任务通过率</span>
          <CenterChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />
        </div>
        <div class="item bg-color-black">
          <span>今日任务达标率</span>
          <CenterChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />
        </div>
        <div class="water">
          <dv-water-level-pond :config="water" style="height: 1.5rem" />
        </div>
      </div>-->
    </div> 
  </div>
</template>

<script>
// import CenterChart from "@/components/echart/center/centerChartRate";

export default {
  data () {
    return {
      titleItem: [
        {
          title: "签约小区",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "用户数",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "动户数",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "钱包",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "手机银行",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "交易笔数",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "交易额(元)",
          number: {
            number: [0],
            toFixed: 1,
            content: "{nt}"
          }
        }
      ],
      // ranking: {
      //   data: [
      //     {
      //       name: "周口",
      //       value: 55
      //     },
      //     {
      //       name: "南阳",
      //       value: 120
      //     },
      //     {
      //       name: "西峡",
      //       value: 78
      //     },
      //     {
      //       name: "驻马店",
      //       value: 66
      //     },
      //     {
      //       name: "新乡",
      //       value: 80
      //     },
      //     {
      //       name: "新乡2",
      //       value: 80
      //     },
      //     {
      //       name: "新乡3",
      //       value: 80
      //     },
      //     {
      //       name: "新乡4",
      //       value: 80
      //     },
      //     {
      //       name: "新乡5",
      //       value: 80
      //     },
      //     {
      //       name: "新乡6",
      //       value: 80
      //     },
      //   ],
      //   carousel: "single",
      //   unit: "人"
      // },
      // water: {
      //   data: [24, 45],
      //   shape: "roundRect",
      //   formatter: "{value}%",
      //   waveNum: 3
      // },
      // 通过率和达标率的组件复用数据
      // rate: [
      //   {
      //     id: "centerRate1",
      //     tips: 60,
      //     colorData: {
      //       textStyle: "#3fc0fb",
      //       series: {
      //         color: ["#00bcd44a", "transparent"],
      //         dataColor: {
      //           normal: "#03a9f4",
      //           shadowColor: "#97e2f5"
      //         }
      //       }
      //     }
      //   },
      //   {
      //     id: "centerRate2",
      //     tips: 40,
      //     colorData: {
      //       textStyle: "#67e0e3",
      //       series: {
      //         color: ["#faf3a378", "transparent"],
      //         dataColor: {
      //           normal: "#ff9800",
      //           shadowColor: "#fcebad"
      //         }
      //       }
      //     }
      //   }
      // ]
    };
  },
  components: {
    // CenterChart
    // centerChart1,
    // centerChart2
  },
  mounted() {
    const oData =  this.$store.state.echart.data
    var communtCount = 0,userCount = 0,dhUserCount = 0,walletCount = 0,sjyhCpunt = 0,transactionCount = 0,transactionSum = 0
    Object.keys(oData).sort((k1, k2) => {
      return parseInt(oData[k1].orderNum) - parseInt(oData[k2].orderNum)
    }).forEach((k)=> {
      communtCount += parseInt(oData[k].communtCount)
      userCount += parseInt(oData[k].userCount)
      dhUserCount += parseInt(oData[k].dhUserCount)
      walletCount += parseInt(oData[k].walletCount)
      sjyhCpunt += parseInt(oData[k].sjyhCpunt)
      transactionCount += parseInt(oData[k].transactionCount)
      transactionSum += parseFloat(oData[k].transactionSum)
      return 0
    })
    this.titleItem = [
        {
          title: "签约小区",
          number: {
            number: [communtCount],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "用户数",
          number: {
            number: [userCount],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "动户数",
          number: {
            number: [dhUserCount],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "钱包",
          number: {
            number: [walletCount],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "手机银行",
          number: {
            number: [sjyhCpunt],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "交易笔数",
          number: {
            number: [transactionCount],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "交易额(元)",
          number: {
            number: [transactionSum],
            toFixed: 2,
            content: "{nt}"
          }
        }
      ]
  }
};
</script>

<style lang="scss" scoped>
#centerRight1 {
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;
  height: 100%;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: calc(100% - 35px);
	padding: 0.2rem 0.2rem 0.2rem 0.2rem;
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