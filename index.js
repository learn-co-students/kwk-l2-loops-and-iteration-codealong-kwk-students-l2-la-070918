var names= ["Ada","Brendan", "Ali"]

function printBadges(names){
for (var counter = 0; counter<3; counter++)
console.log("Welcome " + names[counter] + "! "+ "You are employee #" + (counter+1) + ".")
return names
}

var tails = 1
var counter = 0
function tailsNeverFails() {
tails=Math.floor(Math.random()*2);
}

function tailsNeverFails() {
var counter = 0
var number = Math.random()
  while (number>= 0.5) {
  ++counter
  number = Math.random()
 }
 return "You got " + counter + " tails in a row!"
}