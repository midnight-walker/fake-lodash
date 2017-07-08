/**
 * Created by tqj <2482366539@qq.com> on 2017/7/8.
 */
let difference=(array,values)=>{
  return array.filter(item=>{
      return !~values.indexOf(item);
  })
};

console.log(difference([3, 2, 1], [4, 2]));
// => [3, 1]