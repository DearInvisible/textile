const cardsContaienr = document.querySelector(".cardsContainer");
const pplr_prdcts_cntnr = document.querySelector(".pplr_prdcts_cntnr");
const dscntd_prdcts_cntnr = document.querySelector(".dscntd_prdcts_cntnr");

// men --- women --- kids //
const men = document.querySelector(".our_prdcts_men");
const women = document.querySelector(".our_prdcts_women");
const kids = document.querySelector(".our_prdcts_kids");
let categoryId = '{\n    "category_id": "14"\n}';

const menActive = function () {
  men.classList.add("active");
  women.classList.remove("active");
  kids.classList.remove("active");
};
const womenActive = function () {
  women.classList.add("active");
  men.classList.remove("active");
  kids.classList.remove("active");
  categoryId = '{\n    "category_id": "15"\n}';
};
const kidsActive = function () {
  kids.classList.add("active");
  women.classList.remove("active");
  men.classList.remove("active");
};

men.addEventListener("click", menActive);
women.addEventListener("click", womenActive);
kids.addEventListener("click", kidsActive);
//# men --- women --- kids //

// let ctgryId = `{\n    "category_id": "${
//   our_prdcts_men.classList.contains("active") ? 14 : 15
// }"\n}`;

let headersList = {
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch("https://textil.sadaf-med.uz/api/products_by_category", {
  method: "POST",
  body: categoryId,
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
          <a class="links border-end pe-1 text-dark decrease"> - </a
          ><a class="links text-dark loremsize value"> 1 </a
          ><a class="links border-start ps-1 text-dark increase">
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
            <img class="strs st1_sh" src="./textile/imgs/stargold.svg" />
            <img class="strs st1_h str_hidden" src="./textile/imgs/starsilver.svg">
            <img class="strs st2_sh" src="./textile/imgs/stargold.svg" />
            <img class="strs st2_h str_hidden" src="./textile/imgs/starsilver.svg">
            <img class="strs st3_sh" src="./textile/imgs/stargold.svg" />
            <img class="strs st3_h str_hidden" src="./textile/imgs/starsilver.svg">
            <img class="strs st4_sh" src="./textile/imgs/stargold.svg" />
            <img class="strs st4_h str_hidden" src="./textile/imgs/starsilver.svg" />
            <img class="strs st5_sh str_hidden" src="./textile/imgs/stargold.svg" />
            <img class="strs st5_h" src="./textile/imgs/starsilver.svg" />
            <p class="mt-2 price"><strong>${product.regular_price}</strong></p>
            <div class="d-flex">
              <a class="btn btn-primary w-75 blueclr radius"
                ><span class="loremsize"><strong>BUY NOW</strong></span></a
              >
              <div class="circle ms-3 grey_border">
                <a class="like_n"><img src="./textile/imgs/hrtnclr.png" /></a>
                <a class="like_r like_hidden"><img src="./textile/imgs/heartblack.png"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
      return markup1;
    });

    cardsContaienr.innerHTML = res1.join("");

    // -1+ //
    const increase = document.querySelector(".increase");
    const decrease = document.querySelector(".decrease");
    let value = document.querySelector(".value");

    increase.addEventListener("click", () => {
      increasedValue = Number(value.textContent);
      increasedValue += 1;
      value.textContent = String(increasedValue);
    });

    decrease.addEventListener("click", () => {
      if (Number(value.textContent) > 1) {
        decreasedValue = Number(value.textContent);
        decreasedValue -= 1;
        value.textContent = String(decreasedValue);
      }
    });
    //# -1+ //
    // like //
    const likeN = document.querySelector(".like_n");
    const likeR = document.querySelector(".like_r");

    likeN.addEventListener("click", () => {
      likeN.classList.add("like_hidden");
      likeR.classList.remove("like_hidden");
    });

    likeR.addEventListener("click", () => {
      likeN.classList.remove("like_hidden");
      likeR.classList.add("like_hidden");
    });
    //# like //

    // stars //
    const st1_sh = document.querySelector(".st1_sh");
    const st1_h = document.querySelector(".st1_h");
    const st2_sh = document.querySelector(".st2_sh");
    const st2_h = document.querySelector(".st2_h");
    const st3_sh = document.querySelector(".st3_sh");
    const st3_h = document.querySelector(".st3_h");
    const st4_sh = document.querySelector(".st4_sh");
    const st4_h = document.querySelector(".st4_h");
    const st5_sh = document.querySelector(".st5_sh");
    const st5_h = document.querySelector(".st5_h");

    st5_sh.addEventListener("click", () => {
      st5_sh.classList.add("str_hidden");
      st5_h.classList.remove("str_hidden");
    });
    st5_h.addEventListener("click", () => {
      st5_h.classList.add("str_hidden");
      st5_sh.classList.remove("str_hidden");
    });
    st4_sh.addEventListener("click", () => {
      st4_sh.classList.add("str_hidden");
      st4_h.classList.remove("str_hidden");
    });
    st4_h.addEventListener("click", () => {
      st4_h.classList.add("str_hidden");
      st4_sh.classList.remove("str_hidden");
    });
    st3_sh.addEventListener("click", () => {
      st3_sh.classList.add("str_hidden");
      st3_h.classList.remove("str_hidden");
    });
    st3_h.addEventListener("click", () => {
      st3_h.classList.add("str_hidden");
      st3_sh.classList.remove("str_hidden");
    });
    st2_sh.addEventListener("click", () => {
      st2_sh.classList.add("str_hidden");
      st2_h.classList.remove("str_hidden");
    });
    st2_h.addEventListener("click", () => {
      st2_h.classList.add("str_hidden");
      st2_sh.classList.remove("str_hidden");
    });
    st1_sh.addEventListener("click", () => {
      st1_sh.classList.add("str_hidden");
      st1_h.classList.remove("str_hidden");
    });
    st1_h.addEventListener("click", () => {
      st1_h.classList.add("str_hidden");
      st1_sh.classList.remove("str_hidden");
    });
    //# stars //
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
            <div class="d-flex justify-content-between"><p class="mt-2 price"><strong>${product.regular_price}</strong></p><div class="d-flex align-items-center rtng"><img id="strs" class="me-2" src="./textile/imgs/stargold.svg" /><strong>4.2</strong></div></div>
            <div class="d-flex btn_buy">
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
              <p class="mt-2 price"><strong>${product.regular_price}</strong></p>
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
