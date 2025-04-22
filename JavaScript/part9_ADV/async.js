// This line logs a message to the console immediately
console.log("chaicode");

// A simple function that logs a greeting message
function sayHello() {
    console.log("I would like to say hello");
}

// This sets a timer that waits for 2 seconds (2000 milliseconds) before calling sayHello()
// This does NOT block the code below from running — it schedules the function for later
setTimeout(() => {
    sayHello(); // This will execute after 2 seconds
}, 2000); // 2000ms = 2 seconds

// This loop runs immediately and logs numbers from 0 to 9
for (let index = 0; index < 10; index++) {
    console.log(index);
}

// The output of this program demonstrates asynchronous behavior:
// The loop runs and completes before 'sayHello()' is executed,
// even though 'sayHello()' is written earlier in the code,
// because setTimeout is asynchronous.
