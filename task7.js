function getfactorial (number) {
    let factorial = 1;
    if (number === 0 || number === 1) {
        return factorial;
    } else {
        for(let i = number; i > 1; i--) {
            factorial *= i
        }
        return factorial;
    }
} 

console.log(getfactorial(0));