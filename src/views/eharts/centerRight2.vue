<template>
	<div id="centerRight2">
		<div class="bg-color-black">
			<div class="flex-col pd-tb-5 pd-lr-10">
				<icon name="align-left" style="color:#5cd9e8"></icon>
				<span class="fs-xl text mx-2">分行交易额统计</span>
				<!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
			</div>
			<dv-capsule-chart :config="config" style="width: 100%;height: calc(100% - 30px)" />

			<!-- <centerRight2Chart1 style="height: calc(70% - 30px); width: 100%; margin: 0 auto;"/> -->
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
	import centerRight2Chart1 from "@/components/echart/centerRight/centerRightChart";

	export default {
		data() {
			return {
				config: {
					data: [
						// {
						//   name: "南阳",
						//   value: 0
						// },
						// {
						//   name: "周口",
						//   value: 67
						// },
						// {
						//   name: "漯河",
						//   value: 0
						// },
						// {
						//   name: "郑州",
						//   value: 55.9
						// },
						// {
						//   name: "西峡",
						//   value: 0
						// }
					],
					colors: [
						"#37a2da",
						"#32c5e9",
						"#9fe6b8",
						"#ffdb5c",
						"#ff9f7f",
						"#fb7293",
						"#e7bcf3",
						"#8378ea"
					],
					unit: '元',
					showValue: true
				},

			};
		},
		components: {},
		created() {
			let data =  this.$store.state.echart.data
			Object.keys(data).forEach((key) => {
				let obj = {
					name: data[key].name,
					value: parseInt(data[key].transactionSum / 2)
				}
				this.config.data.push(obj)
			})
			console.log(this.config.data, 999)
		},
		mounted() {

		},
		methods: {}
	};
</script>

<style lang="scss">
	#centerRight2 {
		padding: 0.0625rem;
		height: 100%;
		min-width: 3.75rem;
		border-radius: 0.0625rem;

		.bg-color-black {
			padding: 0.0625rem;
			height: 100%;
			border-radius: 0.125rem;
		}

		.text {
			color: #c3cbde;
		}

		.body-box {
			border-radius: 0.125rem;
			overflow: hidden;
		}
	}
</style>
