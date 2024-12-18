
let arr1 = [];
let arr2 = [2,4,6,8,10];

const arr1IsEmpty = !(Array.isArray(arr1) && arr1.length >0);
const arr2IsEmpty = !(Array.isArray(arr2) && arr2.length >0);

console.log(arr1IsEmpty, arr2IsEmpty);