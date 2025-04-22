// This is a constructor function to create new Person objects
function Person(name) {
    this.name = name; // Assigning the name property to the object being created
}

// Adding a method to the Person prototype
// All instances created with the Person constructor will inherit this method
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`); // This will access the 'name' property of the instance
}

// Creating a new instance of Person
let ayan = new Person('ayan');

// The 'ayan' object can access the greet method because of prototypal inheritance
ayan.greet(); // Output: Hello, my name is ayan

// Explanation:
// In JavaScript, every function has a prototype property,
// and when you create an object using that function (with `new`),
// the new object gets access to all the properties/methods defined on that prototype.

// So `ayan` inherits `greet` from `Person.prototype`.
// This is called **Prototypal Inheritance** — objects inheriting features from other objects via prototypes.
