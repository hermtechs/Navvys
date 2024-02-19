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
const openLicenceOvelayBtn = document.querySelectorAll(
  ".add-to-cart-btn-container"
);
openLicenceOvelayBtn.forEach((btn) =>
  btn.addEventListener("click", openLicensesOverlay)
);

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

const data = [
  {
    id: "1",
    beatTitle: "Beat and song1",
    price: 30,
    audioUrl: "/audios/sample_audio.mp3",
    licence: "premium",
  },
  {
    id: "1",
    beatTitle: "Beat and song1",
    price: 30,
    audioUrl: "/audios/sample_audio.mp3",
    licence: "basic",
  },
  {
    id: "1",
    beatTitle: "Beat and song1",
    price: 30,
    audioUrl: "/audios/sample_audio.mp3",
    licence: "premium",
  },
  {
    id: "1",
    beatTitle: "Beat and song1",
    price: 30,
    audioUrl: "/audios/sample_audio.mp3",
    licence: "unlimitted",
  },
  {
    id: "1",
    beatTitle: "Beat and song1",
    price: 30,
    audioUrl: "/audios/sample_audio.mp3",
    licence: "exclusive",
  },
];

function openShoppingCart() {
  if (shoppingCartMainContainer.classList.contains("close-entire-cart")) {
    shoppingCartMainContainer.classList.remove("close-entire-cart");
  } else {
    shoppingCartMainContainer.classList.add("close-entire-cart");
  }
}

function openLicensesOverlay() {
  licensesContainer.style.display = "grid";
}
closeLicensesOverlayBtn.addEventListener("click", () => {
  licensesContainer.style.display = "none";
});
