function getAcronym(str) {
    const words = str.split(' ');
    let acronym = '';

    for (let word of words) {
        if (word.length > 0) {
            acronym += word[0].toUpperCase();
        }
    }

    return acronym;
}

console.log(getAcronym('risoner of War' ));