


function earth(){
  
  let water = true;

  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }

  let gravity = 10;


  return function (value){
    gravity = value;
  }





}

const ufo = earth()


// ufo(1)




const button = document.querySelector('button');


// function handleClick(){
//   // console.log('clicked');
//   let isClicked = false;
  
//   return function(){
//     if(!isClicked){
//       document.body.style.background = 'orange'
//     }else {
//       document.body.style.background = 'white'
      
//     }
//     isClicked = !isClicked;
//   }
// }


// button.addEventListener('click', handleClick());

const handleClick = (() => {

  let isClicked = false;

  return function (){
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked
  }
})()




button.addEventListener('click',handleClick);



// ----

// function useState(){
  
//   let value = initValue;
  
//   function read(){
//     return value;
//   }
  
//   function write(newValue){
//     value = newValue
//   }
  
//   return [read,write]
  
  
// }


// const [state,setState] = useState(true)













