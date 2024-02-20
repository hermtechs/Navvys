// SHOPPING CART
const closeCartBtn = document.querySelector(".close-cart-btn");
const shoppingCartMainContainer = document.querySelector(
  ".shopping-cart-container"
);
const openCartBtn = document.querySelector(".cart-count-icon");
const closeLicensesOverlayBtn = document.querySelector(".close-overlay-btn");
const licensesOverlay = document.querySelector(".licenses-overlay");
const licensesContainer = document.querySelector(".licenses-container");
const closeAudioPlayerBtn = document.querySelector(".close-audio-player-btn");
const audioPlayer = document.querySelector(".audio-player-container");
const beatsContainer = document.querySelector(".beats-container");

closeCartBtn.addEventListener("click", () => {
  shoppingCartMainContainer.classList.add("close-entire-cart");
});
openCartBtn.addEventListener("click", openShoppingCart);

closeAudioPlayerBtn.addEventListener("click", () => {
  audioPlayer.classList.add("closing-audio-player");
  console.log("clicked");
});
const addToCartBtn = document.querySelectorAll(".license-specific-price");
addToCartBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    openShoppingCart();
    licensesContainer.style.display = "none";
  })
);

const beatsData = [
  {
    id: "1",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
  {
    id: "2",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
  {
    id: "3",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
  {
    id: "4",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
  {
    id: "5",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
  {
    id: "6",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
  {
    id: "7",
    beatTitle: "Beat and song1",
    audioUrl: "/audios/sample_audio.mp3",
    licence_basic_price: 30,
    licence_premium_price: 50,
    licence_exclusive_price: 100,
  },
];

function openShoppingCart() {
  if (shoppingCartMainContainer.classList.contains("close-entire-cart")) {
    shoppingCartMainContainer.classList.remove("close-entire-cart");
  } else {
    shoppingCartMainContainer.classList.add("close-entire-cart");
  }
}

function openLicensesOverlay(event) {
  licensesContainer.style.display = "grid";
  const clickedProductId = event.currentTarget.id;
  // console.log(clickedProductId);
  //getting clicked product beatsData based on its id
  const clickedProductData = beatsData.find((data) => {
    return data.id === clickedProductId;
  });
  console.log(clickedProductData);
  const {
    id,
    beatTitle,
    audioUrl,
    licence_basic_price,
    licence_premium_price,
    licence_exclusive_price,
  } = clickedProductData;

  const licensesOverlayinnerHTML = `
  <div class="license-details">
  <p class="license-title">Basic</p>
  <h5 class="item-price license-specific-price">
    <i class="fa fa-shopping-cart"></i>
     $<span>${licence_basic_price}</span>
    </h5>
</div>
  <div class="license-terms">
    <i class="fa fa-chevron-down" aria-hidden="true"></i>
    <p> View license terms</p>
  </div>
</div>
<div class="license-details-container">
<div class="license-details">
  <p class="license-title">Premium</p>
  <h5 class="item-price license-specific-price">
    <i class="fa fa-shopping-cart"></i>
     $<span>${licence_premium_price}</span>
    </h5>
</div>
  <div class="license-terms">
    <i class="fa fa-chevron-down" aria-hidden="true"></i>
    <p> View license terms</p>
  </div>
</div> 
<div class="license-details-container">
<div class="license-details">
  <p class="license-title">Exclusive</p>
  <h5 class="item-price license-specific-price">
    <i class="fa fa-shopping-cart"></i>
     $<span>${licence_premium_price}</span>
 </h5>
</div>
  <div class="license-terms">
    <i class="fa fa-chevron-down" aria-hidden="true"></i>
    <p> View license terms</p>
  </div>
</div>
  `;

  console.log(clickedProductData.beatTitle);
}
closeLicensesOverlayBtn.addEventListener("click", () => {
  licensesContainer.style.display = "none";
});

function getBeats() {
  const beats = beatsData.map((item) => {
    const {
      id,
      beatTitle,
      audioUrl,
      licence_basic_price,
      licence_premium_price,
      licence_exclusive_price,
    } = item;
    // console.log(id);
    return `
    <div class="beat-container" id="${id}">
    <div class="play-btn-container" beatsData-audioUrl="${audioUrl}">
        <i class="fa fa-play"></i>   
    </div>
    <div class="beat-name">
        <h4>${beatTitle}</h4>
    </div>
    <div class="add-to-cart-btn-container" id=${id}>
        <span class="beat-price">
            $ ${licence_basic_price}
        </span>
        <i class="fa fa-shopping-cart"></i>
    </div>
</div>
    
    `;
  });
  beatsContainer.innerHTML = beats;
  const openLicenceOvelayBtn = document.querySelectorAll(
    ".add-to-cart-btn-container"
  );
  openLicenceOvelayBtn.forEach((btn) =>
    btn.addEventListener("click", openLicensesOverlay)
  );
}
getBeats();
