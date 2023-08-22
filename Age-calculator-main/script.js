// Create variable to the input fields and add event listeners to them

const inputYear = document.getElementById("year");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");

inputYear.addEventListener("input", update);
inputDay.addEventListener("input", update);
inputMonth.addEventListener("input", update);

// Function to calculate and update the countdown between the selected date and today.

function update() {
  const results = document.querySelector(".result");
  const resultsPlus = document.querySelector(".results_plus");
  results.style.display = "flex";
  resultsPlus.style.display = "grid";

  // Obtain values from the input fields
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

  const daySpan = createSpan("days");
  document.getElementById("countd").append(daySpan);

  const monthSpan = createSpan("months");
  document.getElementById("countm").append(monthSpan);

  const yearSpan = createSpan("years");
  document.getElementById("county").append(yearSpan);

  // Function to format time units and update their display

  function formatTimeUnits() {
    const totalMonths = years * 12 + months;
    const totalWeeks = Math.floor((years * 365) / 7);
    const totalDays = Math.floor(totalWeeks * 7);
    const hours = totalDays * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    document.getElementById("countmplus").textContent = `${totalMonths}`;
    const totalmonthsSpan = document.createElement("span");
    totalmonthsSpan.textContent = "months";
    document.getElementById("countmplus").append(totalmonthsSpan);

    // Define an array of units containing their IDs, values, and labels

    const units = [
      { id: "countmplus", value: totalMonths, label: "months" },
      { id: "countwplus", value: totalWeeks, label: "weeks" },
      { id: "countdplus", value: totalDays, label: "days" },
      { id: "counthplus", value: hours, label: "hours" },
      { id: "countmiplus", value: minutes, label: "minutes" },
      { id: "countsplus", value: seconds, label: "seconds" },
    ];

    // Iterate through each unit in the array and update the corresponding HTML element
    units.forEach((unit) => {
      const element = document.getElementById(unit.id);
      element.textContent = `${unit.value.toLocaleString()} ${unit.label}`;
      element.append(createSpan(unit.label));
    });
  }

  formatTimeUnits();
}

function createSpan(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}
