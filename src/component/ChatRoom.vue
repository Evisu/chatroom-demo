<template>
	<div id="chatRoom">
		<el-container>
		  <el-aside width="300px">
			  <Tree></Tree>
		  </el-aside>
		  <el-container>
		    <el-header>
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
		data(){
			return {
			}
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
		line-height: 60px;
	}
	  
	.el-footer {
		color: #333;
		text-align: center;
	}
	  
	.el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 620px;
	}
	  
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 460px;
	}
	  
	body > .el-container {
		margin-bottom: 40px;
	}
</style>
