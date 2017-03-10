/**
 * Created by chenjunj on 2017/1/24.
 */

function Human(name){
	this.name = name;
	this.getInfo = function () {
		console.log('aaa');
	}
}
function Man(name, age){
	this.name = name;
	this.age = age;
}

var mini_extend = function (newClass, father, overrides) {
	if(typeof father !== 'function'){
		return this;
	}
	var son = newClass;
	var sonPrototype = son.prototype;
	var fatherPrototype = father.prototype;
	if(sonPrototype === fatherPrototype){
		return ;
	}
	son.superclass = fatherPrototype;
	son.superclass.constructor = father;
	console.log(son.superclass.constructor.call(this));

	for(var property in father){
		son[property] = father[property];
	}
	if(overrides){
		for(var property in overrides){
			son[property] = overrides[property];
		}
	}
	return son;
};

var man = mini_extend(Man, Human, {
	getName: function () {
		return this.name;
	}
});

