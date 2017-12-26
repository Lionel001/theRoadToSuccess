/**
 * Created by chenjunj on 2017/6/30 16:02.
 */
/**
 * 字母转数字 A->0,Z->25,AA->52
 * */
var lettersToNumber = function (letters) {
    letters = letters.toUpperCase();
    var sum = 0;
    for(var i=0,l=letters.length;i<l;i++){
        var curLetter = letters.charAt(i);
        sum += (curLetter.charCodeAt()-64)*Math.pow(26,l-i-1);
    }
    return sum-1;
};
/**
 * 数字转字母 0->A,25->Z,52->AA
 * */
var numberToLetters = function(num){
    num += 1;
    var result = [];
    while(num){
        var t = num % 26;
        if(!t){
            t = 26;
            -- num;
        }
        result.push(String.fromCharCode(t + 64));
        num = ~~(num / 26);//两次按位取反,等于向下取整
    }
    return result.reverse().join('');
};
// console.log(lettersToNumber('BA'),numberToLetters(25));
console.log(lettersToNumber('E'),numberToLetters(4));

