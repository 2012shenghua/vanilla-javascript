var arr = [1,3,88,100];

console.log(Math.max(arr[0],arr[1],arr[2],arr[3]));
console.log(Math.max.call(Math,arr[0],arr[1],arr[2],arr[3]));
console.log(Math.max.apply(Math,arr));