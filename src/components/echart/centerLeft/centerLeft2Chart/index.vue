<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data() {
    return {
      cdata: [
        // {
        //   // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
        //   name: '福州市',
        //   value: 10,
        //   elseData:{
        //     // 这里放置地图 tooltip 里想显示的数据
        //   }
        // },
        // {
        //   name: '厦门市',
        //   value: 9,
        // },
        // {
        //   name: '漳州市',
        //   value: 8,
        // },
        // {
        //   name: '泉州市',
        //   value: 7,
        // },
        // {
        //   name: '三明市',
        //   value: 6,
        // },
        // {
        //   name: '莆田市',
        //   value: 5,
        // },
        // {
        //   name: '南平市',
        //   value: 4,
        // },
        // {
        //   name: '龙岩市',
        //   value: 3,
        // },
        // {
        //   name: '宁德市',
        //   value: 2,
        // }
        {
          name: '昆明',
          value: 1
        },
        {
          name: '曲靖',
          value: 2
        },
        {
          name: '玉溪',
          value: 3
        },
        {
          name: '保山',
          value: 4
        },
        {
          name: '昭通',
          value: 5
        },
        {
          name: '丽江',
          value: 6
        },
        {
          name: '普洱',
          value: 7
        },
        {
          name: '临沧',
          value: 8
        },
        {
          name: '楚雄',
          value: 9
        },
        {
          name: '红河',
          value: 10
        },
        {
          name: '文山',
          value: 11
        },
        {
          name: '西双版纳',
          value: 12
        },
        {
          name: '大理',
          value: 13
        },
        {
          name: '德宏',
          value: 14
        },
        {
          name: '怒江',
          value: 15
        },
        {
          name: '迪庆',
          value: 16
        },
      ],
    }
  },
  components: {
    Chart,
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>