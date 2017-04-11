/**
 * Created by chenjunj on 2017/3/2 13:50.
 */
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
        (function(that){
             setInterval(function () {
                console.log(that.name);// => bbb
             },1000);
         })(this);
        // setTimeout(this.print.bind(this),0);// => bbb
    },
    print: function() {
        console.log(this.name);
    }
};
obj.output();