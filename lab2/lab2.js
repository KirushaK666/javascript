/**
 * Возвращает x в степени целого числа n.
 *
 * @param {number} x - возводимое в степень число.
 * @param {number} n - степень, должна быть целым числом.
 * @return {number} NaN, если n - нецелое или x = 0 и n = 0, в остальных случаях x в степени n.
 */
export function pow(x, n) {
    if (!Number.isInteger(n)) {
        return NaN;
    }

    if (n === 0) {
        if (x === 0) return NaN;
        return 1;
    }

    if (n < 0) {
        if (x === 0) return Infinity; // Защита от деления 1 / 0
        n = -n;
        x = 1 / x;
    }

    let result = x;
    let x1 = x;
    for (let i = 1; i < n; i++) {
        result *= x1;
    }

    return result;
}

/**
 * Возвращает сумму всех натуральных чисел от 1 до n.
 *
 * @param {number} n - максимальное натуральное число, входящее в сумму.
 * @return {number} NaN, если n - не натуральное, в остальных случаях сумму чисел от 1 до n.
 */
export let sumTo = new Function('n', `
    if (!Number.isInteger(n) || n < 1) {
        return NaN;
    }
    
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    
    return s;
`);

/**
 * Определяет, високосный ли год под номером year.
 *
 * @param {number} year - номер года.
 * @return {boolean} true, если year соответствует високосному году, а в остальных случаях - false.
 */
export function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Возвращает факториал n.
 *
 * @param {number} n - неотрицательное число.
 * @returns {bigint} Факториал числа в формате BigInt.
 */
export function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        return NaN;
    }

    // Внутренняя функция-помощник для безопасной рекурсии с BigInt
    function recurse(bigN) {
        if (bigN === 0n) return 1n;
        return bigN * recurse(bigN - 1n);
    }

    return recurse(BigInt(n));
}

/**
 * Возвращает число Фибоначчи под номером n.
 * Считается, что fib(0) = 0 и fib(1) = 1.
 *
 * @param {number} n - целое число.
 * @returns {bigint} Число Фибоначчи в формате BigInt.
 */
export function fib(n) {
    if (!Number.isInteger(n)) {
        return NaN;
    }
	
    let prev = -1n;
    let cur = 0n;
    let t = 0n;
    
    let i = 0;
    if (n) {
	    i = Math.floor(Math.log2(Math.abs(n))) + 1;
    }

    while (i--) {
	    t = cur * (2n * prev + cur);
        prev = prev * prev + cur * cur;
        cur = t;

        if (Math.floor(n % 2 ** (i + 1) / 2 ** i) != 0) {
            t = cur + prev;
            prev = cur;
            cur = t;
        }
    }
    
	cur = n < 0 && n % 2 == 0 ? -cur : cur; 
    
    return cur;
}

/**
 * Возвращает функцию сравнения с x.
 *
 * @param {number} x - целое число.
 * @return {null|Function} null, если x - нецелое, в остальных случаях - анонимную функцию.
 */
export function compare(x) {
    if (!Number.isInteger(x)) {
        return null;
    }
	
    return function(y) {
        return y > x ? true
            : y === x ? null
            : false;
    };
}

/**
 * Возвращает сумму передаваемых чисел.
 *
 * @param {...number} args - числа для суммирования.
 * @return {number} сумму чисел из args.
 */
export function sum(...args) {
    let s = 0;
    for (let i of args) {
        s += i;
    }
    return s;
}

/**
 * Возвращает объект с добавленным скрытым свойством blackSpot со значением true.
 *
 * @param {object} obj - объект.
 * @return {object} тот же объект obj, но с новым свойством blackSpot.
 */
export function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}
