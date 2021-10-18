const men = document.querySelector(".our_prdcts_men");
const women = document.querySelector(".our_prdcts_women");
const kids = document.querySelector(".our_prdcts_kids");

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
let value = document.querySelector(".value");

// men --- women --- kids //
const menActive = function () {
  men.classList.add("active");
  women.classList.remove("active");
  kids.classList.remove("active");
};
const womenActive = function () {
  women.classList.add("active");
  men.classList.remove("active");
  kids.classList.remove("active");
};
const kidsActive = function () {
  kids.classList.add("active");
  women.classList.remove("active");
  men.classList.remove("active");
};

men.addEventListener("click", menActive);
women.addEventListener("click", womenActive);
kids.addEventListener("click", kidsActive);

// -1+ //

increase.addEventListener("click", () => {
  increasedValue = Number(value.textContent);
  increasedValue += 1;
  console.log(increasedValue);
  value.textContent = String(increasedValue);
});

decrease.addEventListener("click", () => {
  if (Number(value.textContent) > 1) {
    decreasedValue = Number(value.textContent);
    decreasedValue -= 1;
    console.log(decreasedValue);
    value.textContent = String(decreasedValue);
  }
});
