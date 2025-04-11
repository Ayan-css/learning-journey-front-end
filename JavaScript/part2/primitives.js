//it is a type of data which include 

// String
// Boolean
// Number
// Null
// Undefined
// Symbol



// Number 

let balance = 120

console.log(balance)
console.log(typeof(balance))//it will print type of balance

let anotherBalanca = new Number(120) // not recomended way

console.log(anotherBalanca) // it is way to desing a data which can also be used for boolean
console.log(anotherBalanca.valueOf()) 


console.log(typeof(balance))
console.log(typeof(anotherBalance)) // here we can see that both of them are giving differnt data type as balance is a number and primitives data type whereas anotherBalance is giving object which contains number and non-premitives


//Boolean

let isActive = true
let isTruelyActive = new Boolean(true)

//Null and undefined

let firstname // it is undefined
let middlename = undefined
let lastname = null  // it is null which print typof not defined which is not same as undefined 

console.log(firstname)
console.log(middlename)
console.log(lastname)



//String 

let myString = "hello"
let myString1 = 'hola'
//old method to combine string is 
let oldstring = myString + 'ayan'
console.log(oldstring)

let oldstring1 = myString + ' ayan' //in older version you have a space manually while combinig string or any value to seprate them
console.log(oldstring1)


let myString2 = `marhaba`
//new method to combine string is 

let newstring = `${myString2} ayan` //but no more

console.log(newstring)

let demoOne = `the value is ${7*7}`//we can also do computation here

console.log(demoOne)


//Symbol

//Every Symbol() call is guaranteed to return a unique Symbol.
//For Example 

let sym = Symbol()
let Sym = Symbol()
console.log(sym == Sym)
// console.log(sym) //Uncomment me to see a surprise
// console.log(Sym) //Uncomment me to see a surprise