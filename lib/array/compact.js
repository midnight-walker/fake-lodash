/**
 * Created by tqj <2482366539@qq.com> on 2017/7/5.
 */
var compact=(array,size)=>{
    return array.filter(item=>!!item);
};

compact([0, 1, false, 2, '', 3,NaN,null,undefined]);
// => [1, 2, 3]