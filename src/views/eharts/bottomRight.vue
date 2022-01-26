<template>
  <div id="bottomRight">
    <div class="bg-color-black">
		<div class="flex-col pd-tb-5 pd-lr-10">
			<icon name="chart-area" style="color:#5cd9e8"></icon>
			<span class="fs-xl text mx-2">工单修复以及满意度统计图</span>
			<div class="decoration2">
			  <dv-decoration-2 :reverse="true" style="width:5px;height:90%;" />
			</div>
		</div>
	
       <BottomRightChart  style="height: calc(100% - 20px); width: 95%; margin: 0 auto;"/>

    </div>
  </div>
</template>

<script>
import BottomRightChart from "@/components/echart/bottom/bottomRightChart";
export default {
  data() {
    return {};
  },
  components: {
    BottomRightChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomRight {
  padding: 0.2rem 0.2rem 0;
  height: 100%;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height:calc(100% - 16px);
    border-radius: 0.125rem;
	position: relative;
  }
  .text {
    color: #c3cbde;
  } //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
	top: 15px;
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