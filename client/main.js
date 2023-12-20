import { diceAnimation, getNodes } from "./lib/index.js";




const [rollingButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNodes('.recordListWrapper');


// [phase-1]
// 1. 주사위 굴리기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록

// toggle


const handleRollingDice = (()=>{

  let isClicked = false;
  let stopAnimation;

  return ()=>{
    if(!isClicked){
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
  
    }else{
  
      clearInterval(stopAnimation)
      recordButton.disabled = false;
      resetButton.disabled = false;
      
    }
  
    isClicked = !isClicked
  }
})()

function handleRecord(){
  recordListWrapper.hidden = false;
}
function handleReset(){
  recordListWrapper.hidden = true;
}


rollingButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)


// 1. 주사위의 눈으 ㄹ가져온다.
// 2. 태그를 만든다
// 3. html에 뿌려준다.