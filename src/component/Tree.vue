<template>
	<div id="tree">
		<div style="height: 30px;">
			<el-alert
			    title="在线用户"
			    type="info"
			    :closable="false">
			</el-alert>
		</div>
		<div style="height: 500px;overflow-y: auto;">
			<el-alert
			v-for="i in 20"
			    :title="'联系人'+i"
			    type="success"
				:key="i"
			    :closable="false">
			</el-alert>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:'联系人列表'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
