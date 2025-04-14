/*
1. Write a 'while' loop that calculates the sum of all 
numbers from 1 to 5 and store the result in a variable named 
'sum'.
*/
let sum = 0
let i = 1
while (i <= 5) {
    sum = sum + i;   //sum += i
    i++;
}
//console.log(sum)

/*
2. Write a 'while' loop that counts down from 5 to 2 and 
store the numbers in an array named 'countdown'
*/
let countdown = []
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
//console.log(countdown)

/*
3. Write a 'do while' loop that prompts a user to enter their 
favorite tea type until they enter '"stop"'
    Store each tea type in an array named 'teaCollection'
*/
let teaCollection = []
// let tea 

// do {
//     tea = prompt(`Enter you favorite tea(type "stop" to finish)`)
//     if (tea !== "stop") {
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");

/*
 4. Write a 'do while loop' that adds numbes from 1 to 3 and
  store the result in a variable named 'total'
 */

  let total = 0
  let k = 1
  do {
    total += k;
    k++
  } while (k <= 3);
console.log(total)

/*
Write a 'for' loop that multiplies each element in the array
'[ 2, 4, 6]' by 2 and store the result in a new array named 'multipiedNumber'
*/

let multipiedNumber = [];
let number = [ 2, 4, 6];

// for (initPhase; condition ; incre/decre)

for (let l = 0; l < number.length; l++) {
    takeNumber = number[l] * 2;
    multipiedNumber.push(takeNumber)
}


/*
6.Write a 'for' loop that list all the cities in the array '
["parish", "new york", "london", "tokyo"] and stores each 
city in a new array named cityList
*/

let city = ["parish", "new york", "london", "tokyo"]
let cityList = []

for (let c = 0; c < cities.length; c++) {
    const mycity = cities[c];
    cityList.push(mycity)
}