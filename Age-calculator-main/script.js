// Create variable to the input fields and add event listeners to them

const inputYear = document.getElementById("year");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");

inputYear.addEventListener("input", update);
inputDay.addEventListener("input", update);
inputMonth.addEventListener("input", update);

// Function to calculate and update the countdown between the selected date and today.

// Get the values from the input fields

function update() {
  const results = document.querySelector(".result");
  results.style.display = "flex";

  let month = inputMonth.value - 1; // Months in JavaScript's Date object are 0 index
  let day = inputDay.value;
  let year = inputYear.value;

  // Create Date objects for today's date

  const today = new Date();
  const selectedDate = new Date(year, month, day);

  // Calculate the time difference between today and the selected date

  const callDate = today.getTime() - selectedDate.getTime();

  // Calculate the years, months, and days difference

  let years = Math.floor(callDate / (1000 * 60 * 60 * 24 * 365.25));
  let months = Math.floor(
    (callDate % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  let days = Math.floor(
    (callDate % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  // Update the displayed countdown values

  document.getElementById("countd").textContent = days;
  document.getElementById("countm").textContent = months;
  document.getElementById("county").textContent = years;

  // Add "days", "months", and "years" labels to the displayed countdown values

  const daySpan = document.createElement("span");
  daySpan.textContent = "days";
  document.getElementById("countd").append(daySpan);

  const monthSpan = document.createElement("span");
  monthSpan.textContent = "months";
  document.getElementById("countm").append(monthSpan);

  const yearSpan = document.createElement("span");
  yearSpan.textContent = "years";
  document.getElementById("county").append(yearSpan);

  const error = ageError();

  // Обработка ошибок
  if (error) {
    // Делайте здесь что-то с сообщением об ошибке, например, выводите на экран
    console.error(error);
  }
}

function ageError() {
  if (inputDay.value < 1 || inputDay.value > 31) {
    return "Must be a valid day";
  } else if (inputMonth.value < 1 || inputMonth.value > 12) {
    return "Must be a valid month";
  } else if (inputYear.value < 1900 || inputYear.value > 2023) {
    return "Must be a valid year";
  }
}
