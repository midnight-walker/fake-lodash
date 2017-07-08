/**
 * Created by tqj <2482366539@qq.com> on 2017/7/8.
 */
let differenceWith=(array,values,comparator)=>{
    return array.filter(item=>{
        return values.every(value=>!comparator(item,value));
    })
};
let equal=(a,b)=>a===b;

console.log(differenceWith([3, 2, 1], [4, 2], equal));
// => [3, 1]
