// -------------------------
// 1. Basic Object with Method
// -------------------------

let car = {
    make: "Toyota", // Property: Car's brand
    model: "Camry", // Property: Car's model
    year: 2020,     // Property: Year of manufacturing

    // Method: Starts the car and returns a message
    start: function(){
        return `${this.make} car got started in ${this.year}`;
        // 'this' refers to the current object, so this.make = "Toyota"
    }
};

// This will print the function definition, NOT the result
console.log(car.start); 

// ✅ To actually call it and see the result, use: console.log(car.start());


// -------------------------
// 2. Constructor Function
// -------------------------

// Constructor to create person objects
function Person(name, age){
    this.name = name; // Assigns name to the new object
    this.age = age;   // Assigns age to the new object
}

// Creating a new person using 'new' keyword
let john = new Person("Jhon", 20); 
// Now 'john' is an object: { name: "Jhon", age: 20 }


// -------------------------
// 3. Prototype Example (shared methods)
// -------------------------

// Constructor function for animals
function Animal(type) {
    this.type = type; // Set animal type (dog, cat, etc.)
}

// Adding a method to Animal's prototype
Animal.prototype.speak = function (){
    return `${this.type} makes a sound`; 
    // Any object created using Animal will have access to this method
}

// Example:
// let dog = new Animal("Dog");
// console.log(dog.speak()); // Outputs: Dog makes a sound


// -------------------------
// 4. Custom Array Method
// -------------------------

// Add a custom method 'ayan' to all arrays
Array.prototype.ayan = function () {
    return `custom method ${this}`;
    // 'this' refers to the current array
}

// Testing the custom method
let myArray = [1, 2, 3];
console.log(myArray.ayan()); // Outputs: custom method 1,2, 3
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.ayan()); // Outputs: custom method 1,2,3,4,5,6


// -------------------------
// 5. ES6 Class with Inheritance
// -------------------------

// Base class (parent)
class vehicle {
    constructor(make, model){
        this.make = make;   // Brand of the vehicle
        this.model = model; // Model of the vehicle
    }

    // Method inside the class
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

// Child class 'Car' that inherits from 'vehicle'
class Car extends vehicle {
    
    // New method only available in Car
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

// Create a new object from Car class
let myCar = new Car("Toyota", "Corolla");


console.log(myCar.drive()); 
// Outputs: Toyota : This is an inheritance example




// Encapsulation

/*
Encapsulation means:

    Hiding the internal details of an object and exposing only what’s necessary.
*/

class BankAccount {
    #balance = 0; // we an use `#` to hide the data 

    deposite(ammount){
        this.#balance += ammount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance())

//Abstraction 

class CoffeMachine {

    // Private inner method (should be hidden from outside user)
    start(){
        // Imagine calling a database, filtering settings, warming machine, etc.
        // All this logic is hidden from the user
        return `Starting the machine...`;
    }

    // Another internal step — user doesn't need to know how coffee is brewed
    brewCoffee(){
        // Imagine temperature control, water pressure, timing, etc.
        return `Brewing coffee`;
    }

    // ✅ This is the **abstracted interface** for the user
    // The user just presses a single button — doesn't worry about what's inside
    pressBrewButton(){
        // Internally we call the other complex methods
        let msgOne = this.start();      // Call start method
        let msgTwo = this.brewCoffee(); // Call brewCoffee method

        // We return only the important result
        return `${msgOne}\n${msgTwo}`;
    }
}

// Creating a coffee machine
let myMachine = new CoffeMachine();

// User only interacts with the simple interface (pressBrewButton)
// All complex steps are abstracted inside the class
console.log(myMachine.pressBrewButton());

