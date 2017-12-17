/*
 WORK FUNCTION
 1: 2017.12.18 0:29
 */
/**
 * Anagrams of string（带有重复项）
 *使用递归。对于给定字符串中的每个字母，为字母创建字谜。
 *使用map（）将字母与每部分字谜组合，
 *然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1。
 */
const anagrams = str => {
	if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
	return str.split('').reduce((acc, letter, i) =>
		acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};

/**
 * 数组平均数
 */
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length\

/**
 * 大写数组的每个单词的首字母
 * 使用replace（）匹配每个单词的第一个字符，并使用toUpperCase（）来将其大写。
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * 首字母大写
 * 使用slice（0,1）和toUpperCase（）大写第一个字母，
 * slice（1）获取字符串的其余部分。 
 * 省略lowerRest参数以保持字符串的其余部分不变，或将其设置为true以转换为小写。
 * （注意：这和上一个示例不是同一件事情）
 */
const captialize = (str, lowerRest = false) => str.lice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

/**
 * 检查回文
 * 将字符串转换为toLowerCase（），并使用replace（）从中删除非字母的字符。
 * 然后，将其转换为tolowerCase（），将（''）拆分为单独字符，reverse（），join（''），
 * 与原始的非反转字符串进行比较，然后将其转换为tolowerCase（）。
 */
const palindrome = str => {
	const s = str.toLowerCase(),
		replace(/[\W_]/g, "");
	return s === = s.split("").reverse().join();
}

/**
 * 计数数组中值的出现次数
 * 每次遇到数组中的特定值时，使用reduce（）来递增计数器。
 */
const countOccurrences = (arr, value) = arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// countOccurrences([1,1,2,1,2,3]) -->3

/**
 * 当前URL
 * 使用window.location.href来获取当前URL。
 */
const currentUrl = () => window.location.href;

/**
 * Curry
 * 使用递归。如果提供的参数（args）数量足够，则调用传递函数f，否则返回一个curried函数f。
 * 
 */
const curry = (fn, arity = fn.length, ...args) => {
		arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
	}
	// curry(Math.pow)(2)(10) ->1024
	// curry(Math.min,3)(10)(50)(2) ->2

/**
 * Deep flatten array
 * 使用递归，使用reduce（）来获取所有不是数组的元素，flatten每个元素都是数组。
 */
const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);

/**
 * 数组之间的区别
 * 从b创建一个Set，然后在a上使用Array.filter（），只保留b中不包含的值
 */
const difference = (a, b) => {
	const s = new Set(b);
	return a.filter(x => !s.has(x));
}

/**
 * 两点之间的距离
 * 使用Math.hypot（）计算两点之间的欧几里德距离。
 */
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
// distance(1,1, 2,3) -> 2.23606797749979

/**
 * 可以按数字整除
 * 使用模运算符%来检查余数是否等与0 
 */
const isDivisible = (dividend, divisor) => dividend % divisor === 0;

/**
 * 转义正则表达式
 * 使用replace（） 来转义特殊字符
 */
const escapeRegExp = str => str.replace(/[.*+?^${}()[\]\\]/g, '\\$&');
// escapeRegExp('(test)') -> \\(test)\\

/**
 * 偶数或奇数
 * 使用Math.abs()将逻辑扩展为负数,使用模%运算符进行检查 如果数字是偶数，则返回true 
 * 如果数字是奇数 则返回false
 */
const isEven = num => num % 2 === 0

/**
 * 阶乘
 * 使用递归 
 */
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

/**
 * 斐波那契数组生成器
 * 创建一个特定长度的空数组，初始化前两个值（0和1）。
 * 使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 */
const fibonacci = n => {
		Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
	}
	// fibonacci(5) ->[0,1,1,2,3]

/**
 * 过滤数组中的非唯一值
 * 将Array.filter()用于仅包含唯一值的数组
 */
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.laseIndexOf(i));

/**
 * Flatten数组
 * 使用 reduce() 来获取数组中的所有元素,并使用concat（）来是他们flatten
 */
const flatten = arr => arr.reduce((a, v) => a.concat(v), [])

/**
 * 从数组中获得最大值
 * 使用Math.max()与spread运算符（...）结合得到数组中的最大值
 */
const arrayMax = arr = Math.max(...arr);

/**
 * 从数组中获得最小值
 * 使用Math.min()与spread运算符（...）结合得到的数组中的最大值
 */
const arrayMin = arr.Math.min(...arr)

/**
 * 获取滚动位置
 * 如果已定义 请使用pageXOffset和pageYOffset，否则使用scrollLeft 和scrollTop 
 * 可以省略el来使用window的默认值                                                           
 */
const getScrollPos = (el = window) => {
	return {
		x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
		y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
	}
}

/**
 * 最大公约数、
 * 使用递归。基本情况是当y等于0时。在这种情况下，返回x。否则，返回y的GCD和x / y的其余部分。
 */
const gcd = (x, y) => !y ? x : gcd(y, x % y);
// gcd (8, 36) -> 4