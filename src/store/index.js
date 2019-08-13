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
	webSocketClient:new WebSocketClient('ws://localhost:8899/ws') 
  },
  mutations: {
	// 初始化昵称
    initNickname (state,payload) {
		state.nickname = payload.name;
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
	}
  },
  actions: {
    initNickname ({commit,state},payload) {
      commit('initNickname',payload);
    },
	connect({commit}){
		commit('connect');
	},
	disconnect({commit}){
		commit('disconnect');
	},
	sendMsg({commit},payload){
		commit('sendMsg',payload);
	}
  }
})

// 初始化昵称
store.dispatch({
  type: 'initNickname',
  name: '张三'
})

export default store