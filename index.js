const people = ["Guadalupe", "Ollie" , "Aki"]
const eventFunction = "surprise";
// for loop 
function writeCards(people, event) {
  let thankyouList = [];
  for (let i = 0; i < people.length; i++) {
    let thanksMessage = `Thank you, ${people[i]}, for the wonderful ${event} gift!`;
    thankyouList.push(thanksMessage)
  }
  return thankyouList
}
console.log(writeCards(people,eventFunction))

// while loop
function countDown(positiveInt){
  let i = positiveInt;
  while(i>=0){
    console.log(i)
    i--;
  }  
}

console.log(countDown(10))
