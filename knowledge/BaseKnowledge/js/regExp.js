/**
 * Created by chenjunj on 2017/6/10 15:04.
 */
//判断是否为质数
function isPrime(num) {
    return !/^1?$|^(11+?)\1+$/.test(Array(num+1).join('1'));
}

var a = '(f11-g11-I11)*{wsxxs.wsxx[code==BQYSHWYJ].value}{}';
/*var b = a.replace(/(?!\{.*)([A-z]\d+)(?!.*\})/g,function ($1,$2) {
    return item.toUpperCase();
});*/
// console.log(a.match(/\{[A-z0-9_]+([A-z0-9_]\.)*[[A-z0-9_]+(=[A-z0-9_]+)?\]/g));
console.log(a.match(/{}|f11/g));
