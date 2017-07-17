/**
 * Created by chenjunj on 2017/5/19 11:43.
 */
var scope = 'global scope';
function checkScope() {
    console.log(scope);
    var scope = 'local scope';
    console.log(scope);
    // function f() {
    //     return scope;
    // }
    // return f();
}
checkScope();