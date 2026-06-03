import { fib } from '../lab2/lab2.js';

/**
 * Возвращает математическую дробную часть числа.
 * Для отрицательных чисел (например, -1.23) возвращает остаток до следующего целого (0.77).
 *
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
 */
export function getDecimal(num) {
    if (!Number.isFinite(num)) return 0;
    // Математически правильный остаток от деления на 1
    let result = num - Math.floor(num);
    // Избавляемся от багов округления JS (например, 0.2300000000004)
    return Number(result.toFixed(12));
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
        // Тесты вашего друга требуют именно символ "…" (двоеточие/троеточие), а не три отдельные точки
        return str;
    }
    if (maxlength <= 0) return '…';
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Переводит строку в "верблюжий стиль", удаляя дефисы и переводя буквы в этих местах в верхний регистр.
 * Поддерживает один или несколько дефисов подряд.
 *
 * @param {string} str - исходная строка.
 * @return {string} str в "верблюжьем стиле".
 */
export function camelize(str) {
    if (!str) return '';
    // Регулярное выражение находит один или более дефисов и букву после них
    return str.replace(/-+(.)/g, function(match, chr) {
        return chr.toUpperCase();
    });
}

/**
 * Возвращает массив из чисел Фибоначчи, начиная с нулевого.
 *
 * @param {number} n - натуральное число, количество элементов в массиве.
 * @return {bigint[]|null} null, если n ненатуральное, иначе массив чисел Фибоначчи.
 */
export function fibs(n) {
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
 * Не изменяет оригинальный массив!
 *
 * @param {number[]} arr - массив чисел.
 * @return {number[]} отсортированную по убыванию копию arr.
 */
export function arrReverseSorted(arr) {
    if (!arr) return [];
    // Делаем копию через [...arr], чтобы не поломать оригинал
    return [...arr].sort((a, b) => b - a);
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

if (typeof window !== 'undefined') {
    window.getDecimal = getDecimal;
    window.normalizeUrl = normalizeUrl;
    window.checkSpam = checkSpam;
    window.truncate = truncate;
    window.camelize = camelize;
    window.fibs = fibs;
    window.arrReverseSorted = arrReverseSorted;
    window.unique = unique;
}
