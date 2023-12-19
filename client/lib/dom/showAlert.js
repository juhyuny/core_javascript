
import { getNode } from './getNode.js'
import { addClass, removeClass } from './css.js'



export function showAlert(){
  
  if(isString(node)){
    node = getNode(node);
  }
  
  
  getNode('.alert-error').textContent = '정확한 이름을 입력해 주세요.'
  addClass('.alert-error','is-active');
  setTimeout(() => {
    removeClass(node,'is-active');
  }, 1500);
}