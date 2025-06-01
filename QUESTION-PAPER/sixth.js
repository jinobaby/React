function getTimeDifference(timestamp){
    const currentTime = new Date()

    const inputTime = new Date(timestamp)

    // Calculate the difference in milliseconds
    const timeDifference = currentTime - inputTime;

    // Convert the difference to seconds, minutes, hours, and days
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Determine the output format
    if (seconds < 60) {
        return "Just now";
    } else if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
}


console.log(getTimeDifference("2025-05-17T09:55:00"));
console.log(getTimeDifference("2025-05-16T10:00:00"));