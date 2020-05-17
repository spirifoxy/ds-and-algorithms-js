// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    if (n <= 1) {
        return n;
    }
    let first = 0;
    let second = 1;
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        answer = first + second;
        first = second;
        second = answer;
    }
    return answer;
}

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}