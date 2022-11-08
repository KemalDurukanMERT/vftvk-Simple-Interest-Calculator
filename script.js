const rangeInput = document.querySelector(".rangeInput");
const year = document.querySelector("#year");
console.log(rangeInput);

rangeInput.addEventListener("input", (e) => {
  console.log(e.target);
  const rangeArea = document.querySelector(".rangeArea");
  console.log(rangeInput);
  rangeArea.innerHTML = `${e.target.value} %`;
});

function compute() {
  p = document.getElementById("principal").value;
  interest = document.querySelector(".interest");
  interest.innerHTML = `
  <p>If you deposit <mark>${p}</mark></p>
  <p>at an interest rate of <mark>${rangeInput.value}%</mark>.</p>
  <p>You will receive an amount of <mark>${p*(rangeInput.value/100)*(year.value)}</mark>.</p>
  <p>in the year <mark>${(new Date()).getFullYear()+year.value}</mark></p>
  `
}
