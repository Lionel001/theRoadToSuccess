/**
 * Created by chenjunj on 2017/5/29 17:25.
 */
/*function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.strength = 60;

Person.prototype.sayName = function () {
    console.log('I am '+this.name);
};

/!*mock new*!/
function _new() {
    var obj = new Object();
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
}

var man = _new(Person,'Lionel','25');
console.log(man.name);
console.log(man.age);
console.log(man.strength);
console.log(man.sayName());*/
// var a = 'A1B2C3'.replace(/\[[A-z\+\-\*\/%]\]/g,function (str) {
/【[A-z0-9\+\-\*\/%\s]+】/g
var a = 'A1B2C3'.replace(/\[A-z]\d+/g,function (str) {
    console.log(str);
    return str+","
});
console.log(a);
var name = 'a1b2c3';

var uw=name.replace(/[A-z]\d+/g, function(word){
    return word.substring(0,1).toUpperCase()+word.substring(1);}
);
console.log(uw);

"abcdefg".replace(/(?:abc)(de)(?:fg)/g, function (_,item) {
    console.log(_,item);
});