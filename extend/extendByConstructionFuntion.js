/**
 * Created by Administrator on 2017/2/18.
 */
//通过构造函数继承
//方法一：构造函数绑定
/*function Animal(){
    this.species = "动物";
}
function Cat(name,color){
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}*/
//方法二：prototype模式
/*
function Animal(){
    this.species = "动物";
}
function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物*/
//方法三、 直接继承prototype
/*function Animal(){ }
Animal.prototype.species = "动物";
function Cat(){ }
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;//会改变animal原型的constructor
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物*/
//方法四、 利用空对象作为中介
//4.1
/*function Animal(){ }
function Cat(){ }
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;*/
//4.2
/*function extend(Child, Parent) {
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;//德语中向上，上一层的意思。
}
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物
*/
//方法五、 拷贝继承
function Animal(){}
function Cat(){}
Animal.prototype.species = "动物";
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}
extend2(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物


