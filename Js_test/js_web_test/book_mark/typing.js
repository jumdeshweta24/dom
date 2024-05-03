let startTime;
let intervalId;

//start timer
function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 1000);
}

// update
function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("time").textContent = `${elapsedTime} seconds`;
}

//stop the timer
function stopTimer() {
    clearInterval(intervalId);
}


// Function submit user input
function submit() {
    document.querySelector(".heading h1").textContent = "Typing Test";
    stopTimer();
    let userText = document.getElementById("user_input").value.trim();
    let resultDisplay = document.getElementById("result");

    if (userText === "The sun dipped below the horizon, casting hues of orange and pink across the sky. A gentle breeze rustled the leaves of the trees, creating a soothing melody. As the evening descended, the world seemed to slow down, embracing a sense of tranquility. In the distance, the lights of the city began to twinkle, adding to the enchanting atmosphere of the twilight hour.") 
    {
        resultDisplay.textContent = `Your text is correct! You typed in ${document.getElementById("time").textContent}`;
    }
    else  
    {
        resultDisplay.textContent = "Your sentence is incorrect.";
    }
}


//reset the textarea and timer
function reset() {
    document.getElementById("user_input").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("time").textContent = "0 seconds";
    clearInterval(intervalId);
    intervalId = null; 
}

// Event listener to start the timer when the user starts typing
document.getElementById("user_input").addEventListener("input", function() {
    if (!intervalId) {
        startTimer();
    }
});




