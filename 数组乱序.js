let arr = [1,2,3,4,5];

const sortRandom = arr => arr.sort(() =>  Math.random() > 0.5? -1: 1);

console.log(sortRandom(arr));
