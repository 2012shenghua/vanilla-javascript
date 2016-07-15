/*
数组相似要求如下
1. 数组中的成员类型相同，顺序可以不同。例如[1, true] 与 [false, 2]是相似的。
2. 数组的长度一致。 
3. 类型的判断范围，需要区分:String, Boolean, Number, undefined, null, 函数，日期, window. 当以上全部满足，则返回”判定结果:通过”，否则返回”判定结果:不通过”。
*/

let arr1 = [1, '2', 3],
    arr2 = ['1', 3, 4];

const arraysSimilar = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		throw  new Error('非数组');
	}
    let a = arr1.length,
        b = arr2.length,
        isTrue = "判定结果通过",
        res = isFalse = "判定结果不通过";
    if(arr1 === arr2){
        return isTrue;
    }else if(a == b) {
        arr1.forEach(value => {
            aType.push(typeof e);
        },aType = []);
        arr2.forEach(value => {
            bType.push(typeof e);
        },bType = []);
        (aType.sort().toString()==bType.sort().toString()) && (res = isTrue);
    }else {
        return isFalse;
    }    
    return res;
}
console.log(arraysSimilar(arr1, arr2));