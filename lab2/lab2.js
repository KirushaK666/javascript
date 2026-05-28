"use strict"

function pow(x, n) {
    return Math.pow(x, n);
}

function sumTo(n) {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function factorial(n) {
    if (n < 0) return 0n;
    let result = 1n;
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

function fib(n) {
    if (n < 0) return 0n;
    if (n === 0) return 0n;
    if (n === 1 || n === 2) return 1n;

    let a = 1n;
    let b = 1n;
    let c = 0n;

    for (let i = 3; i <= n; i++) {
        c = a + b;
        b = a;
        a = c;
    }
    return a;
} 

function compare(x) {
    return (y) => {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

function addBlackSpot(obj) {
    if (obj && typeof obj === 'object') {
        obj[Symbol.for("blackSpot")] = true;
    }
    return obj;
}

