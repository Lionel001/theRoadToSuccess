/**
 * Created by chenjunj on 2017/8/19 15:24.
 */
var reg1 = /[A-z]+\d+/g;
var reg2 = /[A-Za-z]+\d+/g;
var str = '[A1+a2+AB1+ac2]';
console.log(str.match(reg1));//[ '[A1', 'a2', 'AB1', 'ac2' ]
console.log(str.match(reg2));//[ 'A1', 'a2', 'AB1', 'ac2' ]