// SHOPPING CART
const closeCartBtn = document.querySelector(".close-cart-btn");
const shoppingCartMainContainer = document.querySelector(
  ".shopping-cart-container"
);
const openCartBtn = document.querySelector(".cart-count-icon");
const closeLicensesOverlayBtn = document.querySelector(".close-overlay-btn");
const licensesOverlay = document.querySelector(".licenses-overlay");

closeCartBtn.addEventListener("click", () => {
  shoppingCartMainContainer.classList.add("close-entire-cart");
});
openCartBtn.addEventListener("click", () => {
  if (shoppingCartMainContainer.classList.contains("close-entire-cart")) {
    shoppingCartMainContainer.classList.remove("close-entire-cart");
  } else {
    shoppingCartMainContainer.classList.add("close-entire-cart");
  }
});
closeLicensesOverlayBtn.addEventListener("click", () => {
  licensesOverlay.style.display = "none";
});

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
