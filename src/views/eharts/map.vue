<template>
  <div id="centerLeft1" >
    <div class="bg-color-black">
		<div class="flex-col pd-tb-5 pd-lr-10">
			<icon name="chart-pie" style="color:#5cd9e8"></icon>
			<span class="fs-xl text mx-2">地图数据</span>
			 <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
		</div>
		     
        <MapChart  style="height: calc(100% - 30px); width: 95%; margin: 0 auto;"/>
    </div>
  </div>
</template>

<script>
import MapChart from "@/components/echart/map";
export default {
  data() {
    return {};
  },
  components: {
    MapChart
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss">
#centerLeft1 {
  padding: 0.2rem;
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
    // width: 2.125rem;
    // height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>

