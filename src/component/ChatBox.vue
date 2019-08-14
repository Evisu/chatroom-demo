<template>
	<div id="chatBox">
		<div id="logArea" style="min-height:280px;overflow-y:auto;">
			
			<p v-for="(msg,index) in messages" :key="index" style="text-align: left;">{{msg}}</p>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:'聊天窗口'
			}
		},
		computed: {
		    // 计算属性的 getter
		    messages: function () {
		      return this.$store.state.messages;
		    }
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
