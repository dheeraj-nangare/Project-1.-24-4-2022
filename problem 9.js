let b1 = 5;
let a1 = 1;
let c1 = 6;
let temp = ((b1 * b1) - (4 * a1 * c1));
let sqrt = Math.sqrt(temp);
let cofficient1 = ((-b1 + sqrt) / (2 * a1));
let cofficient2 = ((-b1 - sqrt) / (2 * a1));
console.log(cofficient1.toFixed(2), cofficient2.toFixed(2));