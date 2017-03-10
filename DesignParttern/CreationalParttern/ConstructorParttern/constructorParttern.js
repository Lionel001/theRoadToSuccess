/**
 * Created by chenjunj on 2017/1/24.
 */
/*
*  使用场景：一个类有多个实例，且相互独立，如UI组件
*
* */
function Room(roomNumber, type, price){
	this.roomNumber = roomNumber;
	this.type = type;
	this.price = price;
}
/*外部添加原型
Room.prototype.getInfo = function () {
	return 'roomNumber:'+this.roomNumber+',type:'+this.type+',price:'+this.price;
};*/
/*原型模式
Room.prototype = {
	constructor: Room,
	getInfo: function () {
		return 'roomNumber:'+this.roomNumber+',type:'+this.type+',price:'+this.price;
	}
};*/
/*揭示性原型模式*/
Room.prototype = (function () {
	var getInfo = function () {
		return 'roomNumber:'+this.roomNumber+',type:'+this.type+',price:'+this.price;
	};
	return {
		constructor: Room,
		getInfo: getInfo
	}
})();
function a(){
	console.log('hello');
}
var room1 = new Room('1','single','200');
var room2 = new Room('2','double','400');
console.log(room1.getInfo());
console.log(room2.getInfo());
console.log(room1.constructor === Room);//只能判断具体是什么
console.log(room1 instanceof Room);//能判断继承自哪个
console.log(room1.getInfo());
console.log(typeof a);