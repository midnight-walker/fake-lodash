/**
 * Created by tqj <2482366539@qq.com> on 2017/7/11.
 */
//just a simple iteratee
function iteratee(value){
    if(typeof value==null){
        return (item)=>!!item;
    }else if(Array.isArray(value)){
        return (item)=>item[value[0]]===value[1];
    }else {
        switch (typeof value){
            case 'function':
                return value;
            case 'object':
                return (item)=>{
                    let result=true;
                    for(let key in value){
                        if(item[key]!==value[key]){
                            result=false;
                        }
                    }
                    return result;
                }
            case 'string':
                return (item)=>!!item[value];
        }
    }
}
module.exports=iteratee;