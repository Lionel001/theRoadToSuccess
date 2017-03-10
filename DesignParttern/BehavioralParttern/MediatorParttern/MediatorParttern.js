/**
 * Created by chenjunj on 2017/2/5.
 */
/*
* 中介者模式
* 特征：1.管理复杂对象关系：多对多--->多对一
* 		2.对象间的耦合转移至中介者
* 注意：中介者的稳定性至关重要
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

var Waiter = function () {
	
};
Waiter.prototype = {
	constructor: Waiter,
	service: function(){
		console.log('I offer service');
	}
};
var waiterA = new Waiter();
var waiterB = new Waiter();
var waiterC = new Waiter();
var Hotel = function () {

};
Hotel.prototype = {
	constructor: Hotel,
	addRoom: function(room){
		room.on('service', function (roomId,type) {//绑定监听事件
			if(type === '修理'){
				waiterA.service();
			}else{
				if(roomId.startWith('1')){
					waiterB.service();
				}else{
					waiterC.service();
				}
			}
		});
	}
};