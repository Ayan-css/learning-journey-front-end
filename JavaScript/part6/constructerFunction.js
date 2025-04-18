//A constructor function is a special type of function used to create and initialize objects in JavaScript.


function Person(username, age){
    this.username = username
    this.age = age  /* this in JavaScript refers to the object that is currently executing the function.
    It allows a function or method to access its own context, such as object properties or other methods.*/
}

const userOne = new Person("affan", 18) 
const userTwo = new Person("faiz", 17) // `new` keyword is used to creat an instance of an object from a constructor function or a class

console.log(userOne);
console.log(userTwo);

