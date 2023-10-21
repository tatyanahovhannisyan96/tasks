function getNewObj(obj) {
    const newObj = {};

    for (const key in obj) {
        const value = obj[key];
        if (newObj.hasOwnProperty(value)) {
            if (Array.isArray(newObj[value])) {
                newObj[value].push(key);
            } else {
                newObj[value] = [newObj[value], key];
            }
        } else {
            newObj[value] = key;
        }
    }

    return newObj;
}

console.log(getNewObj({ a: '1', b: '2', c: '2' } ));
