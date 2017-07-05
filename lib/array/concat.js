/**
 * Created by tqj <2482366539@qq.com> on 2017/7/5.
 */
var concat=function(array){
    let args=Array.from(arguments);
    return args.slice(1).reduce((p,item)=>{
        return p.concat(item);
    },array);
};

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]