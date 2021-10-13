const clths_kids_cntnr = document.querySelector(".clths_kids_cntnr");

let headersList = {
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "9"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res5 = data.map((product) => {
      const markup5 = `
      <div class="d-flex justify-content-center mt-5">
      <div
        class="card-group mx-5 p-4 cardsborder mt-5 d-flex align-items-center"
      >
        <div class="border-end firstcard">
          <img
            src="https://textil.sadaf-med.uz/${product.images}"
            class="card-img-top mt-3"
          />
        </div>

        <div class="border-end secondcard inter">
          <h3>${product.name}</h3>
          <br />
          <h6 class="text-muted">
            ${product.description}
          </h6>
        </div>

        <div class="thirdcard">
          <div class="row d-flex justify-content-center pt-1">
            <div>
              <h5 class="bluetxt">Available: ${product.quantity} Pcs</h5>
              <a href="#"
                ><img id="strs1" src="./textile/imgs/stargold.svg"
              /></a>
              <a href="#"
                ><img id="strs1" src="./textile/imgs/stargold.svg"
              /></a>
              <a href="#"
                ><img id="strs1" src="./textile/imgs/stargold.svg"
              /></a>
              <a href="#"
                ><img id="strs1" src="./textile/imgs/stargold.svg"
              /></a>
              <a href="#"
                ><img id="strs1" src="./textile/imgs/starsilver.svg"
              /></a>
              <p class="inter">${product.short_des}</p>
              <h4 class="card-title mt-5"><strong>${product.regular_price}</strong></h4>
              <div class="d-flex">
                <a href="#" class="btn btn-primary btnbuy blueclr radius mt-1"
                  ><span class="loremsize"><strong>BUY NOW</strong></span></a
                >
                <div class="circle ms-2 grey_border circlesize mt-1">
                  <a href="#"><img src="./textile/imgs/hrtnclr.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
      return markup5;
    });

    clths_kids_cntnr.innerHTML = res5.join("");
  });
