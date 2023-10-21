function shallowCompare(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!(key in obj2) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let a = { a: '1' }; 
let b = { a: '1', b: '2' };

console.log(shallowCompare(a, b));