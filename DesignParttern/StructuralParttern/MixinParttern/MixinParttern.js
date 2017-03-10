/**
 * Created by chenjunj on 2017/2/5.
 */

/*
* 混入模式
* 混入与继承的区别：混入是方法的拷贝，然而两者并没有任何的关系
* 混入与组合的区别：组合是拥有关系，比如酒店拥有房间，而房间内部结构由房间决定
* 					混入是给予，B方法混入给了A，A就拥有了B方法
* 场景举例：拖拽
* */
var Room = function(){};
Room.prototype = {
	constructor : Room,
	create : function(){
		throw new Error("room create not implemented!");
	},
	book : function(){
		this.state = "1";
	}
};
var Goods = function(){};
Goods.prototype = {
	sell : function(){
		console.log("sell goods");
	}
};
var Rents = function () {

};
Rents.prototype = {
	rent: function(){
		console.log('rent');
	}
};
var mixin = function (receiver, mixinObj) {
	// 如果存在三个以上的参数的话，从第三个开始表示要混入的方法名
	if (arguments[2]) {
		for (var i = 2, len = arguments.length; i < len; i++) {
			receiver.prototype[arguments[i]] = mixinObj.prototype[arguments[i]];
		}
	}
	// 否则混入全部方法
	else {
		for (var methodName in mixinObj.prototype) {
			// 防止混入覆盖
			if (!receiver.prototype[methodName]) {
				receiver.prototype[methodName] = mixinObj.prototype[methodName];// 方法拷贝迁移
			}
		}
	}
};

mixin(Room, Goods);
var roomA = new Room();
roomA.sell();
