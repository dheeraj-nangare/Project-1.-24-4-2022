let arry = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let tempArr = [];

for (let index = 0; index < arry.length; index++) {
    if (index < k) {
        tempArr.push(arry[index]);
    }
}
arry.splice(0, k)

// for (let index = 0; index < tempArr.length; index++) {
//     arry.push(tempArr[index])
// }
arry = arry.concat(tempArr)
console.log("left rotate array is: ", arry);

