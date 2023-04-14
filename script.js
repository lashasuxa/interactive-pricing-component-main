// var toggle = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = toggle.value;

// toggle.oninput = function () {
//   output.innerHTML = this.value;
// };

// const view = document.querySelector(".pageView");
// const btn = document.querySelector("button");
// const cost = document.querySelector("#demo");
// const slider = document.querySelector(".slider-bar");
// const pageViews = ["10K","50K", "100K", "500K", "1M"];
// const perMonth = [8, 12, 16, 24, 36];
// let isYearly = false;

// slider.addEventListener("input", () => {
//   let newIndex = perMonth.indexOf(parseInt(slider.value));
//   view.innerHTML = pageViews[newIndex];
//   console.log(newIndex);
// });

// console.log(isYearly);

// const toggleBtn = document.querySelector(".slider");
// toggleBtn.addEventListener("change", () => {
//   isYearly = !isYearly;
//   console.log(isYearly);
// });

const view = document.querySelector(".pageView");
const btn = document.querySelector(".start");
const cost = document.querySelector("#demo");
const slider = document.querySelector(".slider-bar");
const toggleBtn = document.querySelector(".toggle-switch input");
const discount = document.querySelector(".orangeDiv");

const pageViews = ["10K", "20K", "40K", "50K", "100K", "300K", "500K", "1M"];
const perMonth = [8, 12, 16, 20, 24, 28, 32, 36];

let isYearly = false;

// Update the page view and cost based on slider value
slider.addEventListener("input", () => {
  let newIndex = perMonth.indexOf(parseInt(slider.value)); //this line is getting indef of permonth array , the number of array is the same as slider,than by index pick the pageview number from another array.
  view.innerHTML = pageViews[newIndex];
  let costValue = perMonth[newIndex];
  if (isYearly) {
    costValue = costValue * 0.75; // apply 25% discount for yearly billing
    discount.style.display = "inline"; // show discount
  } else {
    discount.style.display = "none"; // hide discount
  }
  cost.innerHTML = costValue.toFixed(2);
});

// Handle toggle switch event
toggleBtn.addEventListener("change", () => {
  isYearly = toggleBtn.checked;
  let newIndex = perMonth.indexOf(parseInt(slider.value));
  let costValue = perMonth[newIndex];
  if (isYearly) {
    costValue = costValue * 0.75; // apply 25% discount for yearly billing
    discount.style.display = "inline"; // show discount
  } else {
    discount.style.display = "none"; // hide discount
  }
  cost.innerHTML = costValue.toFixed(2);
});

// Handle button click event
btn.addEventListener("click", () => {
  alert("Your trial has been started!");
});
