<template>
	<div id="app">
		<Welcome></Welcome>
	</div>
</template>

<script>
	import ChatRoom from './component/ChatRoom.vue'
	import Welcome from './component/Welcome.vue'
	export default {
		components:{
			ChatRoom,Welcome
		},
		data:{
		},
		methods: {
			
		}
		
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
		width:1000px;
		margin-left: 200px;
	}
</style>
