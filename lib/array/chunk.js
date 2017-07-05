/**
 * Created by tqj <2482366539@qq.com> on 2017/7/5.
 */
let chunk=(array,size)=>{
    let result=[];
    while(array.length){
        result.push(array.splice(0,size));
    }
    return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]