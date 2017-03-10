/**
 * Created by chenjunj on 2017/2/5.
 */

/*
* 观察者模式
* 特征：1.命令的发起者和执行者解耦合
* 		2.一个发起者可能对应多个执行者
* 		3.一个执行者也可能是其他执行者的命令发起者
* */
var Room = function (roomId) {
	this.roomId = roomId;
};
Room.prototype = {
	constructor:Room,
	service: function(){
		this.trigger('service',this.roomId);//触发事件
	}
};

var Hotel = function () {

};
Hotel.prototype = {
	constructor: Hotel,
	addRoom: function(room){
		room.on('service', function () {//绑定监听事件
			console.log('I need service');
		});
	}
};