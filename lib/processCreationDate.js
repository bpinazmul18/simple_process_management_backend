function formattedDate() {
    // Input date
    const inputDate = new Date();

    // Function to pad zeros
    const padZero = (num) => (num < 10 ? "0" + num : num);

    // Get hours and minutes
    let hours = inputDate.getHours();
    const minutes = padZero(inputDate.getMinutes());

    // Determine AM/PM
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Get day, month, and year
    const day = padZero(inputDate.getDate());
    const month = padZero(inputDate.getMonth() + 1); // Months are zero based
    const year = inputDate.getFullYear();

    return `${padZero(hours)}:${minutes} ${ampm} ${day}.${month}.${year}`;
}

module.exports.getCreationDate = formattedDate