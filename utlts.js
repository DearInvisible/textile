// // men --- women --- kids //
// const men = document.querySelector(".our_prdcts_men");
// const women = document.querySelector(".our_prdcts_women");
// const kids = document.querySelector(".our_prdcts_kids");

// const menActive = function () {
//   men.classList.add("active");
//   women.classList.remove("active");
//   kids.classList.remove("active");
// };
// const womenActive = function () {
//   women.classList.add("active");
//   men.classList.remove("active");
//   kids.classList.remove("active");
// };
// const kidsActive = function () {
//   kids.classList.add("active");
//   women.classList.remove("active");
//   men.classList.remove("active");
// };

// men.addEventListener("click", menActive);
// women.addEventListener("click", womenActive);
// kids.addEventListener("click", kidsActive);
// //# men --- women --- kids //

// // -1+ //
// const increase = document.querySelector(".increase");
// const decrease = document.querySelector(".decrease");
// let value = document.querySelector(".value");
// increase.addEventListener("click", () => {
//   increasedValue = Number(value.textContent);
//   increasedValue += 1;
//   console.log(increasedValue);
//   value.textContent = String(increasedValue);
// });

// decrease.addEventListener("click", () => {
//   if (Number(value.textContent) > 1) {
//     decreasedValue = Number(value.textContent);
//     decreasedValue -= 1;
//     console.log(decreasedValue);
//     value.textContent = String(decreasedValue);
//   }
// });
// //# -1+ //

// // like //
// const likeN = document.querySelector(".like_n");
// const likeR = document.querySelector(".like_r");

// likeN.addEventListener("click", () => {
//   likeN.classList.add("like_hidden");
//   likeR.classList.remove("like_hidden");
// });

// likeR.addEventListener("click", () => {
//   likeN.classList.remove("like_hidden");
//   likeR.classList.add("like_hidden");
// });
// //# like //

// // stars rating //
// const number_rating = document.querySelector(".number-rating").textContent;
// const starsTotal = 5;

// document.addEventListener("DOMContentLoaded", getRating);
// function getRating() {
//   const starPercantage = `${(number_rating / starsTotal) * 100}%`;
//   console.log(starPercantage);
//   document.querySelector(".stars-inner").style.width = starPercantage;
// }
// // #stars rating //
