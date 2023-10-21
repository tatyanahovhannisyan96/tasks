function fibonacci(n) {

    let prev = 0;
    let curr = 1;
    let fib;

    for (let i = 3; i <= n; i++) {
        fib = prev + curr;
        prev = curr;
        curr = fib;
    }
    if (n == 1) {
        return prev
    } else if (n == 2) {
        return curr
    } else {
        return fib
    }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(20));






