function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    return "This one is on me!";

  } 
  else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";

  } 
  else {
    return "No can do.";
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good.";
  }

  else{
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous": // kinda like if statement, but a "switch" statement with each case with a key:value or input:output response.
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}