/**
 * Created by Administrator on 2016/7/29.
 */
/*var formula = "D10 = round(sum(D11:D34),2)";
var isExistSum = new RegExp('sum\\('+'d','ig');
console.log(isExistSum.test(formula));


var matchRange = /[d]\d+:[d]\d+/ig;
var rangeStr = formula.match(matchRange)[0];
console.log(rangeStr);


var matchIndex = new RegExp('\\d+','ig');
var indexArr  = rangeStr.match(matchIndex);
console.log(indexArr);

var a = '1';
var r = /[^0-9]/;
console.log(r.test(a));*/
var regID = /\w\d+/ig;
formula = 'Q1= A2 + A3 + D1 + A7 + A12 + A13 ';
var arr = formula.split('=')[1].match(regID);
console.log(arr);
var a = 'a1';
var regID = new RegExp(a+'\\D{1}','ig');
console.log(regID);
var formula = 'Q1 = A1 + A3 + D1 + A7 + A12 + A13 ';
var arr = formula.split('=')[1].match(regID);
console.log(arr);
