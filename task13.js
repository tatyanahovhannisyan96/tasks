const array = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];

function filterArr(arr) {
    const filteredArr = [];

    for (const obj of arr) {
        if (obj.readStatus === true) {
            filteredArr.push(obj);
        }
    }

    for (let i = 0; i < filteredArr.length; i++) {
        for (let j = i + 1; j < filteredArr.length; j++) {
            if (filteredArr[i].percent < filteredArr[j].percent) {
                [filteredArr[i], filteredArr[j]] = [filteredArr[j], filteredArr[i]];
            }
        }
    }

    return filteredArr;
}

console.log(filterArr(array));