/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(weekend + '');

// boolean

let isClicked = false;
console.log(isClicked + '');
console.log('isClicked : ', isClicked);

// dot log 플러그인

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));

// null

let money = null;

console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));

// 문자 자체를 숫자로 바꾸는 방법 3가지
// +, * 1, / 1

console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string

const width = '105.3px';

console.log(Number(width));
console.log(parseInt(width, 10));
console.log(parseFloat(width, 10));
// parseInt
// parseFloat

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(Boolean(0)); // false

const value = prompt('값을 입력해주세요');

// if (value) {
// }

console.log(typeof value); // prompt는 입력받는 값이 모두 문자열로 옴
console.log(typeof (value * 1));
