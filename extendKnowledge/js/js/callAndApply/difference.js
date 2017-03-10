/**
 * Created by chenjunj on 2017/3/2 16:07.
 */
var slice = Array.prototype.slice;
// slice(0, 1); // => TypeError: can't convert undefined to object
// slice([1,2,3], 0, 1); // => TypeError: ...
// 但是如果我们使用call或者apply，slice又将在一个上下文中执行
console.log(slice.call([1,2,3], 0, 1)); // => [1]
console.log(slice.apply([1,2,3], [0,2])); // => [1]
                                            //     =>call能传N个参数，第一个为obj，后续为参数
                                            //      =>apply只能传两个参数，第一个为obj，第二个为参数数组
