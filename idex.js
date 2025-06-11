var prompt = require('promt-synk')();
const age = prompt("Enter your age"); 
if(age < 18)
{
    console.log("you get 20% discount");
}
else{
    console.log("you get 30% discount");
}
