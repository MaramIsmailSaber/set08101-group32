// Author: Maram Ismail
function updateTime() {
    // Get the HTML element with the id "time"
    const timeElement = document.getElementById('time');

    // Create a new Date object that holds the current date and time
    const now = new Date();

    // Get the current hour (0-23)
    const hours = now.getHours();

    // Get the current minutes and make sure it's always 2 digits (e.g., 08 instead of 8)
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Decide if it's AM or PM based on the hour
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Format the time in 12-hour format
    // (hours % 12 || 12) ensures that 0 becomes 12 (for midnight/noon)
    const formattedTime = `${hours % 12 || 12}:${minutes} ${amPm}`;

    // Set the text inside the timeElement to show the formatted time
    timeElement.textContent = `Time: ${formattedTime}`;
}

// Call the updateTime function every 1000 milliseconds (every 1 second) 
// so that the clock updates automatically
setInterval(updateTime, 1000);

// Call updateTime immediately once when the page loads 
// so the time is shown right away without waiting 1 second
updateTime();
