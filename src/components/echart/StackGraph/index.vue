<template>
  <div style="height: 100%;">
    <Chart :cdata="cdata" style="height: 100%; width: 100%;" @handler="setData"/>
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
		category:[],
		barData:[],
		lineData:[],
        category1: [
          
        ],
        category2: [],
        lineData1: [
          
        ],
        lineData2: [
          
        ],
        barData1: [
         
        ],
        barData2: [
         
        ],
        rateData: []
      }
    };
  },
  components: {
    Chart,
  },
  created() {
  	let data =  this.$store.state.echart.data
  	Object.keys(data).forEach((key) => {
  		// this.cdata.xData.push(key)  		
		this.cdata.category.push(data[key].name)
		this.cdata.barData.push(data[key].transactionCount)
		this.cdata.lineData.push(data[key].transactionSum) 		
  	})
	this.cdata.category1 = this.cdata.category
	this.cdata.barData1 = this.cdata.barData
	this.cdata.lineData1 = this.cdata.lineData
  },
  mounted () {
    // this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
		// this.cdata.category = []
		// this.cdata.barData = []
		// this.cdata.lineData = []
      if (this.cdata.category == this.cdata.category1) {
        this.cdata.category = this.cdata.category1
        this.cdata.barData = this.cdata.barData1
        this.cdata.lineData = this.cdata.lineData1
      }else {
        this.cdata.category = this.cdata.category1
        this.cdata.barData = this.cdata.barData1
        this.cdata.lineData = this.cdata.lineData1
      }
      

      // for (let i = 0; i < this.cdata.barData.length ; i++) {
      //   let rate = this.cdata.barData[i] / this.cdata.lineData[i];
      //   this.cdata.rateData.push(rate.toFixed(2));
      // }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>