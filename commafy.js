/**
 * Created by Administrator on 2017/2/18.
 */
/*每三位加逗号*/
function commafy(num){
    return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2, $3){
                return $2 + ',';
            });
}
console.log(commafy('1123123123.01112223331'));
//word为匹配项
var name = 'aaa bbb ccc';
var uw=name.replace(/\b\w+\b/g, function(word){
    return word.substring(0,1).toUpperCase()+word.substring(1);}
);
console.log(uw);
