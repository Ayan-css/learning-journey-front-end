// This is the outer function which creates a local variable `counter`
function outer() {
    let counter = 4; // `counter` is only accessible inside `outer` and functions defined within it

    // This inner function forms a closure — it "remembers" the `counter` variable from `outer`
    return function () {
        counter++; // Each time the inner function is called, it increments the `counter`
        return counter; // And then returns the updated value
    }
}

// We call `outer()` and store the returned inner function in `increament`
// This returned function still has access to the `counter` variable even though `outer()` has finished executing
let increament = outer();

// Calling `increament()` will now execute the inner function and update the preserved `counter`
console.log(increament()); // Output: 5

// This is an example of a **closure** in JavaScript:
// A closure allows a function to access variables from its outer scope even after the outer function has returned
