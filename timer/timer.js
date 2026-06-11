// Get DOM element references for input fields (hours, minutes, seconds)
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

// Get DOM element references for control buttons
const setButton = document.getElementById("set-timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const resetButton = document.getElementById("reset");

// Get DOM element reference for the time display area
const timeDisplay = document.getElementById("display");

// Global state variables to track timer status
let initialSeconds = 0;      // Stores the originally set time in seconds
let remainingSeconds = 0;    // Stores the current remaining time in seconds
let intervalId = null;       // Stores the setInterval ID for clearing it later
let isPaused = false;        // Boolean flag to track if timer is paused

/**
 * PAD FUNCTION
 * What it contributes: Converts single-digit numbers to two-digit strings
 * Why needed: Makes time display format consistent (e.g., "05" instead of "5")
 * Used in: formatTime() function to format hours, minutes, seconds
 */
const pad = (value) => String(value).padStart(2, "0");

/**
 * FORMAT TIME FUNCTION
 * What it contributes: Converts total seconds into HH:MM:SS format
 * Why needed: Displays remaining time in human-readable format
 * Mathematical breakdown: 
 *   - hours = totalSeconds / 3600
 *   - minutes = (totalSeconds % 3600) / 60
 *   - seconds = totalSeconds % 60
 * Used in: updateDisplay() function
 */
const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

/**
 * UPDATE DISPLAY FUNCTION
 * What it contributes: Updates the visible timer display on webpage
 * Why needed: Shows current remaining time to user in real-time
 * How it works: Calls formatTime() with remainingSeconds and updates DOM
 */
const updateDisplay = () => {
    timeDisplay.innerText = formatTime(remainingSeconds);
};

/**
 * CLEAR TIMER FUNCTION
 * What it contributes: Stops the running timer interval
 * Why needed: Prevents memory leaks and multiple intervals running simultaneously
 * Safety feature: Checks if intervalId exists before clearing
 * Used in: setButton, pauseButton, resetButton, and timer completion
 */
const clearTimer = () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

/**
 * SET BUTTONS FUNCTION
 * What it contributes: Enables/disables buttons based on timer state
 * Why needed: Prevents user from performing invalid actions (e.g., starting already running timer)
 * Parameters:
 *   - running: if timer is currently counting down
 *   - paused: if timer is in paused state
 * Button states:
 *   - Start: disabled when timer is running
 *   - Pause: disabled when timer is NOT running
 *   - Resume: disabled when timer is NOT paused
 *   - Reset: disabled when timer hasn't changed from initial state
 */
const setButtons = ({ running = false, paused = false } = {}) => {
    startButton.disabled = running;
    pauseButton.disabled = !running;
    resumeButton.disabled = !paused;
    resetButton.disabled = remainingSeconds === initialSeconds && intervalId === null && !paused;
};

/**
 * SET INITIAL TIME FUNCTION
 * What it contributes: Reads user input from hours/minutes/seconds fields
 * Why needed: Converts separate time units into total seconds for internal calculation
 * Returns: Total seconds value (e.g., 1 hour = 3600 seconds)
 * Error handling: Uses || 0 to convert empty/NaN values to 0
 */
const setInitialTime = () => {
    const hours = Number(hoursInput.value) || 0;
    const minutes = Number(minutesInput.value) || 0;
    const seconds = Number(secondsInput.value) || 0;

    return hours * 3600 + minutes * 60 + seconds;
};

/**
 * SET BUTTON EVENT LISTENER
 * What it contributes: Sets a new timer based on user input
 * Workflow:
 *   1. Stops any existing timer
 *   2. Resets pause flag
 *   3. Gets time from input fields
 *   4. Stores as both initial and remaining seconds
 *   5. Updates display
 *   6. Resets button states
 */
setButton.addEventListener("click", () => {
    clearTimer();
    isPaused = false;

    initialSeconds = setInitialTime();
    remainingSeconds = initialSeconds;

    updateDisplay();
    setButtons({ running: false, paused: false });
});

/**
 * START BUTTON EVENT LISTENER
 * What it contributes: Begins countdown timer
 * Workflow:
 *   1. If remaining seconds is 0, try to get new time from inputs
 *   2. Validate time is greater than 0
 *   3. Prevent multiple intervals
 *   4. Update button states
 *   5. Start 1-second interval that decrements remainingSeconds
 *   6. When timer hits 0: clear interval and show alert
 * Safety checks: Prevents starting when already running or with zero time
 */
startButton.addEventListener("click", () => {
    if (remainingSeconds <= 0) {
        initialSeconds = setInitialTime();
        remainingSeconds = initialSeconds;
    }

    if (remainingSeconds <= 0) {
        alert("Please set a time greater than 0.");
        return;
    }

    if (intervalId !== null) return;

    isPaused = false;
    setButtons({ running: true, paused: false });

    intervalId = setInterval(() => {
        remainingSeconds -= 1;
        updateDisplay();

        if (remainingSeconds <= 0) {
            clearTimer();
            isPaused = false;
            alert("Time Up");
            setButtons({ running: false, paused: false });
        }
    }, 1000);
});

/**
 * PAUSE BUTTON EVENT LISTENER
 * What it contributes: Temporarily stops the countdown without resetting
 * Workflow:
 *   1. Check if timer is actually running
 *   2. Clear the interval (stops countdown)
 *   3. Set paused flag to true
 *   4. Update button states (enable Resume button)
 * Why needed: Allows user to freeze timer and continue later
 */
pauseButton.addEventListener("click", () => {
    if (intervalId === null) return;

    clearTimer();
    isPaused = true;
    setButtons({ running: false, paused: true });
});

/**
 * RESUME BUTTON EVENT LISTENER
 * What it contributes: Continues a paused timer from where it stopped
 * Workflow:
 *   1. Verify timer is actually paused and has remaining time
 *   2. Update button states
 *   3. Reset paused flag
 *   4. Start a new interval to continue countdown
 *   5. Handle timer completion same as start button
 * Why needed: Provides complete pause/resume functionality
 */
resumeButton.addEventListener("click", () => {
    if (!isPaused || remainingSeconds <= 0) return;

    setButtons({ running: true, paused: false });
    isPaused = false;

    intervalId = setInterval(() => {
        remainingSeconds -= 1;
        updateDisplay();

        if (remainingSeconds <= 0) {
            clearTimer();
            alert("Time Up");
            setButtons({ running: false, paused: false });
        }
    }, 1000);
});

/**
 * RESET BUTTON EVENT LISTENER
 * What it contributes: Resets timer to initially set value without restarting
 * Workflow:
 *   1. Stop any running timer
 *   2. Clear pause flag
 *   3. Restore remainingSeconds to initialSeconds
 *   4. Update display
 *   5. Reset button states
 * Why needed: Allows user to start over without manually re-entering time
 */
resetButton.addEventListener("click", () => {
    clearTimer();
    isPaused = false;
    remainingSeconds = initialSeconds;
    updateDisplay();
    setButtons({ running: false, paused: false });
});

/**
 * INITIALIZATION CODE
 * What it contributes: Sets up initial UI state when page loads
 * Why needed: Ensures timer displays "00:00:00" and buttons are in correct state
 * Prevents: Buttons being incorrectly enabled before any timer is set
 */
remainingSeconds = 0;
initialSeconds = 0;
updateDisplay();
setButtons({ running: false, paused: false });