const usrnm = document.querySelector(".usrnm");
const email = document.querySelector(".email");
const psswrd = document.querySelector(".psswrd");
const phn = document.querySelector(".phn");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.io)",
    Accept: "application/json",
  };

  let formdata = new FormData();
  formdata.append("name", usrnm.value);
  formdata.append("email", email.value);
  formdata.append("password", psswrd.value);
  formdata.append("phone", phn.value);

  console.log(usrnm.value, psswrd.value);
  window.location.replace("index.html");
});
