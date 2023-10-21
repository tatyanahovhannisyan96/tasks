function checkValidity(input) {
    // let trimmedInput = input.trim();         // ??? not wotking
    let editedInput = input.split(' ').join('');
    if(editedInput[0] === '+') {
        editedInput = editedInput.slice(1);
    }
    if(editedInput.length !== 10 || editedInput.includes('+') || isNaN(Number(editedInput))) {
        return 'Bad number'
    } else {
        return editedInput
    }
}

console.log(checkValidity('+788 7878 990'));