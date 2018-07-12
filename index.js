// Code your solutions in this file
function printBadges(emp){
  for(var count = 0; count < emp.length; count++){
    console.log(`Welcome ${emp[count]}! You are employee #${count+1}.`);
  }
  return emp;
}
function tailsNeverFails(){
  var tails = 0;
  while(Math.random() >= 0.5){
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}