import Vue from 'vue'
import Vuex from 'vuex'
import WebSocketClient from '../module/webSocketClient.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
	// 昵称
    nickname: '',
	// 消息数组
	messages:[], 
	// 聊天室服务客户端
	webSocketClient:{} 
  },
  mutations: {
	// 初始化昵称
    initNickname (state,payload) {
		state.nickname = payload.name;
    },
	initWebsocket(state,payload){
		state.webSocketClient = new WebSocketClient(payload);
	},
	// 连接聊天室服务
	connect(state){
		state.webSocketClient.connect();
	},
	// 断开聊天室服务
	disconnect(state){
		state.webSocketClient.disconnect();
	},
	// 发送消息
	sendMsg(state,payload){
		state.webSocketClient.sendMsg(payload.msg);
	},
	// 添加消息
	addMessage(state,payload){
		state.messages.push(payload.msg);
	},
	// 清空消息
	clearMessage(state,payload){
		state.messages = [];
	}
  },
  actions: {
    initNickname ({commit,state},payload) {
		commit('initNickname',payload);
    },
	initWebsocket ({commit,state},payload) {
		commit('initWebsocket',payload);
    },
	connect({commit}){
		commit('connect');
	},
	disconnect({commit}){
		commit('disconnect');
	},
	sendMsg({commit},payload){
		commit('sendMsg',payload);
	},
	addMessage({commit},payload){
		commit('addMessage',payload);
	},
	clearMessage({commit},payload){
		commit('clearMessage');
	}
  }
})

// 初始化昵称
store.dispatch({
  type: 'initNickname',
  name: '张三'
})

// 初始化websocket
store.dispatch({
	type:'initWebsocket',
	url:'ws://localhost:8899/ws',
	onmessage:(msg)=>{
		store.dispatch({
			type:'addMessage',
			msg:msg
		})
	}
});
 



export default store