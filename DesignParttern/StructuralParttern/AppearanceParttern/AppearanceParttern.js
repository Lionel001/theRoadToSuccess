/**
 * Created by chenjunj on 2017/2/5.
 */

/*
* 外观模式
* 特征：1.更高层次的接口抽象，隐藏底层的真实复杂性
* 		2.循序最少知识原则
* */

/*-------------------例一-----------------------*/
var product;
function getProduct(){
	if(!product){
		product = productFactory.create();
	}
	return product;
}

/*-------------------例二-----------------------*/
/**
 * * 同时阻止事件默认行为和冒泡
 * * @param e
 * */
var stopEvent = function(e){
	e.stopPropagation();
	e.preventDefault();
};

