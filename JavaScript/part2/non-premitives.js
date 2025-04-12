let obj = {}

console.log(obj)
//objects uses larger memory compare to premitives

// other style to write obj

let username = {
    "first name" : "ayan",
    lastname : "ansari"
}
console.log(username["first name"])
console.log(username.lastname)

const data = {
    lname : "ayan",
    fname : "shaikh"
}

data.fname = "ansari" 
console.log(data)
console.log(data.fname)
console.log(data.lname)

let today = new Date();

console.log(today.getDate())

//Array

// let heros = ["a","b","c", true]
let usergone = ["ayan",true]

console.log(usergone[0])
console.log(usergone[1])


let isValue = true;  //true is considered as 1 and false is considered as 0
console.log(isValue + 1)