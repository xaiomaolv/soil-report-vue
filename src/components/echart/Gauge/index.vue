<template>
  <div style="height: 100%;">
    <Chart :cdata="cdata" style="height: 100%; width: 100%;"/>
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
		 drawTiming: null,
      cdata: {
       one:80,
	   two:60,
       three:0.5,
	   four:0.6
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
     this.drawTimingFn();
  },
 
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },   
  methods: {
	  drawTimingFn () {
	    // this.setData();
	    this.drawTiming = setInterval(() => {
	      this.setData();
	    }, 6000);
	  },
    // 根据自己的业务情况修改
    setData () {
		this.cdata.one = (Math.random() * 100).toFixed(2) - 0;
        this.cdata.two = (Math.random() * 7).toFixed(2) - 0;
        this.cdata.three = (Math.random() * 2).toFixed(2) - 0;
		this.cdata.four = (Math.random() * 2).toFixed(2) - 0;
    },
  }
};
</script>

<style lang="scss" scoped>
</style>