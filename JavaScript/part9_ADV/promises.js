// This function simulates fetching data asynchronously using a Promise
function fecthData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Simulating a condition to determine success or failure

      // If success is true, resolve the Promise with a success message
      if (success) {
        resolve("Data Fetch Success");
      } else {
        // If success is false, reject the Promise with an error message
        reject("Error Catching The Data");
      }
    }, 3000); // Simulate a delay of 3 seconds
  });
}

// Calling the fecthData function and handling the Promise
fecthData()
  .then((data) => {
    // This block runs if the Promise is resolved (i.e., data is fetched successfully)
    console.log(data); // Logs: "Data Fetch Success"
    return "Hello"; // Return another value to the next .then() in the chain
  })
  .then((value) => {
    // This block receives the value returned from the previous .then()
    console.log(value); // Logs: "Hello"
  })
  .catch((error) => {
    // This block runs if the Promise is rejected (i.e., an error occurs)
    console.error(error); // Logs the error message
  });

// This example demonstrates how Promises handle asynchronous operations
// and how we can chain multiple `.then()` methods to work with the resolved value
