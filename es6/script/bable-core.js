/**
 * Created by Lionel on 2017/7/6 22:42.
 */
var babel = require('babel-core');

var options = {};
// 字符串转码
console.log(babel.transform('code();', options));