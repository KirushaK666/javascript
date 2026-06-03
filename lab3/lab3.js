import { fib } from '../lab2/lab2.js';

/**
 * Возвращает дробную часть числа.
 *
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
 */
export function getDecimal(num) {
    return Number((num - Math.floor(num)).toFixed(15));
}

/**
 * Нормализует ссылку: заменяет http:// на https:// или добавляет https:// в начало.
 *
 * @param {string} url - ссылка.
 * @return {string} нормализованную url.
 */
export function normalizeUrl(url) {
    // Безопасная замена строго в начале строки
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
    const lowerStr = str.toLowerCase();
    // Избыточный тернарный оператор удален
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
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '\u2026';
}

/**
 * Переводит строку в "верблюжий стиль", удаляя дефисы и переводя буквы в этих местах в верхний регистр.
 *
 * @param {string} str - исходная строка.
 * @return {string} str в "верблюжьем стиле".
 */
export function camelize(str) {
    const arr = str.split('-');
    // Чтобы избежать ошибок с пустыми массивами, берем первый элемент или пустую строку
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
    // Надежная проверка на натуральное число
    if (!Number.isInteger(n) || n <= 0) {
        return null;
    }

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = fib(i);
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
    // Красивое и современное копирование массива через спред-оператор
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
}

/**
 * Возвращает копию массива, но уже без повторяющихся элементов.
 *
 * @param {Array} arr - массив.
 * @return {Array} копию arr без повторений.
 */
export function unique(arr) {
    // Создание массива из Set в одну строчку
    return [...new Set(arr)];
}
