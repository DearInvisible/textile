const men_cntnr = document.querySelector(".men_cntnr");
const women_cntnr = document.querySelector(".women_cntnr");
const kids_cntnr = document.querySelector(".kids_cntnr");

let headersList = {
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "11"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res6 = data.map((product) => {
      const markup6 = `
            <div
        class="card card1 me-3 radius p-3"
        style="width: 17rem; height: 24rem"
      >
        <div class="addbtn rounded-3">
          <a href="#" class="links border-end plusheight pe-1 text-dark"> - </a
          ><a href="#" class="links text-dark loremsize"> 1 </a
          ><a href="#" class="links border-start plusheight ps-1 text-dark">
            +
          </a>
        </div>
        <div class="row d-flex justify-content-center">
          <img
            src="https://textil.sadaf-med.uz/${product.images}"
            class="card-img-top cardimg coverimg"
          />
          <div>
            <p class="cardtxt mt-3 inter">${product.description}</p>
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/starsilver.svg" />
            <p class="card-title mt-2 price"><strong>${product.regular_price}</strong></p>
            <div class="d-flex">
              <a href="#" class="btn btn-primary w-75 blueclr radius"
                ><span class="loremsize"><strong>BUY NOW</strong></span></a
              >
              <div class="circle ms-3 grey_border">
                <a href="#"><img src="./textile/imgs/hrtnclr.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
      return markup6;
    });

    men_cntnr.innerHTML = res6.join("");
  });

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "12"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res7 = data.map((product) => {
      const markup7 = `
            <div
        class="card card1 me-3 radius p-3"
        style="width: 17rem; height: 24rem"
      >
        <div class="addbtn rounded-3">
          <a href="#" class="links border-end plusheight pe-1 text-dark"> - </a
          ><a href="#" class="links text-dark loremsize"> 1 </a
          ><a href="#" class="links border-start plusheight ps-1 text-dark">
            +
          </a>
        </div>
        <div class="row d-flex justify-content-center">
          <img
            src="https://textil.sadaf-med.uz/${product.images}"
            class="card-img-top cardimg coverimg"
          />
          <div>
            <p class="cardtxt mt-3 inter">${product.description}</p>
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/starsilver.svg" />
            <p class="card-title mt-2 price"><strong>${product.regular_price}</strong></p>
            <div class="d-flex">
              <a href="#" class="btn btn-primary w-75 blueclr radius"
                ><span class="loremsize"><strong>BUY NOW</strong></span></a
              >
              <div class="circle ms-3 grey_border">
                <a href="#"><img src="./textile/imgs/hrtnclr.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
      return markup7;
    });

    women_cntnr.innerHTML = res7.join("");
  });

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "13"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res8 = data.map((product) => {
      const markup8 = `
            <div
        class="card card1 me-3 radius p-3"
        style="width: 17rem; height: 24rem"
      >
        <div class="addbtn rounded-3">
          <a href="#" class="links border-end plusheight pe-1 text-dark"> - </a
          ><a href="#" class="links text-dark loremsize"> 1 </a
          ><a href="#" class="links border-start plusheight ps-1 text-dark">
            +
          </a>
        </div>
        <div class="row d-flex justify-content-center">
          <img
            src="https://textil.sadaf-med.uz/${product.images}"
            class="card-img-top cardimg coverimg"
          />
          <div>
            <p class="cardtxt mt-3 inter">${product.description}</p>
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/stargold.svg" />
            <img id="strs" src="./textile/imgs/starsilver.svg" />
            <p class="card-title mt-2 price"><strong>${product.regular_price}</strong></p>
            <div class="d-flex">
              <a href="#" class="btn btn-primary w-75 blueclr radius"
                ><span class="loremsize"><strong>BUY NOW</strong></span></a
              >
              <div class="circle ms-3 grey_border">
                <a href="#"><img src="./textile/imgs/hrtnclr.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
      return markup8;
    });

    kids_cntnr.innerHTML = res8.join("");
  });
