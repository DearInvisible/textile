const usrnm = document.querySelector(".usrnm");
const email = document.querySelector(".email");
const psswrd = document.querySelector(".psswrd");
const phn = document.querySelector(".phn");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let formdata = new FormData();
  formdata.append("name", usrnm.value);
  formdata.append("email", email.value);
  formdata.append("password", psswrd.value);
  formdata.append("phone", +phn.value);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://textil.sadaf-med.uz/api/register", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
});
