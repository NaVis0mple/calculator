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
            return devision(a ,b);
        default :
            return null;
    }
}