// Code your solutions in this file
function printBadges(employees){
  for (var count = 0; count<employees.length; count++){
    console.log("Welcome " +employees[count]+"! You are employee #"+(count+1)+".");

  }
  return employees;
}
function tailsNeverFails(){
  var tails=0;
  while(Math.random() >= 0.5){
    tails++;
  }
  return "You got " + tails + " tails in a row!";
}