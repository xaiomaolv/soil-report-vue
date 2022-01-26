<template>
	<div style="height: 100%; position: relative;">
		<Chart :cdata="cdata" style="height: 100%;" />
		<div class="" style="position: absolute;left: 15px; top: 10px; line-height: 28px;">
			<div class="" style="font-size: 14px;">签约总数</div>
			<div class="tx-ct" style="color: #3fc0fb; font-size: 20px;">{{communtCount}}</div>
		</div>
	</div>
</template>

<script>
	import Chart from './chart.vue';
	import {
		getData
	} from "@/api/data"
	export default {
		data() {
			return {
				cdata: {
					xData: [],
					seriesData: []
				},
				communtCount:0
			}
		},
		components: {
			Chart,
		},
		mounted() {
			let data = this.$store.state.echart.data
			Object.keys(data).forEach((key) => {
				this.cdata.xData.push(key)
				let obj = {
					value: data[key].communtCount,
					name: data[key].name
				}
				this.communtCount += parseInt(data[key].communtCount)
				this.cdata.seriesData.push(obj)
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
</style>
