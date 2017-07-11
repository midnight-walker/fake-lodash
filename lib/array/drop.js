/**
 * Created by tqj <2482366539@qq.com> on 2017/7/11.
 */
let drop=(array,number=1)=>{
    let arr=array.concat();
    arr.splice(0,number);
    return arr;
};

console.log(drop([1, 2, 3]));
// => [2, 3]

console.log(drop([1, 2, 3], 2));
// => [3]

console.log(drop([1, 2, 3], 5));
// => []

console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]