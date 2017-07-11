/**
 * Created by tqj <2482366539@qq.com> on 2017/7/11.
 */
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

let dropWhile=(array,fn)=>{
    let idx=array.findIndex(item=>!fn(item));
    if(idx<0){
        return [];
    }else{
        let result=array.concat();
        result.splice(0,idx);
        return result;
    }
};



console.log(dropWhile(users, function(o) { return !o.active; }));
// => objects for ['pebbles']

// The `console.log(matches` iteratee shorthand.
console.log(dropWhile(users, (item)=>item.user==='barney' && item.active===false));
// => objects for ['fred', 'pebbles']

// The `console.log(matchesProperty` iteratee shorthand.
console.log(dropWhile(users, (item)=>item.active===false));
// => objects for ['pebbles']

// The `console.log(property` iteratee shorthand.
console.log(dropWhile(users, (item)=>!!item.active));
// => objects for ['barney', 'fred', 'pebbles']