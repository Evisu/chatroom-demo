<template>
	<div id="welcome">
		<el-form :inline="true" :rules="rules" ref="form" :model="form" label-width="80px" style="margin-top: 50px;">
		  <el-form-item label="昵称" prop="name">
		    <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('form')">加入聊天室</el-button>
		  </el-form-item>
		</el-form>
		
		
		<el-dialog
		  :visible.sync="dialogVisible"
		  width="40%"
		  :before-close="handleClose">
		  <span slot="title">
			  <font color="red" v-if="!isConnect" >与服务器断开连接...</font>
		  </span>
		  <span style="height: 500px;">
			  <ChatRoom></ChatRoom>
		  </span>
		</el-dialog>
		
	</div>
</template>

<script>
	import ChatRoom from './ChatRoom.vue'
	export default {
		components:{
			ChatRoom
		},
		created: function () {
		},
		data(){
			return {
				title:'欢迎来到聊天室！',
				dialogVisible: false,
				form:{
					name:this.$store.state.nickname
				},
				webSocketClient:{},
				rules: {
				  name: [
					{ required: true, message: '请输入昵称', trigger: 'blur' },
					{ min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
				  ]
				}
			}
		},
		computed:{
			isConnect:function(){
				return this.$store.state.webSocketClient.connected == true;
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					this.$store.dispatch('connect');
					this.dialogVisible = true;
				  } else {
					console.log('error submit!!');
					return false;
				  }
				});
			},
			handleClose(done){
				this.$confirm('确认退出聊天室？')
				.then(_ => {
					done();
					this.$store.dispatch('disconnect');
					this.$store.dispatch('clearMessage')
				})
				.catch(_ => {});
			}
		}
	}
</script>

<style>
	.el-dialog__body {
	    padding: 0px 0px;
	    color: #606266;
	    font-size: 14px;
	    word-break: break-all;
	}
</style>
