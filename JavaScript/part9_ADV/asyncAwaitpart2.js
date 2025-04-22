// This function simulates fetching post data from a server
function fecthPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulates a successful fetch after 2 seconds
            resolve("Post Data fetched");
        }, 2000); // 2-second delay
    });
}

// This function simulates fetching comment data from a server
function fecthCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulates a successful fetch after 3 seconds
            resolve("Comment Data fetched successfully");
        }, 3000); // 3-second delay
    });
}

// This async function handles fetching both post and comment data
async function getBlogData() {
    try {
        // Log before starting the asynchronous fetch
        console.log("Fetching blog Data");

        // Using Promise.all to run both async tasks in parallel
        // This way, we don't wait for one to finish before starting the other
        const [postData, commentData] = await Promise.all([
            fecthPostData(),       // Starts fetching post data
            fecthCommentData()     // Starts fetching comment data at the same time
        ]);

        // Once both promises resolve, we log their values
        console.log(postData);        // Logs the result from fecthPostData
        console.log(commentData);     // Logs the result from fecthCommentData

        // Indicate that all data has been fetched
        console.log("Fetch complete");

    } catch (error) {
        // Catch any error that happens in the try block
        console.error("Error fetching blog data");
    }
}

// Call the function to start the data fetching process
getBlogData();
