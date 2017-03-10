/**
 * Created by chenjunj on 2016/12/7.
 */
var a = {'name':'chenjunj'};

(function (a) {
	console.log(a.name);
})(a);
Number.nativeToFixed = Number.fixed;
Number.fixed = function(v){
	console.log(this);
	v = Number(v);
	if(v !== NaN){
		var arr = v.split('.');
		if(arr.length = 1){
			return Number.nativeToFixed(v);
		}
	}else{
		return NaN;
	}
};

//console.log(Number('1234567890123456.').toFixed(2));
Number(1);