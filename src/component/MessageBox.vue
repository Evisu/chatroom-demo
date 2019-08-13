<template>
	<div id="messageBox">
		<div>
			<span>
				<el-input
				  type="textarea"
				  :rows="2"
				  maxlength="200"
				  show-word-limit
				  v-model="message">
				</el-input>
			</span>
			<span>
				 <el-button type="primary" @click="dialogVisible = false">发送</el-button>
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
		methods: {
			
		}
	}
</script>

<style>
</style>
