<template>
	<div id="index">
		<dv-full-screen-container class="bg">
			<dv-loading v-if="loading">Loading...</dv-loading>
			<div v-else class="host-body">
				<div class="d-flex jc-center">
					<dv-decoration-10 style="width:33.3%;height:.0625rem;" />
					<div class="d-flex jc-center">
						<dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
						<div class="title">
							<span class="title-text">大数据可视化平台</span>
							<dv-decoration-6 class="title-bototm" :reverse="true" :color="['#50e3c2', '#67a1e5']"
								style="width:3.125rem;height:.1rem;" />
						</div>
						<dv-decoration-8 :reverse="true" :color="['#568aea', '#000000']"
							style="width:2.5rem;height:.625rem;" />
					</div>
					<dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
				</div>

				<!-- 第二行 -->
				<div class="d-flex jc-between px-2">
					<div class="d-flex" style="width: 40%">
						<div class="react-right ml-4"
							style="width: 6.25rem; text-align: left;background-color: #0f1325;">
							<span class="react-before"></span>
							<span class="text">数据分析1</span>
						</div>
						<div class="react-right ml-3" style="background-color: #0f1325;">
							<span class="text colorBlue">数据分析2</span>
						</div>
					</div>
					<div style="width: 40%" class="d-flex">
						<div class="react-left bg-color-blue mr-3">
							<span class="text fw-b">vue-big-screen</span>
						</div>
						<div class="react-left mr-4"
							style="width: 6.25rem; background-color: #0f1325; text-align: right;">
							<span class="react-after"></span>
							<span class="text">{{dateYear}} {{dateWeek}} {{dateDay}}</span>
						</div>
					</div>
				</div>

				<div class="flex-col flex-col-item" style="min-height: 700px;">
					<div class="flex-col-7" style="min-height: 50%;!important ">
						<div class="row" style="height: 50%;!important ">
							<dv-border-box-12 style="height: 100%;">
								<centerLeft1 style="height: 100%;"/>
							</dv-border-box-12>
						</div>
						<div class="row" style="height: 50%;!important ">
							<dv-border-box-13 style="height: 100%!important;" >
								<!-- <bottomLeft style="height: 100%;"/> -->
							<stacked style="height: 100%;"></stacked>
							</dv-border-box-13>
						</div>
					</div>
					<div class="flex-col-10" style="min-height: 100%;">
						<dv-border-box-12 style="height: 100%;">
							<Map />
							<!-- <centerLeft2/> -->
						</dv-border-box-12>
					</div>
					<div class="flex-col-7" >
						<div class="row" style="height: 50%;!important">
							<dv-border-box-12 style="height: 100%;!important">
								<centerRight2 style="height: 100%;"/>
							</dv-border-box-12>
						</div>
						<div class="row" style="height: 50%;!important">
							<dv-border-box-12 style="height: 100%;!important">
								<div  class=" row" style="height: 100%;">
									<div class="flex-col-24" style="height: 35%;">
										<tags style="height: 100%;"></tags>
									</div>
									<div class="flex-col-24" style="height: 65%;">
										<tableList style="height: 100%;"></tableList>
									</div>
								</div>								
								<!-- <bottomRight style="height: 100%;"/> -->
								<!-- <Gauge  style="height: 100%;"></Gauge> -->
							</dv-border-box-12>
						</div>
					</div>
				</div>
			</div>
		</dv-full-screen-container>
	</div>
</template>

<script>
	import {
		formatTime2
	} from '@/utils/index'
	
	import centerLeft1 from "./centerLeft1";
	// import centerLeft2 from "./centerLeft2";
	// import centerRight1 from "./centerRight1";
	import centerRight2 from "./centerRight2";
	// import center from "./center";
	// import bottomLeft from "./bottomLeft";
	// import bottomRight from "./bottomRight";
	import Map from './map'
	import stacked from "./stacked";
	// import Gauge from "./Gauge";
	import tags from "./tags";
	import tableList from "./table-list";
	import store from "@/store/index";
	export default {
		data() {
			return {
				loading: true,
				dateDay: null,
				dateYear: null,
				dateWeek: null,
				weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
			};
		},
		components: {
			centerLeft1,
			// centerLeft2,
			// centerRight1,
			centerRight2,
			// center,
			// bottomLeft,
			// bottomRight,
			Map,
			stacked,
			// Gauge,
			tags,
			tableList
		},
		created() {
			console.log(this.$store.dispatch,999999)
			// this.$store.dispatch('echart/updateData')
		},
		mounted() {
			this.timeFn();
			this.cancelLoading();
		},
		methods: {
			timeFn() {
				setInterval(() => {
					this.dateDay =formatTime2(new Date(), 'HH: mm: ss');
					this.dateYear =formatTime2(new Date(), 'yyyy-MM-dd');
					this.dateWeek = this.weekday[new Date().getDay()];
				}, 1000)
			},
			cancelLoading() {
				setTimeout(() => {
					this.loading = false;
				}, 500);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/index.scss';
	.bg{
		background: url('../../assets/images/pageBg.png');
	}
	#dv-full-screen-container{
		position: relative!important;
		width: 100%!important;
	}
</style>
