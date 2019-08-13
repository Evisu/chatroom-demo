/**
 * Webscoket 连接服务器客户端
 */
export default class WebSocketClient {
	
	constructor(url) {
		// 服务地址
	    this.url = url;
		// 是否建立连接
		this.connected = false;
	}
	
	// 建立连接
	connect(){
		let self = this;
		this.ws = new WebSocket(this.url);
		
		this.ws.onopen = function(evt){
			console.log('Connection open ...');
			self.connected = true;
		}
		
		this.ws.onmessage = function(evt){
			console.log('Received Message :'+evt.data);
		}
		
		this.ws.onclose = function(evt){
			console.log('Connection closed...');
			self.connected = false;
		}
		
		this.ws.onerror = function(evt){
			console.log('error...');
		}
	}
	
	// 断开连接
	disconnect(){
		this.ws.close();
	}
	
	// 发送消息
	sendMsg(msg){
		if(this.connected){
			console.log('Send Message :'+msg);
			this.ws.send(msg);	
		}else{
			console.log('连接已关闭，发送消息失败');
		}
	}
	
	// 获取当前时间
	getCurDate(){
		var date = new Date();
		//return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
		return date.getHours() + ':' + (date.getMinutes() < 10 ? ('0'+date.getMinutes()): date.getMinutes() )+ ':' + (date.getSeconds() < 10 ? ('0'+date.getSeconds()): date.getSeconds());
	}
}