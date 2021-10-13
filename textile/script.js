const cardsContaienr = document.querySelector(".cardsContainer");
const pplr_prdcts_cntnr = document.querySelector(".pplr_prdcts_cntnr");
const dscntd_prdcts_cntnr = document.querySelector(".dscntd_prdcts_cntnr");

let headersList = {
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "6"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res1 = data.map((product) => {
      const markup1 = `
            <div class="card me-3 radius p-3 mb-4 bg-light" style="width: 17rem; height: 24rem">
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
      return markup1;
    });

    cardsContaienr.innerHTML = res1.join("");
  });

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "7"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res2 = data.map((product) => {
      const markup2 = `
       <div class="card me-3 suit_rounded p-3 mb-4 bg_clr_new" style="width: 17rem; height: 22rem">
        
        <div class="row d-flex justify-content-center">
          <img
            src="https://textil.sadaf-med.uz/${product.images}"
            class="card-img-top cardimg suit_rounded"
          />
          <div>
            <p class="cardtxt mt-3 inter">${product.description}</p>        
            <div class="d-flex justify-content-between"><p class="card-title mt-2 price"><strong>${product.regular_price}</strong></p><div class="d-flex align-items-center"><img id="strs" class="me-2" src="./textile/imgs/stargold.svg" /><strong>4.2</strong></div></div>
            <div class="d-flex">
              <a href="#" class="btn btn-primary w-100 blueclr radius"
                ><span class="loremsize"><strong>BUY NOW</strong></span></a
              >
            </div>
          </div>
        </div>
      </div>
            
    `;
      return markup2;
    });

    pplr_prdcts_cntnr.innerHTML = res2.join("");
  });

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: '{\n    "category_id": "8"\n}',
  headers: headersList,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const res3 = data.map((product) => {
      const markup3 = `
      <div class="card me-3 radius p-3 mb-4" style="width: 17rem; height: 24rem">
        <div class="addbtn_orange">
          <div class="rectangle_1">-39 %</div>
        </div>
        <div class="row d-flex justify-content-center">
          <img
            src="https://textil.sadaf-med.uz/${product.images}"
            class="card-img-top cardimg coverimg"
          />
            <div>
              <p class="cardtxt mt-3 inter">${product.description}</p>
              <p class="card-title mt-2 price"><strong>${product.description}</strong></p>
              <div class="d-flex align-items-center">
                <p class="line_through">${product.sale_price}</p> 
                <div class="d-flex align-items-center m_top_mns">
                <img id="strs" class="me-2" src="./textile/imgs/stargold.svg" />
                <strong>4.2</strong>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <a href="#" class="btn btn-primary w-100 blueclr radius"
                ><span class="loremsize"><strong>BUY NOW</strong></span></a
              >
            </div>
        </div>
      </div>            
    `;
      return markup3;
    });

    dscntd_prdcts_cntnr.innerHTML = res3.join("");
  });

