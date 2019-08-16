<template>
	<div id="messageBox">
		<el-input
		  type="textarea"
		  :rows="5"
		  maxlength="200"
		  show-word-limit
		  resize="none"
		  v-model="message">
		</el-input>
		<el-button type="primary" @click="sendMessage" style="height: 34px;" :disabled="isSend">发送</el-button>
	</div>
</template>

<script>
	export default {
		data:{
			title:'发送消息窗口',
			message:''
		},
		computed: {
		    // 计算属性的 getter
		    isSend: function () {
		      return this.message == '';
		    }
		},
		methods: {
			sendMessage(){
				this.$store.dispatch({
				  type: 'sendMsg',
				  msg: this.message
				});
				this.message = '';
			}
		}
	}
</script>

<style>
</style>
