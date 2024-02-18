// SHOPPING CART
const closeCartBtn = document.querySelector(".close-cart-btn");
const shoppingCartMainContainer = document.querySelector(
  ".shopping-cart-container"
);
closeCartBtn.addEventListener("click", () => {
  shoppingCartMainContainer.classList.add("close-entire-cart");
});
