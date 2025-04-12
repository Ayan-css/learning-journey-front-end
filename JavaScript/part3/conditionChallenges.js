// Check if a number is greater than another number:

let num1 = 10
let num2 = 8

if(num1 > num2) {
    console.log("num1 is greater than num2")
} else {
console.log("checking")
}


//check if a string is equal to another string

let username = "chai"
let username2 = "chai1"

if (username == username2) {
    console.log("pick another username")
} else{
    console.log("thankyou")
}

//Check if a variable is a number or not 

let score = 44 

if(typeof score === 'number'){
    console.log("yes this is a number")
}
else{
    console.log("this NaN")
}

//Check if a boolean value is true or false 

let isTeaReady = false

if(isTeaReady){
    console.log("the tea is ready")
}else{
    console.log("the tea is not ready")
}

// Check if an array is empty or not 

let item = []

if(item.length === 0){
    console.log("array is empty")
}else{
    console.log("array is not empty");
    
}