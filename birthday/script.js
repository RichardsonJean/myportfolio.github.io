var userName, monthOfBirth, dayOfBirth;
function numDaysUntilNextBirthday(month, day){
   
    var today= new Date(), 
    year= today.getFullYear(), 
    
    nextday= new Date(year, month-1, day);
    today.setHours(0, 0, 0, 0);
    if(today>nextday) nextday.setFullYear(year+1);
    return Math.round((nextday-today)/8.64e7);
}
 
function displayNumDays(){
    var userName = prompt('Please enter your name');
   do{  
    monthOfBirth = Number(prompt('Please enter a number between 1 and 12 for your month of birth?', ' '));
}
   while(isNaN(monthOfBirth) || monthOfBirth==0 || monthOfBirth >= 13);
      

    do{dayOfBirth = Number(prompt('Please enter a number between 1 and 31 for your day of birth', ' '));
    }while(isNaN(dayOfBirth) ||dayOfBirth == 0 || dayOfBirth >= 32);

    var numberOfDays= numDaysUntilNextBirthday(monthOfBirth, dayOfBirth);
    var today= new Date(),
    
    nextBirthday = (new Date(today.getFullYear(), monthOfBirth-1, dayOfBirth))<today?(new Date(today.getFullYear()+1, monthOfBirth-1, dayOfBirth)):(new Date(today.getFullYear(), monthOfBirth-1, dayOfBirth));
    d1 =nextBirthday.getMilliseconds();
    d2=nextBirthday.toDateString();
    
    if(monthOfBirth == 2 & dayOfBirth > 29){
        alert(userName + ', February has 28 or 29 days');
    }
    else if((monthOfBirth == 4 || monthOfBirth ==6 || monthOfBirth==9 || monthOfBirth==11)& dayOfBirth>30){
        alert(userName + ', April, June, September, and November have 30 days')
    }
    else if(isNaN(monthOfBirth) || monthOfBirth==0 || monthOfBirth >= 13 || isNaN(dayOfBirth) ||dayOfBirth == 0 || dayOfBirth >= 32){
        alert(userName + ', please enter a correct month and day of birth');
    }  
    else if(numberOfDays=== 0){alert('Happy Birthday ' + userName +'!'+ ' Today is your birthday!');}
    else{alert('Your next birthday will be in ' +numberOfDays+ ' day'+(numberOfDays>1? 's ': ' ')+ userName + ', and your next birthday date will be on ' + d2);}
}
