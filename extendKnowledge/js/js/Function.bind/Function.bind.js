/**
 * Created by chenjunj on 2017/3/2 16:01.
 */
/*----------例一-------------*/
var context = { foo: "bar" };
function returnFoo () {
    return this.foo;
}
console.log(returnFoo()); // => undefined
var bound = returnFoo.bind(context);
console.log(bound()); // => bar
console.log(returnFoo.call(context)); // => bar
console.log(returnFoo.apply(context)); // => bar
context.returnFoo = returnFoo;
console.log(context.returnFoo());// => bar


/*----------例二-------------*/
var slice = Function.prototype.call.bind(Array.prototype.slice);
console.log(slice([1,2,3],0,2));
var slice2 = Function.prototype.apply.bind(Array.prototype.slice);
console.log(slice2([1,2,3],[0,2]));
var bind = Function.prototype.call.bind(Function.prototype.bind);//将原有的call改写为bind并返回一个新的函数
var amazing = bind(returnFoo, context);
console.log(amazing()); // => bar

/*----------例三-------------*/
$.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    data: {'info': info}
}).done((function(data) {
    if(data.status){
        // 这里this指向的是外层bind进来的this
        this._data.process_type = info.process_type;
    }else{
        uUnique.noticeBox.showWarning(data.message);
    }
}).bind(this));

/*----------例四-------------*/
var name = 'aaa';
var obj = {
    name: 'bbb',
    output: function () {
        /*setTimeout(function () {
         console.log(this.name);//window下 => aaa，node下 => undefined
         },0);*/
        /*setTimeout((function () {
         console.log(this.name);// => bbb
         }).bind(this),0);*/
        /*(function(that){
         setTimeout(function () {
         console.log(that.name);// => bbb
         },0);
         })(this);*/
        setTimeout(this.print.bind(this),0);// => bbb
    },
    print: function() {
        console.log(this.name);
    }
};
obj.output();