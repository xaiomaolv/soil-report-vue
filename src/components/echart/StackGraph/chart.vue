<template>
	<div style="height: 100%">
		<!-- 年度开工率 -->
		<Echart :options="options" id="bottomLeftChart" height="6rem" width="100%" @handler="eventHandler"></Echart>
	</div>
</template>

<script>
	import Echart from '@/common/echart'
	export default {
		data() {
			return {
				options: {},
			}
		},
		components: {
			Echart,
		},
		props: {
			cdata: {
				type: Object,
				default: () => ({}),
			},
		},
		methods: {
			eventHandler(data) {
				this.$emit('handler', data)
			},
		},
		watch: {
			cdata: {
				handler(newData) {
					this.options = {
						tooltip: {
							trigger: 'axis',
							 backgroundColor: 'rgba(255,255,255,0.1)',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
								label: {
								  show: true,
								  backgroundColor: '#7B7DDC',
								},
							}
						},
						// legend: {
						// 	data: ['交易笔数', '交易额'],
						// 	textStyle: {
						// 	  color: '#B4B4B4',
						// 	},
						// 	top: '0%',
						// },
						grid: {
							// left: '3%',
							// right: '4%',
							// bottom: '3%',
							// containLabel: true
							x: '15%',
							width: '80%',
							y: '5%',
						},
						xAxis: {
							type: 'value',
							// axisLine: {
							//   lineStyle: {
							//     color: '#B4B4B4',
							//   },
							// },
							// axisTick: {
							//   show: false,
							// },
						},
						yAxis: {
							type: 'category',
							data: newData.category
						},
						series: [
							// {
							// 	name: '交易笔数',
							// 	type: 'bar',
							// 	stack: '总量',
							// 	label: {
							// 		show: true,
							// 		position: 'insideRight'
							// 	},
							// 	barWidth: 8,
							// 	itemStyle: {
							// 	  normal: {
							// 	    barBorderRadius: 5,
							// 	    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
							// 	      {
							// 	        offset: 0,
							// 	        color: '#956FD4',
							// 	      },
							// 	      {
							// 	        offset: 1,
							// 	        color: '#3EACE5',
							// 	      },
							// 	    ]),
							// 	  },
							// 	},
							// 	data: newData.barData
							// },
							{
								name: '交易额',
								type: 'bar',
								stack: '总量',
								// label: {
								// 	show: true,
								// 	position: 'insideRight'
								// },
								barGap: '-100%',
								barWidth: 8,
								itemStyle: {
								  normal: {
								    barBorderRadius: 5,
								    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
								      {
								        offset: 0,
								        color: 'rgba(156,107,211,0.8)',
								      },
								      {
								        offset: 0.2,
								        color: 'rgba(156,107,211,0.5)',
								      },
								      {
								        offset: 1,
								        color: 'rgba(156,107,211,0.2)',
								      },
								    ]),
								  },
								},
								z: -12,
								data: newData.lineData
							}							
						]
					}
				},
				immediate: true,
				deep: true,
			},
		},
	}
</script>
