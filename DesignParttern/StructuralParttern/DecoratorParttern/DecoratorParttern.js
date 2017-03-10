/**
 * Created by chenjunj on 2017/2/5.
 */

/*
* 装饰模式
* 通过动态改变对象完成对象的扩充，多态的一种，但是会增加架构的复杂度
* */
var Room = function (price) {
	this.price = price;
} ;
Room.prototype = {
	getPrice: function(){
		return this.price;
	}
};

var LowSeasonRoom = function (room) {
	this.room = room;
};
LowSeasonRoom.prototype.getPrice = function(){
	return this.room.getPrice()*0.8;
};
var HighSeasonRoom = function (room) {
	this.room = room;
};
HighSeasonRoom.prototype.getPrice = function(){
	return this.room.getPrice()*1.2;
};
var roomA = new LowSeasonRoom(new Room(200));
console.log(roomA.getPrice());