/**
 * Created by chenjunj on 2017/2/5.
 */
/*
* 工厂模式
* 特征：对象的创建和使用分离，子类决定成员变量的具体类（即对应的酒店决定其内部有哪些类型的房）
* 使用类HotelBase: 提供对象的管理
* 创建类HotelA、HotelB：管理对象的实例化，多态
* 对象类RoomBase：职责单一，扩展仅影响相关创建类
* 使用场景：1.根据不同场景，产生不同实例，这些实例具有共性的场景
* 			2.使用者需要明确使用产品的场景，无需关注产品创建的细节
* 			3.可以使用简单工厂模式进一步封装
* */
var RoomBase = function () {};
RoomBase.prototype = {
	constructor:RoomBase,
	create: function(){
		throw  new Error('room create not impl!');
	},
	book: function(){
		this.state = '1';
	},
	hasWindow: function(){
		return true;
	}
};
var RoomA = function () {

};
$.extend(RoomA, RoomBase);
RoomA.prototype.create = function () {
	console.log('这是标间');
};
RoomA.prototype.hasWindow = function () {
	return false;
};
var RoomB = function () {

};
$.extend(RoomB, RoomBase);
RoomB.prototype.create = function () {
	console.log('这是大床房');
};
var RoomC = function () {

};
$.extend(RoomC, RoomBase);
RoomC.prototype.create = function () {
	console.log('这是海景房');
};


var HotelBase = function () {
	this.roomFactory = {};
};
HotelBase.prototype = {
	constructor: HotelBase,
	getRoom: function (type) {
		return this.roomFactory[type];
	},
	bookRoom: function(type){
		var room = this.getRoom(type);
		room.book();
	}
};
var HotelA = function () {
	this.roomFactory = {
		'roomA': function () {
			return new RoomA();
		},
		'roomB': function () {
			return new RoomB();
		}
	}
};
$.extend(HotelA,HotelBase);
var HotelB = function () {
	this.roomFactory = {
		'roomA': function () {
			return new RoomA();
		},
		'roomB': function () {
			return new RoomB();
		},
		'roomC': function () {
			return new RoomC();
		}
	}
};
$.extend(HotelB,HotelBase);

