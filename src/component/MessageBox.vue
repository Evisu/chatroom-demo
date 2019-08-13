<template>
	<div id="messageBox">
		<div>
			<span>
				<el-input
				  type="textarea"
				  :rows="5"
				  maxlength="200"
				  style="vertical-align:top;"
				  show-word-limit
				  resize="none"
				  v-model="message">
				</el-input>
			</span>
			<span style="position: relative;bottom: 0;left: 45%;">
				 <el-button type="primary" @click="dialogVisible = false" style="height: 34px;" :disabled="isSend">发送</el-button>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:'发送消息窗口',
				message:''
			}
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
			}
		}
	}
</script>

<style>
</style>
