import { fib } from '../lab2/lab2.js';

/**
 * Возвращает дробную часть числа.
 *
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
 */
export function getDecimal(num) {
    const absNum = Math.abs(num); 
    return Number((absNum - Math.floor(absNum)).toFixed(15));
}

/**
 * Нормализует ссылку: заменяет http:// на https:// или добавляет https:// в начало.
 *
 * @param {string} url - ссылка.
 * @return {string} нормализованную url.
 */
export function normalizeUrl(url) {
    if (!url) return 'https://';

    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    
    if (!url.startsWith('https://')) {
        return 'https://' + url;
    }

    return url;
}

/**
 * Проверяет, есть ли в строке спам: подстроки "XXX" или "viagra" в любом регистре.
 *
 * @param {string} str - исходная строка.
 * @return {boolean} true, если в str есть спам, иначе false.
 */
export function checkSpam(str) {
    if (!str) return false;
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('xxx') || lowerStr.includes('viagra');
}

/**
 * Сокращает строку до указанного количества символов.
 *
 * @param {string} str - исходная строка.
 * @param {number} maxlength - максимальное число символов в возвращаемой строке.
 * @return {string} копию str, сокращённую до maxlength символов с троеточием в виде последнего символа, если её длина превышает maxlength, иначе просто str. 
 */
export function truncate(str, maxlength) {
    if (!str) return '';
    if (str.length <= maxlength) {
        return str;
    }
    if (maxlength <= 0) return '\u2026'; 
    return str.slice(0, maxlength - 1) + '\u2026';
}

/**
 * Переводит строку в "верблюжий стиль", удаляя дефисы и переводя буквы в этих местах в верхний регистр.
 *
 * @param {string} str - исходная строка.
 * @return {string} str в "верблюжьем стиле".
 */
export function camelize(str) {
    if (!str) return '';
    const arr = str.split('-');
    return (arr[0] || '') + arr.slice(1).map(ucFirst).join('');
}

/**
 * Возвращает строку с первым символом в верхнем регистре.
 *
 * @param {string} str - исходная строка.
 * @return {string} str с первым символом в верхнем регистре.
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Возвращает массив из чисел Фибоначчи, начиная с нулевого.
 *
 * @param {number} n - натуральное число, количество элементов в массиве.
 * @return {bigint[]|null} null, если n ненатуральное, иначе массив чисел Фибоначчи.
 */
export function fibs(n) {
    const num = Number(n);
    if (!Number.isInteger(num) || num <= 0) {
        if (typeof n !== 'bigint' || n <= 0n) {
            return null;
        }
    }

    const limit = Number(n);
    let arr = [];
    
    for (let i = 0; i < limit; i++) {
        if (i === 0) arr.push(0n);
        else if (i === 1) arr.push(1n);
        else arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

/**
 * Возвращает отсортированную по убыванию копию массива чисел.
 *
 * @param {number[]} arr - массив чисел.
 * @return {number[]} отсортированную по убыванию копию arr.
 */
export function arrReverseSorted(arr) {
    if (!arr) return [];
    return [...arr].sort(backwardsSort);
}

/**
 * Критерий сортировки чисел по убыванию.
 *
 * @param {number} a - первое число.
 * @param {number} b - второе число.
 * @return {number} 1, если a < b, 0, если a == b, и -1, если a > b.
 */
function backwardsSort(a, b) {
    if (a < b) return 1;
    if (a === b) return 0;
    if (a > b) return -1;
    return 0;
}

/**
 * Возвращает копию массива, но уже без повторяющихся элементов.
 *
 * @param {Array} arr - массив.
 * @return {Array} копию arr без повторений.
 */
export function unique(arr) {
    if (!arr) return [];
    return [...new Set(arr)];
}
