<template>
	<div id="chatRoom">
		<el-container>
		 <!-- <el-aside width="200px">
			  <Tree></Tree>
		  </el-aside> -->
		  <el-container>
		    <el-header height="30px">
				<Header></Header>
			</el-header>
		    <el-main>
				<ChatBox></ChatBox>
			</el-main>
		    <el-footer height="120px">
				<MessageBox></MessageBox>
			</el-footer>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	import Tree from './Tree.vue'
	import Header from './Header.vue'
	import ChatBox from './ChatBox.vue'
	import MessageBox from './MessageBox.vue'
	export default {
		components:{
			Tree,ChatBox,Header,MessageBox
		},
		data:{
		},
		methods: {
			
		}
		
	}
</script>

<style>
	#chatRoom {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
	.el-header{
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 30px;
	}
	  
	.el-footer {
		color: #333;
		text-align: center;
		height: 60px;
		padding: 0 0;
	}
	  
	.el-aside {
	    color: #333;
	    text-align: center;
	}
	  
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		height: 280px;
		
	}
	  
	body > .el-container {
		margin-bottom: 40px;
	}
</style>
