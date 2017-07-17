/**
 * Created by chenjunj on 2017/3/2 13:50.
 */
/*var name = 'aaa';
var obj = {
    name: 'bbb',
    output: function () {
        /!*setTimeout(function () {
         console.log(this.name);//window下 => aaa，node下 => undefined
         },0);*!/
        /!*setTimeout((function () {
         console.log(this.name);// => bbb
         }).bind(this),0);*!/
        /!*(function(that){
         setTimeout(function () {
         console.log(that.name);// => bbb
         },1000);
         })(this);*!/
        // setTimeout(this.print.bind(this),0);// => bbb
        setTimeout(function (that) {
            console.log(that.name);
        },100,this);
    }
};
obj.output();*/

/*var name = 'Jack';
var preson = {
    name: 'Bob',
    output: function () {
        setTimeout(this.print.bind(this),0);
    },
    print:function () {
        console.log(this.name);
    }
};
preson.output();//==>Bob*/


var Person = {
    name: 'Bob',
    output: function () {
        setTimeout(function (that) {
            console.log(that.name);
        }(this),1000);
    }
};
Person.output();