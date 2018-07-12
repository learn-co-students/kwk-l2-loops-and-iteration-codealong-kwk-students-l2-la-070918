// Code your solutions in this file

// const names = ['Ada', 'Brendan', "Ali"]

function printBadges(namesArray) {
 for (let i = 0; i < namesArray.length; i++) {
console.log(`Welcome ${namesArray[i]}! You are employee #${i+1}.`)
}
return namesArray
}

function tailsNeverFails(){
  let count = 0
  while (Math.random() >= 0.5) {
    count ++
  }
  return (`You got ${count} tails in a row!`)
}



// return `You got ${tailsNeverFails} tails in a row!`