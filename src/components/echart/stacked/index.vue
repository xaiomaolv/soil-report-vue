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
        category1: [
          '昆明',
          '曲靖',
          '玉溪',
          '保山',
          '昭通',
          '丽江',
          '普洱',
          '临沧',
          '楚雄',
          '红河',
          '文山',
          '西双版纳',
          '大理',
          '德宏',
          '怒江',
          '迪庆',
        ],
        category2: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        lineData1: [
          18092,
          20728,
          24045,
          28348,
          32808,
          36097,
          39867,
          44715,
          48444,
          50415,
          56061,
          62677,
          59521,
          67560,
          18092,
          20728,
        ],
        lineData2: [
          24045,
          28348,
          32808,
          36097,
          39867,
          44715,
          48444,
          50415,
          36097,
          39867,
          44715,
          48444,
        ],
        barData1: [
          4600,
          5000,
          5500,
          6500,
          7500,
          8500,
          9900,
          12500,
          14000,
          21500,
          23200,
          24450,
          25250,
          33300,
          4600,
          5000,
          5500,
        ],
        barData2: [
          6500,
          7500,
          8500,
          9900,
          22500,
          14000,
          21500,
          8500,
          9900,
          12500,
          14000,
          21500,
        ],
        rateData: []
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      this.cdata.rateData = []
      if (this.cdata.category == this.cdata.category1) {
        this.cdata.category = this.cdata.category2
        this.cdata.barData = this.cdata.barData2
        this.cdata.lineData = this.cdata.lineData2
      }else {
        this.cdata.category = this.cdata.category1
        this.cdata.barData = this.cdata.barData1
        this.cdata.lineData = this.cdata.lineData1
      }
      

      for (let i = 0; i < this.cdata.barData.length ; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>