function option1 (arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        
        newArr[arr[i]] = arr[i];
    }
    for (let i = 1; i < newArr.length; i++) {
      if (!newArr[i]) {
        newArr[i] = undefined;
      }        
    }
    return newArr
};

console.log(option1([4, 3, 0, 9]));
