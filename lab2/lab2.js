/**
 * Возвращает x в степени целого числа n.
 *
 * @param {number} x - возводимое в степень число.
 * @param {number} n - степень, должна быть целым числом.
 * @return {number} NaN, если n - нецелое или x = 0 и n = 0, в остальных случаях x в степени n.
 */
function pow(x, n) {
    if (!Number.isInteger(n)) return NaN;
    if (x === 0 && n === 0) return NaN;
    if (n === 0) return 1; 

    if (n < 0) {
        if (x === 0) return Infinity;
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

/**
 * Возвращает сумму всех натуральных чисел от 1 до n.
 *
 * @param {number} n - максимальное натуральное число, входящее в сумму.
 * @return {number} NaN, если n - не натуральное, в остальных случаях сумму чисел от 1 до n.
 */
const sumTo = (n) => {
    if (!Number.isInteger(n) || n < 1) {
        if (typeof n !== 'number') return NaN;
        return NaN;
    }
    
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    
    return s;
};

/**
 * Определяет, високосный ли год под номером year.
 *
 * @param {number} year - номер года.
 * @return {boolean} true, если year соответствует високосному году, а в остальных случаях - false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Возвращает факториал n.
 *
 * @param {number} n - неотрицательное число.
 * @returns {bigint} Факториал числа в формате BigInt.
 */
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        return NaN;
    }

    let result = 1n;
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}

/**
 * Возвращает число Фибоначчи под номером n.
 * Считается, что fib(0) = 0 и fib(1) = 1.
 *
 * @param {number} n - целое число.
 * @returns {bigint} Число Фибоначчи в формате BigInt.
 */
export function fib(n) {
    if (!Number.isInteger(n)) return NaN;
    if (n === 0) return 0n;

    const isNegative = n < 0;
    const absN = Math.abs(n);

    let a = 0n;
    let b = 1n;

    for (let i = 2; i <= absN; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    if (isNegative && n % 2 === 0) {
        return -b;
    }

    return b;
}

/**
 * Возвращает функцию сравнения с x.
 *
 * @param {number} x - целое число.
 * @return {null|Function} null, если x - нецелое, в остальных случаях - анонимную функцию.
 */
function compare(x) {
    if (!Number.isInteger(x)) {
        return null;
    }
	
    return function(y) {
        return y > x ? true
            : y === x ? null
            : false;
    };
}

/*
 * @param {...number} args - числа для суммирования.
 * @return {number} сумму чисел из args.
 */
function sum(...args) {
    let s = 0;
    for (let i of args) {
        s += i;
    }
    return s;
}

/*
 * @param {object} obj - объект.
 * @return {object} тот же объект obj, но с новым свойством blackSpot.
 */
function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}
