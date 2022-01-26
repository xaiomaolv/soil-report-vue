<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
		<div class="flex-col pd-lr-10 pd-tb-10">
			<icon name="chart-bar" style="color:#5cd9e8"></icon>
			<span class="fs-xl text mx-2">数据统计图</span>
		</div>
        <BottomLeftChart style="height: calc(100% - 40px); width: 95%; margin: 0 auto;"/>

    </div>
  </div>
</template>

<script>
import BottomLeftChart from "@/components/echart/bottom/bottomLeftChart";
export default {
  data() {
    return {};
  },
  components: {
    BottomLeftChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomLeft {
  padding: 0.3rem 0.2rem;
  height: 100%;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 100%;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>