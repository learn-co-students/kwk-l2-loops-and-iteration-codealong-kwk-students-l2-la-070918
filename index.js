// Code your solutions in this file

function printBadges(names){
  for (var count = 0; count <names.length; count++){
    console.log("Welcome " + names[count] +"! You are employee #" + (count+1) +".");
  }
  return names
}

function tailsNeverFails() {
  let count = 0
  while (Math.random() >= 0.5) {
    count++
  }
  return (`You got ${count} tails in a row!`)
}




 



