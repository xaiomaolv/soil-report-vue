<template>
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
			<el-button type="primary" size="mini" @click="submit">保存</el-button>
			<el-button type="danger" size="mini" @click="close">关闭</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import {
		updateUserPwd
	} from "@/api/system/user";

	export default {
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
				}
			};
		},
		methods: {
			submit() {
				this.$refs["form"].validate(valid => {
					if (valid) {
						updateUserPwd(this.user.oldPassword, this.user.newPassword).then(
							response => {
								this.msgSuccess("修改成功");
							}
						);
					}
				});
			},
			close() {
				this.$store.dispatch("tagsView/delView", this.$route);
				this.$router.push({
					path: "/index"
				});
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
			
			}

	};
</script>
<style lang="scss" scoped>
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
