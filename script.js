const rangeInput = document.querySelector(".rangeInput");
const btn = document.querySelector(".btn");
const year = document.querySelector("#year");
console.log(rangeInput);

rangeInput.addEventListener("input", (e) => {
  console.log(e.target);
  const rangeArea = document.querySelector(".rangeArea");
  console.log(rangeInput);
  rangeArea.innerHTML = `${e.target.value} %`;
});

btn.addEventListener("click", (e)=>{
    p = document.getElementById("principal").value;
    if (p <= 0) {
        e.preventDefault()
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    } else {
        interest = document.querySelector(".interest");
        interest.innerHTML = `
        <p>If you deposit <mark>${p}</mark></p>
        <p>at an interest rate of <mark>${rangeInput.value}%</mark>.</p>
        <p>You will receive an amount of <mark>${
            p * (rangeInput.value / 100) * year.value
        }</mark>.</p>
        <p>in the year <mark>${
            new Date().getFullYear() + Number(year.value)
        }</mark></p>
        `;
    }
})
    
    