import Vue from 'vue'
import Vuex from 'vuex'
import WebSocketClient from '../module/webSocketClient.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nickname: '',
	messages:[],
	webSocketClient:new WebSocketClient('ws://localhost:8899/ws')
  },
  mutations: {
    initNickname (state,payload) {
		state.nickname = payload.name;
    },
	connect(state){
		state.webSocketClient.connect();
	},
	disconnect(state){
		state.webSocketClient.disconnect();
	},
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