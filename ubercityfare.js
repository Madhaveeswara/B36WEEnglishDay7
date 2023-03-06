let baseFee = 200;
let cities = ["Visakhapatnam", "Chennai", "Kerala", "Bangalore" ];
let uberRates = [500, 400, 150, 450]
// DRY = don't REPEAT yourself
//prompts to customer
let city = prompt("Welcome to simple Uber fare calculator :: What is your destination?")


alert("your chosen destination is "+city);


//function that will getRate based on customerCity
function getFareFor(city) {
  //uberRate function that will calculate the rate based on customerCity and index
   let index = cities.indexOf(city);
   
   //calculate the final rate
    let finalRate = (uberRates[index]) * baseFee;
  
    alert(city+"  rate is: "+finalRate);
  console.log(city, "rate is:", finalRate);
}
//call the getRate function passing in the customerCity arugment
getFareFor(city)