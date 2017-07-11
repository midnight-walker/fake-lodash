/**
 * Created by tqj <2482366539@qq.com> on 2017/7/11.
 */
let dropRight=(array,number=1)=>{
    let arr=array.concat(),len;
    arr.splice(-number,number);
    return arr;
};

console.log(dropRight([1, 2, 3]));
// => [1, 2]

console.log(dropRight([1, 2, 3], 2));
// => [1]

console.log(dropRight([1, 2, 3], 5));
// => []

console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]