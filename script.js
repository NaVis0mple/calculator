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
    return a/b;
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

btn.forEach((callback)=>callback.addEventListener('click',(e)=>{
    displayInput.textContent += e.target.textContent ;
    isEqualsClicked = false;     
}));

let btnO = document.querySelectorAll('.btnO');
btnO.forEach((callback)=>callback.addEventListener('click',(e)=>{
    displayOutput.textContent=  displayInput.textContent+ e.target.textContent;
    displayInput.textContent = '';
    isEqualsClicked = false;
}));

let btnE = document.querySelector('.btnE');
btnE.addEventListener('click',()=>{
    if (isEqualsClicked) return;     //if is true then skip below
    let OP = displayOutput.textContent.slice(-1);
    let a = parseFloat(displayOutput.textContent.slice(0,-1));
    let b = parseFloat(displayInput.textContent);
    displayOutput.textContent = displayOutput.textContent + displayInput.textContent+'=';
    displayInput.textContent = operator(OP,a,b);
    isEqualsClicked = true;      // set to true if click 
}); 

//clear
let btnC = document.querySelector('.btnC');
btnC.addEventListener('click',()=>{
    displayInput.textContent ='';
    displayOutput.textContent='';
    isEqualsClicked = false;
});
