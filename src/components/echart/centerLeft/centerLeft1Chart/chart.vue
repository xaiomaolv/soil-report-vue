<template>
  <div style="height: 100%;">
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="4rem"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          color: [
            "#37a2da",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#e7bcf3",
            "#8378ea"
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show: true
          },
          calculable: true,		  
   //        legend: {
			// left: 'center',
			// bottom: 0,			
   //          orient: "horizontal",
   //          icon: "circle",       
   //          data: newData.xData,
   //          textStyle: {
   //            color: "#fff"
   //          }
   //        },
          series: [
            {
			  name: '签约小区',
              type: 'pie',
			  radius: '68%',
			  center: ['50%', '50%'],
			  selectedMode: 'single',          
              data: newData.seriesData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>