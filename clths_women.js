const clths_women_cntnr = document.querySelector(".clths_women_cntnr");

let headersList = {
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "5"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    function myFunction(x, y) {
      if (x.matches) {
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

        clths_women_cntnr.innerHTML = res5.join("");
      } else if (y.matches) {
        clths_women_cntnr.innerHTML = `<div class="d-flex justify-content-center">
      <div class="card-group mx-5 mt-5 p-4 cardsborder1 d-flex align-items-center">
        <div class="border-end firstcard1">
          <img src="https://textil.sadaf-med.uz/${product.images}" class="card-img-top first_img" />
          <div class="secondcard1 inter t-shirt_txt_card">
            <h5 class="text-muted t-shirt_txt">
              ${product.slug}
            </h5>
          </div>
        </div>
  
        <div class="thirdcard1">
          <div class="row d-flex justify-content-center pt-1">
            <div>
              <h5 class="bluetxt available">Available: 182 Pcs</h5>
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
              <p class="inter gucci_txt">Gucci sweater special summer</p>
              <h4 class="card-title mt-5"><strong>177,900 UZS</strong></h4>
              <div class="d-flex">
                <a href="#" class="btn btn-primary btnbuy blueclr radius mt-1"
                  ><span class="loremsize"><strong>BUY NOW</strong></span></a
                >
                <div class="circle ms-2 grey_border circlesize mt-1">
                  <a href="#"><img class="hrt" src="./textile/imgs/hrtnclr.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      }
    }

    let x = window.matchMedia("(min-width: 990px)");
    let y = window.matchMedia("(max-width: 990px)");
    myFunction(x, y);
    x.addListener(myFunction);
    y.addListener(myFunction);
  });
