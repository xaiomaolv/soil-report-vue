<template>
	<div>
		<Echart id="mapChart" ref="mapChartRef" :options="options" height="100%" width="100%"></Echart>
	</div>
</template>

<script>
	import Echart from '@/common/echart';
	export default {
		data() {
			return {
				options: {},
			};
		},
		components: {
			Echart,
		},
		props: {
			cdata: {
				type: Array,
				default: () => [],
			},
		},
		watch: {
			cdata: {
				handler(newData) {
					// 设置点的位置(经纬度)
					const geoCoordMap = {
						昆明: [102.712251, 25.040609, 20],
						曲靖: [103.797851, 25.501557, 20],
						玉溪: [102.543907, 24.350461, 20],
						保山: [99.167133, 25.111802, 20],
						昭通: [103.717216, 27.336999, 20],
						丽江: [100.233026, 26.872108, 20],
						普洱: [100.972344, 22.777321, 20],
						临沧: [100.08697, 23.886567, 20],
						楚雄: [101.546046, 25.041988, 20],
						红河: [103.384182, 23.366775, 20],
						文山: [104.24401, 23.36951, 20],
						西双版纳: [100.797941, 22.001724, 20],
						大理: [100.225668, 25.589449, 20],
						德宏: [98.578363, 24.436694, 20],
						怒江: [98.854304, 25.850949, 20],
						迪庆: [99.706463, 27.826853, 20],
					};
					let seriesData = [{
							name: '昆明',
						},
						{
							name: '曲靖',
						},
						{
							name: '玉溪',
						},
						{
							name: '保山',
						},
						{
							name: '昭通',
						},
						{
							name: '丽江',
						},
						{
							name: '普洱',
						},
						{
							name: '临沧',
						},
						{
							name: '楚雄',
						},
						{
							name: '红河',
						},
						{
							name: '文山',
						},
						{
							name: '西双版纳',
						},
						{
							name: '大理',
						},
						{
							name: '德宏',
						},
						{
							name: '怒江',
						},
						{
							name: '迪庆',
						},
					];
					let convertData = function(data) {
						let scatterData = []
						for (var i = 0; i < data.length; i++) {
							var geoCoord = geoCoordMap[data[i].name]
							if (geoCoord) {
								scatterData.push({
									name: data[i].name,
									value: geoCoord.concat(data[i].value),
								})
							}
						}
						return scatterData
					}
					this.options = {
						showLegendSymbol: true,
						tooltip: {
							trigger: 'item',
							textStyle: {
								fontSize: 14,
								lineHeight: 22,
							},
							position: (point) => {
								// 固定在顶部
								return [point[0] + 50, point[1] - 20]
							},
							// 如果需要自定义 tooltip样式，需要使用formatter
							formatter: params => {
								// console.log(params.data)
								// if (!params.data.data) {
								// 	return 'xxx'
								// }
								return `<div style=""> 
											${params.data.data ? params.data.data.name : 'xxx' }
											<br>
											用户数：${params.data.data ? params.data.data.userCount : 'xxx'}
											<br>
											钱包：${params.data.data ? params.data.data.walletCount : 'xxx'}
											<br>
											手机银行：${params.data.data ? params.data.data.sjyhCpunt : 'xxx'}
										</div>`
							}
							
						},
						visualMap: {
							min: 0,
							max: 10,
							show: false,
							seriesIndex: 0,
							// 颜色
							inRange: {
								color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)'],
							},
						},
						// 底部背景
						geo: {
							show: true,
							aspectScale: 0.85, //长宽比
							zoom: 1.2,
							top: '10%',
							left: '16%',
							map: '云南',
							roam: false,
							itemStyle: {
								normal: {
									areaColor: 'rgba(0,0,0,0)',
									shadowColor: 'rgba(7,114,204, .8)',
									shadowOffsetX: 5,
									shadowOffsetY: 5,
								},
								emphasis: {
									areaColor: '#00aeef',
								},
							},
						},
						series: [{
								name: '相关指数',
								type: 'map',
								aspectScale: 0.85, //长宽比
								zoom: 1.2,
								mapType: '云南', // 自定义扩展图表类型
								top: '10%',
								left: '16%',
								itemStyle: {
									normal: {
										color: 'red',
										areaColor: 'rgba(19,54,162, .5)',
										borderColor: 'rgba(0,242,252,.3)',
										borderWidth: 1,
										shadowBlur: 7,
										shadowColor: '#00f2fc',
									},
									emphasis: {
										areaColor: '#4f7fff',
										borderColor: 'rgba(0,242,252,.6)',
										borderWidth: 2,
										shadowBlur: 10,
										shadowColor: '#00f2fc',
									},
								},
								label: {
									formatter: (params) => `${params.name}`,
									show: true,
									position: 'insideRight',
									textStyle: {
										fontSize: 14,
										color: '#efefef',
									},
									emphasis: {
										textStyle: {
											color: '#fff',
										},
									},
								},
								data: newData,
							},
							{
								type: 'effectScatter',
								coordinateSystem: 'geo',
								symbolSize: 7,
								effectType: 'ripple',
								legendHoverLink: false,
								showEffectOn: 'render',
								rippleEffect: {
									period: 4,
									scale: 2.5,
									brushType: 'stroke',
								},
								zlevel: 1,
								itemStyle: {
									normal: {
										color: '#99FBFE',
										shadowBlur: 5,
										shadowColor: '#fff',
									},
								},
								data: convertData(seriesData),
							},
						],
					}
					// 重新选择区域
					this.handleMapRandomSelect()
				},
				immediate: true,
				deep: true,
			},
		},
		methods: {
			// 开启定时器
			startInterval() {
				const _self = this
				// 应通过接口获取配置时间，暂时写死5s
				const time = 2000
				if (this.intervalId !== null) {
					clearInterval(this.intervalId)
				}
				this.intervalId = setInterval(() => {
					_self.reSelectMapRandomArea()
				}, time)
			},
			// 重新随机选中地图区域
			reSelectMapRandomArea() {
				const length = 9
				this.$nextTick(() => {
					const map = this.$refs.mapChartRef.chart
					let index = Math.floor(Math.random() * length)
					while (index === this.preSelectMapIndex || index >= length) {
						index = Math.floor(Math.random() * length)
					}
					map.dispatchAction({
						type: 'mapUnSelect',
						seriesIndex: 0,
						dataIndex: this.preSelectMapIndex,
					})
					map.dispatchAction({
						type: 'showTip',
						seriesIndex: 0,
						dataIndex: index,
					})
					map.dispatchAction({
						type: 'mapSelect',
						seriesIndex: 0,
						dataIndex: index,
					})
					this.preSelectMapIndex = index
				})
			},
			handleMapRandomSelect() {
				this.$nextTick(() => {
					const map = this.$refs.mapChartRef.chart
					const _self = this
					setTimeout(() => {
						_self.reSelectMapRandomArea()
					}, 0)
					// 移入区域，清除定时器、取消之前选中并选中当前
					map.on('mouseover', function(params) {
						clearInterval(_self.intervalId)
						map.dispatchAction({
							type: 'mapUnSelect',
							seriesIndex: 0,
							dataIndex: _self.preSelectMapIndex,
						})
						map.dispatchAction({
							type: 'mapSelect',
							seriesIndex: 0,
							dataIndex: params.dataIndex,
						})
						_self.preSelectMapIndex = params.dataIndex
					})
					// 移出区域重新随机选中地图区域，并开启定时器
					map.on('globalout', function() {
						_self.reSelectMapRandomArea()
						_self.startInterval()
					})
					this.startInterval()
				})
			},
		},
	}
</script>
