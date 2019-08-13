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
		  width="60%"
		  height="600px"
		  :before-close="handleClose">
		  <span>
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
				})
				.catch(_ => {});
			}
		}
	}
</script>

<style>
</style>
