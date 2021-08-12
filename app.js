var birthdayInput=document.querySelector('#birthdayInput');
var luckyNumber=document.querySelector('#luckyNumber');
var checkButton=document.querySelector('#checkButton');
var output=document.querySelector('#result');
var birthdayTotal = 0;
function birthdayCalculator(){
    for(i=0; i<Number(birthdayInput.value.length); i++){
        birthdayTotal = birthdayTotal + Number(birthdayInput.value[i]);

    }
}

checkButton.addEventListener('click', function luckCalculator(){
    birthdayCalculator();
    if (birthdayTotal % Number(luckyNumber.value) === 0){
        console.log('lucky');
    } else
    {console.log('unlucky');}
})