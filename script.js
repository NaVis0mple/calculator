//plus minus multiply division
function add(a ,b){
    return a+b;
}
function minus(a ,b){
    return a-b;
}
function multiply(a ,b){
    return a*b;
}
function division(a ,b){
    if (b === 0) {
        return Infinity; // return a special value to indicate undefined result
      }
      return a / b;
}
//operator
function operator(operator ,a , b){
    switch (operator){
        case '+':
            return add(a ,b);
        case '-':
            return minus(a ,b);
        case '*':
            return multiply(a ,b);
        case '/':
            return division(a ,b);
        default :
            return null;
    }
}

//button
let btn = document.querySelectorAll('.btnN');
let displayInput = document.getElementById('displayInput');
let displayOutput = document.getElementById('displayOutput');
let isEqualsClicked = false;   // set a variable to track if clicked
let isOperatorClicked= false;
let previousCalculateNum = null;
let previousOperator = null;
let box1 = document.querySelector(".box1");


btn.forEach((callback)=>callback.addEventListener('click',(e)=>{

    if (isEqualsClicked) {
        displayInput.textContent = '';
        displayOutput.textContent = '';
    };
    displayInput.textContent += e.target.textContent ;
    previousCalculateNum = e.target.textContent;
    isEqualsClicked = false;     
}));
//keyborad
window.addEventListener('keydown',(e)=>{
    if (isEqualsClicked) {
        displayInput.textContent = '';
        displayOutput.textContent = '';
    };
    if(/\d/.test(e.key)){
    displayInput.textContent += e.key ;
    previousCalculateNum = e.key;
    isEqualsClicked = false; 
    console.log(e.key);
    }
});




let btnO = document.querySelectorAll('.btnO');
btnO.forEach((callback)=>callback.addEventListener('click',(e)=>{
    if (displayInput.textContent==='') return;
    if (previousCalculateNum!=null&&previousOperator!=null){
        let result = operator(previousOperator,parseFloat(displayOutput.textContent.slice(0,-1)),parseFloat(previousCalculateNum));
        displayOutput.textContent = result + e.target.textContent;
        displayInput.textContent = '';

    }else{
    displayOutput.textContent=  displayInput.textContent+ e.target.textContent;
    displayInput.textContent = '';
    }
    previousOperator = e.target.textContent;
    isEqualsClicked = false;
    isOperatorClicked = true;
}));
//keyborad


let btnE = document.querySelector('.btnE');
btnE.addEventListener('click',()=>{
    if (displayInput.textContent==='') return;
    let OP = displayOutput.textContent.slice(-1);
    let a = parseFloat(displayOutput.textContent.slice(0,-1));
    let b = parseFloat(displayInput.textContent);
    if (b === null || b === undefined || isNaN(b)) {  //(!b) if b=0 is true cause problem
        return;
      }
    if (a === null || a === undefined || isNaN(a)) { 
        return;
      }
    console.log('hi');

    if(isEqualsClicked) {     //1+1=2  press '='    2+1=3 
        let previousResult = parseFloat(displayInput.textContent);
        let newResult = operator(previousOperator,previousResult,parseFloat(previousCalculateNum));
        displayOutput.textContent = previousResult + previousOperator + previousCalculateNum  +'=';
        displayInput.textContent = newResult;
    }
    else{
        displayOutput.textContent = displayOutput.textContent + displayInput.textContent+'=';
        displayInput.textContent = operator(OP,a,b);
        
        isOperatorClicked = false;
    }
    isEqualsClicked = true;      // set to true if click 
}); 
//clear
let btnC = document.querySelector('.btnC');
btnC.addEventListener('click',(e)=>{
    displayInput.textContent ='';
    displayOutput.textContent='';
    isEqualsClicked = false;
    isOperatorClicked = false;
    previousCalculateNum = null;
    previousOperator = null;
});
