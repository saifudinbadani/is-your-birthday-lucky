var birthdayInput=document.querySelector('#birthdayInput');
var luckyNumber=document.querySelector('#luckyNumber');
var checkButton=document.querySelector('#checkButton');
var output=document.querySelector('#result');
var birthdayTotal = '';
var sum = 0;



function birthdaySumCalculator(){
    var birthdayArray= birthdayInput.value.split('-');
    

    for(i=0; i<birthdayArray.length; i++){
        birthdayTotal = birthdayTotal + birthdayArray[i];
        
    }


    for (i=0; i<birthdayTotal.length; i++){
            sum = sum + Number(birthdayTotal.charAt(i));
            
        } 
        
    }
    
    
    
    


checkButton.addEventListener('click', function luckCalculator(){
    birthdaySumCalculator();
    if(sum&&luckyNumber.value){
        if (sum % Number(luckyNumber.value) === 0){
            output.innerText = 'You are lucky!💫'
        } else
        {output.innerText = 'You are unlucky!☹️'}

    }else {
        output.innerText = 'Enter both the values!!😡'
    }
   
})