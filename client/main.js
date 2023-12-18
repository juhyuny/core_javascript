/* global getNode insertLast*/

// 모듈 프로그래밍

// named export ( 이름 내보내기 ) -> {이름}
// default export ( 이름 내보내기 ) -> 이름

// import { getNode } from './lib/dom/getNode.js';
// import { clearContents } from './lib/dom/clear.js';
// import { insertLast } from './lib/dom/insert.js';

export { getNode, clearContents, insertLast } from './lib/index.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');


// 1. input value 값 가져오기
//     - input에게 input 이벤트를 걸어 준다.
//     - input.value 로 가져온다.

// 2. 두 수의 합 더하기
//     - 타입 확인하기.

function handleInput() {
  const firstValue = first.value * 1;
  const secondValue = second.value / 1;
  const total = firstValue + secondValue;

  result.textContent = '';
  insertLast(result, total);
}


function handleClear(){
  clearContents(first)
  clearContents(second)
  result.textContent = '-'
}

clear.addEventListener('click',handleClear)

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);

// 3. 합계 랜더링 하기
//     - insertLast(), insertAdjacentHTML()




