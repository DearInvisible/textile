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

// // stars //
// const st1_sh = document.querySelector(".st1_sh");
// const st1_h = document.querySelector(".st1_h");
// const st2_sh = document.querySelector(".st2_sh");
// const st2_h = document.querySelector(".st2_h");
// const st3_sh = document.querySelector(".st3_sh");
// const st3_h = document.querySelector(".st3_h");
// const st4_sh = document.querySelector(".st4_sh");
// const st4_h = document.querySelector(".st4_h");
// const st5_sh = document.querySelector(".st5_sh");
// const st5_h = document.querySelector(".st5_h");

// st5_sh.addEventListener("click", () => {
//   st5_sh.classList.add("str_hidden");
//   st5_h.classList.remove("str_hidden");
// });
// st5_h.addEventListener("click", () => {
//   st5_h.classList.add("str_hidden");
//   st5_sh.classList.remove("str_hidden");
// });
// st4_sh.addEventListener("click", () => {
//   st4_sh.classList.add("str_hidden");
//   st4_h.classList.remove("str_hidden");
// });
// st4_h.addEventListener("click", () => {
//   st4_h.classList.add("str_hidden");
//   st4_sh.classList.remove("str_hidden");
// });
// st3_sh.addEventListener("click", () => {
//   st3_sh.classList.add("str_hidden");
//   st3_h.classList.remove("str_hidden");
// });
// st3_h.addEventListener("click", () => {
//   st3_h.classList.add("str_hidden");
//   st3_sh.classList.remove("str_hidden");
// });
// st2_sh.addEventListener("click", () => {
//   st2_sh.classList.add("str_hidden");
//   st2_h.classList.remove("str_hidden");
// });
// st2_h.addEventListener("click", () => {
//   st2_h.classList.add("str_hidden");
//   st2_sh.classList.remove("str_hidden");
// });
// st1_sh.addEventListener("click", () => {
//   st1_sh.classList.add("str_hidden");
//   st1_h.classList.remove("str_hidden");
// });
// st1_h.addEventListener("click", () => {
//   st1_h.classList.add("str_hidden");
//   st1_sh.classList.remove("str_hidden");
// });
// //# stars //
