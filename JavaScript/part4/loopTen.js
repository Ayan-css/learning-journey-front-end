/*
1. Write a 'for' loop that loops through the array '["green tea", "black tea","chai", "oolong tea"]' and stops the loop when it finds '"chai"'.
    Store all teas before '"chai"' in a new array named 'selectedTeas'.
*/
let teas = ["green tea", "black tea","chai", "oolong tea"]
let selectedTeas = []

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai"){
        break
    }
   selectedTeas.push(teas[i])
    
}
// console.log(selectedTeas)

/*
2.Write a 'for' loop that loops through the array '["london","New York","paris","Berlin"]' and skips '"paris"'.
    store the cities in a new array named 'visitedCities'.
 */
 let cities = ["london","New York","paris","Berlin"]
 let visitedCities = []

  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "paris" || cities[i] === "Paris"){
        continue
    }
  visitedCities.push(cities[i])
    
  }

  /*
  3. Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found.
    Store all numbers before '4' in a new array named 'smallNumber'.
  */
let numbers = [1, 2, 3, 4, 5]
let smallNumber = []

for (const number of numbers) {
    if (number === 4){
        break
    }
    smallNumber.push(number)
}

/*
4. Use a 'for-of' loop to iterate through the array '["chai","green tea","herbal tea","black tea"]' and skip 'herbal tea'.
    Store the other teas  in an array named 'preferredTea'.
 */
let tea = ["chai","green tea","herbal tea","black tea"]
    let preferredTea = []

    for (const sTea of tea) {
        if (sTea === "herbal tea"){
            continue
        }
        preferredTea.push(sTea)
    }
    // console.log(preferredTea)

/*
5. Use a 'for-in' loop to loop through an object containing city population.
    Stop the loop when the population of '"Berlin"' is found and stote all previous cities' population in a new object named 'cityPopulation'.
    
    let cituesPopulation = {
    "London" :8900000
    "New York" : 8400000
    "Paris" : 2200000
    "Berlin" : 3500000
    }
*/


let cituesPopulation = {
    London :8900000,
    "New York" : 8400000,
    Berlin : 3500000,
    Paris : 2200000,
    }

let citiesNewPopulations = []

for (const city in cituesPopulation) {
// key = value
if (city == "Berlin"){
    break;
}
  citiesNewPopulations[city] = cituesPopulation[city]
   
}
/*
6. Use 'for-in' loop to loop through an object containing city population.
    skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.

    let worldCities = {
        "Sydney" = 5000000
        "Tokyo" = 9000000
        "Berlin" = 3500000
        "Paris" = 2200000
    }
*/

let worldCities = {
    Sydney : 5000000,
    Tokyo : 9000000,
    Berlin : 3500000,
    Paris : 2200000,
}

let largeCities = {}

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue
        
    }
    largeCities[city] = worldCities[city]
}
// console.log(largeCities)

/*
7. Write a 'forEach' loop that iterates through the array '["earl grey", "green tea", "chai", "oolong tea"]
    Stop the loop when '"chai"'  is found, and store all previous tea types in array named 'availableTeas'.
*/
let teaColection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teaColection.forEach(function(tea){
    if (tea === 'chai') {
        return          // it used in function in replace of break from loop
    }
    availableTeas.push(tea)
});

/*
8. Write a 'forEach' loop that iterate through the array '["Berlin","Tokyo","Sydney","Paris"]'.
    Skip '"Sydney" and store the other cities in a new array named 'traveldCities'.
*/

let myWorlCities = ["Berlin","Tokyo","Sydney","Paris"]
let traveldCities = []

myWorlCities.forEach(city => {
    if (city === "Sydney"){
        return;
    }
    traveldCities.push(city)
});

/*
9. Write a 'for' loop that iterates through the array '[2, 5, 7, 9]'
skip the value 7 and multiply the rest by 2. Store the result in a new array named 'doubledNumbers'
 */
let myNumber = [2, 5, 7, 9]
let doubledNumbers = []
for (let i = 0; i < myNumber.length; i++) {
    if (numbers[i] === 7){
        continue
    }
    doubledNumbers.push(numbers[i] * 2)
}
/*
10. Use a 'for-of' loop to iterate through the array '["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
    and stop when the lenght of the current tea name is greater than 10.
    Store the teas iterated over in an array named 'shortTeas'.
*/
let myteas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []

for (const tea of myteas) {
    if (tea.length > 10 ){
        break
    }
    shortTeas.push(tea)
}
