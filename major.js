let ourm =document.querySelector(".ourm");

ourm.addEventListener("click" , function(){
setTimeout(function(){
    window.location.href = 'ourMethod.html';
} , 1000);
   
});

let form=document.querySelector("form");

//let inpp=document.querySelector(".price").value;




form.addEventListener("submit" , function(event){
event.preventDefault();
 /*  let year =document.querySelector("#num");
   let day =document.querySelector("#dayk");
   let price =document.querySelector("#price");
let newp=price.value;
   let totalyear=(year.value)*12;
  let priceofone =(day.value) * newp *30;
   

   let priceis = (totalyear * priceofone);
 console.log(priceis);
   */
 let year = document.querySelector("#num");    // Number of years
 let day = document.querySelector("#dayk");    // Cigarettes per day
 let price = document.querySelector("#price"); // Price per cigarette
 
 // Convert input values to numbers
 let years = Number(year.value);
 let cigarettesPerDay = Number(day.value);
 let pricePerCigarette = Number(price.value);
 
 // Calculate total days
 let totalDays = years * 365;
 
 // Calculate the total cost
 let totalCost = totalDays * cigarettesPerDay * pricePerCigarette;
 let resultDiv = document.querySelector("#result");
    resultDiv.textContent = "Total cost is: " + totalCost + " INR";

    
});
let streak = 0;

function completeDay(day) {
    streak = day;
    document.getElementById('streak-count').innerText = streak;
    alert('Congratulations! You have completed Day ' + day);
}



let text=document.getElementById('text');
let hill1=document.getElementById('hill1');

let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');

let leaf=document.getElementById('leaf');
window.addEventListener('scroll' ,() =>{
  let value=window.scrollY;

  text.style.top =value * 0.5 +'px';

leaf.style.left = value * 0.3  +'px';
hill5.style.left=value* 0.1 +'px';
hill4.style.left=value* -0.1 +'px';
hill1.style.top=value* 0.1 +'px';

  
});



