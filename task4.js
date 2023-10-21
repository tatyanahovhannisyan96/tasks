function insertion (arr) {
    let arrSum = [];
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        const item = arr[i];
        for (let j = 0; j < item.length; j++) {
            sum += item[j];
        }
        arrSum.push(sum)
    }
    return arrSum;
};

console.log(insertion([[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] ))