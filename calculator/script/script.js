let calculation = localStorage.getItem('calculation') || '';


displayCalculation();


function updateCalculation(x){
    calculation+=x;
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
    document.querySelector('.js-calculation').innerText = calculation;
}

function reset(){
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function result(){
    //Note: eval() takes a string and runs it as code.
    calculation = eval(calculation);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}