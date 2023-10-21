function product1(a, b, c) {
    if (a == 0 || b == 0 || c == 0) return 'unassigned'

    let count = 0;

    if (a < 0) count++;
    if (b < 0) count++;
    if (c < 0) count++;

    if (count % 2 == 0) {
        return '+'
    } else {
        return '-'
    }
}

console.log(product1(0, -1, -1));

function product2(a, b, c) {
    const product = a * b * c;
    const signs = {
        [0]: 'unassigned',
        [1]: '+',
        [-1]: '-',
    }
    const indexVal = [Number(product > 0) - Number(product < 0)];
    
    return signs[indexVal];
}

console.log(product2(3, 0, -1));
