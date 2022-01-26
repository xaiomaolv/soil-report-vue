<template>
  <div>
    <Chart :cdata="cdata" style="width: 100%; height: 100%" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data() {
    return {
      cdata: [
        {
          name: '昆明',
          value: 1,
          data:{}
        },
        {
          name: '曲靖',
          value: 2,
          data:{}
        },
        {
          name: '玉溪',
          value: 3,
          data:{}
        },
        {
          name: '保山',
          value: 4,
          data:{}
        },
        {
          name: '昭通',
          value: 5,
          data:{}
        },
        {
          name: '丽江',
          value: 6,
          data:{}
        },
        {
          name: '普洱',
          value: 7,
          data:{}
        },
        {
          name: '临沧',
          value: 8,
          data:{}
        },
        {
          name: '楚雄',
          value: 9,
          data:{}
        },
        {
          name: '红河',
          value: 10,
          data:{}
        },
        {
          name: '文山',
          value: 11,
          data:{}
        },
        {
          name: '西双版纳',
          value: 12,
          data:{}
        },
        {
          name: '大理',
          value: 13,
          data:{}
        },
        {
          name: '德宏',
          value: 14,
          data:{}
        },
        {
          name: '怒江',
          value: 15,
          data:{}
        },
        {
          name: '迪庆',
          value: 16,
          data:{}
        },
      ],
    }
  },
  components: {
    Chart,
  },
  mounted() {
    const dataObj =  this.$store.state.echart.data
    this.cdata.forEach(item => {
      const key = Object.keys(dataObj).find(key => {
        return item.name.indexOf(dataObj[key].name.replace('分行','')) > -1
      })
      item.data = dataObj[key]   
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>