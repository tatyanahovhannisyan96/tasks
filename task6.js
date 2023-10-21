function mix(arr1, arr2) {
    const newArray = [];

    newArray[0] = arr1[0];
    newArray[2] = arr1[1];

    let newIndex = 1;
    for (let i = 0; i < arr2.length; i++) {
        newArray[newIndex] = arr2[i];
        newIndex++
    }

    return newArray;
}

console.log(mix([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
