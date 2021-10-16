const email = document.querySelector(".email");
const psswrd = document.querySelector(".psswrd");
const btn_log_in = document.querySelector(".btn_log_in");

btn_log_in.addEventListener("click", function () {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.io)",
    Accept: "application/json",
  };

  let formdata = new FormData();
  formdata.append("email", email.value);
  formdata.append("password", psswrd.value);

  fetch("https://textil.sadaf-med.uz/api/login", {
    method: "POST",
    body: formdata,
    headers: headersList,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.status === "true") {
        window.location.replace("index.html");
      }
    });
});
