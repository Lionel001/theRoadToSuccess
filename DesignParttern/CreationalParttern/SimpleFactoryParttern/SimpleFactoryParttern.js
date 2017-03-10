/**
 * Created by chenjunj on 2017/2/5.
 */
/*
* 简单工厂模式
* 特征：对象的创建和使用分离，只使用一个类生成实例
* 使用类User:仅使用产品，职责单一
* 工厂类Factory：对象类的集中管理
* 对象类AirTicket、Hotel：易于扩展，仅影响工厂类
* */
//机票类
function AirTicket(){

}
//酒店类
function Hotel(){

}
//产品工厂
var ProductFatory = (function () {
	var productFactories = {
		'airTicket': function () {
			return new AirTicket();
		},
		'hotel': function () {
			return new Hotel();
		}
	};
	return {
		create: function(type){
			return productFactories[type];
		}
	}
})();
//用户类
function User(){
	this.shopCart = [];
}
//用户原型
User.prototype = {
	constructor: User,
	order: function (type) {
		var product = ProductFatory.create(type);
		this.shopCart.push(product);
	}
};
