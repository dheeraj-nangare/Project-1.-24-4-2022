let lokiArray = [5,3,9,1,44,6];
for (let index = 0; index < lokiArray.length; index++) {
    if (index % 2 == 0) {
        for (let index1 = index + 1; index1 < lokiArray.length; index1++) {
            if (lokiArray[index] > lokiArray[index1]) {
                let t = lokiArray[index];
                lokiArray[index] = lokiArray[index1];
                lokiArray[index1] = t;
            }
        }
    }
}
console.log(lokiArray, "even position sorted");




