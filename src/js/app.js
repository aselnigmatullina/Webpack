import demo from './lib';

console.log(demo());

const array = [1, 2, 3, 4];
const max = Math.max(...array);
// Math.max(1, 2, 3, 4);
// Math.max(array[0], array[1]);
console.log(max);