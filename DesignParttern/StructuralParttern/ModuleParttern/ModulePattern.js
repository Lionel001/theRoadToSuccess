/**
 * Created by chenjunj on 2017/2/5.
 */
/*
* 模块模式
* 特征：1.只要用一个命名空间封装成一个模块就属于模块模式
* 		2.保护私有接口，开放公开接口
* 		3.模块化是面向对象的第一步
* 		4.遵守单一职责原则
* */
var ProductFactory = (function () {
	var productFactories = {
		'roomA': function(){
			return new RoomA();
		},
		'roomB': function(){
			return new RoomB();
		}
	};
	return {
		create: function(type){
			return productFactories[type];
		}
	}
});