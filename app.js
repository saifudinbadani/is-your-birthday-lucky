var birthdayInput=document.querySelector('#birthdayInput');
var luckyNumber=document.querySelector('#luckyNumber');
var checkButton=document.querySelector('#checkButton');
var output=document.querySelector('#result');
var birthdayTotal = '';

function getBirthdayDateArray(){
    return birthdayInput.value.split('-');
}


// function to return date sum 
function parseDate() {
    let birthdayArray = getBirthdayDateArray();
    let birthdayString = '';
    for(i=0; i< birthdayArray.length; i++){
        birthdayString += birthdayArray[i].split('').join('');
    }

    return birthdayString.split('');
}

function dateSum() {
    let total = 0;
    let dateArray = parseDate();
    for(i=0; i < dateArray.length; i++){
        total += Number(dateArray[i])
    }
    return total;
}

function luckCalculator(){
    let sum = dateSum();

    if(sum && luckyNumber.value){
        if (sum % Number(luckyNumber.value) === 0){
            output.innerText = 'Your birthday is lucky!💫'
        } else
        {output.innerText = 'Your birthday is unlucky!☹️'}

    }else {
        output.innerText = 'Enter both the values!!😡'
    }
   
}


checkButton.addEventListener('click',luckCalculator)