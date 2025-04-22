// This function simulates an asynchronous operation like fetching data from an API
function fecthUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Rejecting the promise to simulate an error (like a failed API call)
            reject({ name: "chaicode", Url: "https://chaicode.com" });
        }, 3000); // Wait for 3 seconds before rejecting
    });
}

// This is an async function, which allows us to use 'await' inside it
async function getUserData() {
    try {
        // This will run first, before the async operation starts
        console.log("Fetching user Data...");

        // 'await' pauses the execution of this function until the promise is settled
        // If the promise resolves, the result is stored in 'userData'
        // If it rejects, the code jumps to the 'catch' block
        const userData = await fecthUserData();

        // This line only runs if the promise was resolved successfully
        console.log("User data fetched successfully");

        // Logging the fetched user data
        console.log("User data:", userData);

    } catch (error) {
        // If the promise was rejected, this block catches the error
        console.log("Error fetching data", error);
    }
}

// Calling the async function to start the process
getUserData();
