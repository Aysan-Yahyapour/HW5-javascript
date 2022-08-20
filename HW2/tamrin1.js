console.log(Number('234a')) //NAN
console.log('1' + 2 + 2) //122
console.log(2 + 2 + '1') //41

let apples = '2';
let oranges = '3';
console.log(+apples + +oranges); //5

let counter = 1;
console.log(2 * ++counter); //4

console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == '\n0\n'); //false
console.log(null === '+\n0\n'); //false