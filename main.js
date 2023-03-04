 var date = document.getElementById('date');
    var calculate = document.getElementById('calculate');
    var result = document.querySelector('.result');

    // set maximum date to today
    //date.max = new Date().toISOString().split('T')[0];
	date.max = new Date().toLocaleDateString("fr-ca");

    calculate.addEventListener('click', () => {
      var today = new Date();
      var birthDate = new Date(date.value);

      // Calculate years
      var years;
      if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        years = today.getFullYear() - birthDate.getFullYear();
      }
      else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
      }

      // Calculate months
      var months;
      if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
      }
      else{
        months = today.getMonth() - birthDate.getMonth() - 1;
      }
	 // console.log(today.getMonth());
	  //console.log(birthDate.getMonth());
      // make month positive
      months = months < 0 ? months + 12 : months;

      // Calculate days
      var days;
      // days of months in a year
      var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (today.getDate() >= birthDate.getDate()) {
        days = today.getDate() - birthDate.getDate();
      } else {
        days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
      }

      // Display result
      result.innerHTML = `<p class="birthdate">You were born on ${birthDate.toDateString()}.</p>`;
      result.innerHTML += `<p class="age">You are ${years} years, ${months} months and ${days} days old.</p>`;
      if (months == 0 && days == 0) {
        result.innerHTML += `<p class="wishing">Happy Birthday!</p>`;
      }
    });
    

    // run calculate on enter key
    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {                                           //13 is the keyCode value for ENTER
        calculate.click();
      }
    });
  
   // date.focus();












/*function dob(){
let birth = document.getElementById("dob").value;
let result = document.getElementById("result");

let date = new Date(birth); 
let current = new Date();

let  inputDate = date.getDate();
let inputMonth = date.getMonth()+1;
let inputYear = date.getFullYear();

let currentDate = current.getDate();
let currentMonth = current.getMonth()+1;
let currentYear = current.getFullYear();

let dateInterval = inputDate - currentDate;
let yearInterval =  currentYear - inputYear ;
let monthInterval = 12-inputMonth + currentMonth;

dateInterval<0 ? "dateInterval*-1" : dateInterval;
monthInterval<0 ? "monthInterval*-1" : monthInterval;
yearInterval<0 ? "yearInterval*-1" : yearInterval;

if(monthInterval<0){
     monthInterval*=-1;
}
else if(monthInterval>12){
     monthInterval-=12;
	 //yearInterval+=1;
}

result.innerText = `${yearInterval} Year   ${monthInterval} Month  ${dateInterval} Days`;

	 
}*/