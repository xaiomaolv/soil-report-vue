<template>
	<div class="bg-F8">
		<div class="card">
			<div class="card-pwd">
				密码修改
			</div>
			<el-form ref="form" :model="user" :rules="rules" label-width="80px">
				<el-form-item label="旧密码" prop="oldPassword">
					<el-input v-model="user.oldPassword" placeholder="请输入旧密码" type="password" />
				</el-form-item>
				<el-form-item label="新密码" prop="newPassword">
					<el-input v-model="user.newPassword" placeholder="请输入新密码" type="password" />
				</el-form-item>
				<el-form-item label="确认密码" prop="confirmPassword">
					<el-input v-model="user.confirmPassword" placeholder="请确认密码" type="password" />
				</el-form-item>
				<el-form-item style="line-height:0 ;">
					<div class="input_span">
						<span id="one"></span>
						<span id="two"></span>
						<span id="three"></span>
					</div>
					<div id="font">
						<span>弱</span>
						<span>中</span>
						<span>强</span>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="medium" @click="submit" style="width: 48%;">修改</el-button>
					<el-button type="danger" size="medium" @click="close" style="width: 48%;">取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>

</template>

<script>
	import {
		updateUserPwd
	} from "@/api/system/user";
	export default {
		name: "possword",
		data() {
			const equalToPassword = (rule, value, callback) => {
				if (this.user.newPassword !== value) {
					callback(new Error("两次输入的密码不一致"));
				} else {
					callback();
				}
			};
			return {
				test: "1test",
				user: {
					oldPassword: undefined,
					newPassword: undefined,
					confirmPassword: undefined
				},
				// 表单校验
				rules: {
					oldPassword: [{
						required: true,
						message: "旧密码不能为空",
						trigger: "blur"
					}],
					newPassword: [{
							required: true,
							message: "新密码不能为空",
							trigger: "blur"
						},
						{
							min: 8,
							max: 16,
							message: "长度在 8 到 16 个字符",
							trigger: "blur"
						}
					],
					confirmPassword: [{
							required: true,
							message: "确认密码不能为空",
							trigger: "blur"
						},
						{
							required: true,
							validator: equalToPassword,
							trigger: "blur"
						}
					]
				},
				msgText: "",
				percentage: 0,
				customColor: '#409eff',
				customColors: [{
						color: '#f56c6c',
						percentage: 20
					},
					{
						color: '#e6a23c',
						percentage: 40
					},
					{
						color: '#5cb87a',
						percentage: 60
					},
					{
						color: '#1989fa',
						percentage: 80
					},
					{
						color: '#6f7ad3',
						percentage: 100
					}
				]
			};
		},
		methods: {
			submit() {
				this.$refs["form"].validate(valid => {
					if (valid) {
						updateUserPwd(this.user.oldPassword, this.user.newPassword).then(
							response => {
								this.msgSuccess("修改成功");
								let that = this
								this.$store.dispatch('LogOut').then(() => {
									this.$store.commit('SET_FIRSTLOGIN', false)
									setTimeout(() => {
										that.$router.replace('/login')
									}, 1500)
								})
							}
						);
					}
				});
			},
			close() {
				// this.$store.dispatch("tagsView/delView", this.$route);
				// this.$router.push({ path: "/index" });
				this.$refs['form'].resetFields();
				this.$router.push({ path: "/login" });
			},
			checkStrong(sValue) {
				var modes = 0;
				//正则表达式验证符合要求的
				if (sValue.length >= 6) {
					if (/[a-z]+/.test(sValue)&& /[A-Z]+/.test(sValue) && /[0-9]+/.test(sValue) && /\W/.test(sValue)) {
						return modes = 4;
					} else if (/[a-zA-Z]+/.test(sValue) || /[0-9]+/.test(sValue) || /\W/.test(sValue)) {
						if (/[a-zA-Z]+/.test(sValue) && /[0-9]+/.test(sValue)) {
							return modes = 2;
						} else if (/\[a-zA-Z]+/.test(sValue) && /\W/.test(sValue)) {
							return modes = 2;
						} else if (/[0-9]+/.test(sValue) && /\W/.test(sValue)) {
							return modes = 2;
						} else {
							return modes = 1;
						}
					}
				} else {
					return modes = 0;
				}
			
				//逻辑处理
				switch (modes) {
					case 1:
						return 1;
						break;
					case 2:
						return 2;
						break;
					case 3:
					case 4:
						return sValue.length < 4 ? 3 : 4;
						break;
				}
				return modes;
			},
			closeMask(){
				console.log('刷新浏览器')
			}		
		},
		watch: {
			'user.newPassword': function(newname, oldname) {
				this.msgText = this.checkStrong(newname);
				if (this.msgText > 1 || this.msgText == 1) {
					document.getElementById("one").style.background = "red";
				} else {
					document.getElementById("one").style.background = "#eee";
				}
				if (this.msgText > 2 || this.msgText == 2) {
					document.getElementById("two").style.background = "orange";
				} else {
					document.getElementById("two").style.background = "#eee";
				}
				if (this.msgText == 4) {
					document.getElementById("three").style.background = "#00D1B2";
				} else {
					document.getElementById("three").style.background = "#eee";
				}
			}

		},
		mounted() {
			window.addEventListener('beforeunload', this.closeMask)
			this.$once('hook:beoforeDestroy', this.closeMask)
		},
		beforeDestroy() {
		  this.closeMask()
		},
	};
</script>

<style lang="scss" scoped>
	.bg-F8 {
		height: 100%;
		background-color: #F8F8F8;
		position: relative;
	}

	.card {
		width: 500px;
		background-color: #FFF;
		border-radius: 0;
		padding: 50px 20px;
		height: 80%;
		color: #484848;
		-webkit-box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.2);
		box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#inputValue {
		width: 100%;
		// margin-left: 20px;
		// padding-left: 10px;
		border-radius: 3px;
	}

	.input_span span {
		display: inline-block;
		width: 33.3333%;
		height: 10px;
		background: #eee;
		line-height: 20px;
	}

	#one {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		border-right: 0px solid;
		// margin-left: 20px;
		margin-right: 3px;
	}

	#two {
		border-left: 0px solid;
		border-right: 0px solid;
		margin-left: -5px;
		margin-right: 3px;
	}

	#three {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-left: 0px solid;
		margin-left: -5px;
	}

	#font span {
		display: inline-block;
		width: 33.3333%;
		text-align: center;
	}

	#font span:nth-child(1) {
		color: red;
		// margin-left: 80px;
	}

	#font span:nth-child(2) {
		color: orange;
		// margin: 0 60px;
	}

	#font span:nth-child(3) {
		color: #00d1b2;
	}

	.card-pwd {
		padding: 20px 15px;
		border-bottom: #DFE4ED solid 1px;
		margin-bottom: 30px;
		font-weight: 600;
	}
</style>
