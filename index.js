function setDate() {
    // Get the current date and time
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();

    // Calculate the rotation for each hand
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    // Apply the transformations
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // Display the current time below the clock
    const formattedTime = `${htime.toString().padStart(2, '0')}:${mtime.toString().padStart(2, '0')}:${stime.toString().padStart(2, '0')}`;
    document.getElementById("current-time").textContent = formattedTime;
}

// Update every second
setInterval(setDate, 1000);
setDate(); // Call the function initially
