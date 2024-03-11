// SHOPPING CART
const closeCartBtn = document.querySelector(".close-cart-btn");
const shoppingCartMainContainer = document.querySelector(
  ".shopping-cart-container"
);
const openCartBtn = document.querySelector(".cart-count-icon");
const licensesOverlay = document.querySelector(".licenses-overlay");
const licensesContainer = document.querySelector(".licenses-container");
const closeAudioPlayerBtn = document.querySelector(".close-audio-player-btn");
const audioPlayer = document.querySelector(".audio-player-container");
const beatsContainer = document.querySelector(".beats-container");
const cartCountElement = document.querySelector(".shopping-cart-count");
const cartContainer = document.querySelector(".all-cart-items-wrapper");

closeCartBtn.addEventListener("click", () => {
  shoppingCartMainContainer.classList.add("close-entire-cart");
});
openCartBtn.addEventListener("click", openShoppingCart);

closeAudioPlayerBtn.addEventListener("click", () => {
  audioPlayer.classList.add("closing-audio-player");
});

const beatsData = [
  {
    id: "1",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 50,
    license_exclusive_price: 100,
  },
  {
    id: "2",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 50,
    license_exclusive_price: 100,
  },
  {
    id: "3",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 50,
    license_exclusive_price: 100,
  },
  {
    id: "4",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 50,
    license_exclusive_price: 100,
  },
  {
    id: "5",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 50,
    license_exclusive_price: 100,
  },
  {
    id: "6",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 80,
    license_exclusive_price: 100,
  },
  {
    id: "7",
    beatTitle: "Beat and song1",
    albumArtUrl: "public/img/red bg.jpg",
    audioUrl: "public/audios/sample_audio.mp3",
    license_basic_price: 30,
    license_premium_price: 80,
    license_exclusive_price: 100,
  },
];

function openShoppingCart() {
  if (shoppingCartMainContainer.classList.contains("close-entire-cart")) {
    shoppingCartMainContainer.classList.remove("close-entire-cart");
  } else {
    shoppingCartMainContainer.classList.add("close-entire-cart");
  }
}

//open licenses overlay
function openLicensesOverlay(event) {
  licensesContainer.style.display = "grid";
  // console.log(beatsData);
  const clickedProductId = event.currentTarget.id;
  // console.log(clickedProductId);
  //getting clicked product beatsData based on its id
  const clickedProductData = beatsData.find((data) => {
    return data.id === clickedProductId;
  });

  // console.log(clickedProductData);
  const {
    id,
    beatTitle,
    audioUrl,
    albumArtUrl,
    license_basic_price,
    license_premium_price,
    license_exclusive_price,
  } = clickedProductData;

  const licensesOverlayinnerHTML = `
  <button class="close-overlay-btn close-overlay-btn">
  <i class="fas fa-times"></i>
 </button>
 <div class="album-art-container">
 <div class="album-art-img-container">
 <i class="fas fa-play audio-play-btn-license-popup"></i> 
 <img src="${albumArtUrl}" alt="">
 </div>
 <p class="beat-title">${beatTitle}</p>
 </div>
 <div class="license-details-container">
     <div class="license-details">
       <p class="license-title">Basic</p>
       <div class="item-price license-specific-price" data-license="basic" id=${id}>
         <i class="fa fa-shopping-cart"></i>
          $<span>${license_basic_price}</span>
         </div>
     </div>
       <div class="license-terms">
         <i class="fa fa-chevron-down" aria-hidden="true"></i>
         <p> View license terms</p>
       </div>
  </div>
  <div class="license-details-container">
     <div class="license-details">
       <p class="license-title">Premium</p>
       <div class="item-price license-specific-price" data-license="premium" id=${id}>
         <i class="fa fa-shopping-cart" ></i>
          $<span>${license_premium_price}</span>
        </div>
     </div>
       <div class="license-terms">
         <i class="fa fa-chevron-down" aria-hidden="true"></i>
         <p> View license terms</p>
       </div>
  </div> 
  <div class="license-details-container">
     <div class="license-details">
       <p class="license-title">Exclusive</p>
       <div class="item-price license-specific-price" data-license="exclusive" id=${id}>
         <i class="fa fa-shopping-cart"></i>
          $<span>${license_exclusive_price}</span>
      </div>
     </div>
       <div class="license-terms">
         <i class="fa fa-chevron-down" aria-hidden="true"></i>
         <p> View license terms</p>
       </div>
  </div>
  `;

  licensesOverlay.innerHTML = licensesOverlayinnerHTML;

  //adding click event listener to add to cart btns
  const addToCartBtn = document.querySelectorAll(".license-specific-price");
  addToCartBtn.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      // openShoppingCart();
      //add Item to cart
      addItemToCart(event);
      licensesContainer.style.display = "none";
    })
  );

  const closeLicensesOverlayBtn = document.querySelector(".close-overlay-btn");

  closeLicensesOverlayBtn.addEventListener("click", () => {
    licensesContainer.style.display = "none";
  });
}

// add selected item to cart based on licence selected
function addItemToCart(event) {
  // console.log(event.currentTarget);
  const clickedItemId = event.currentTarget.id;
  // console.log(clickedItemId);
  const licenseType = event.currentTarget.dataset.license;
  // console.log(clickedItemId, licenseType);
  const clickedItem = beatsData.find((item) => {
    return item.id === clickedItemId;
  });

  const {
    id,
    beatTitle,
    albumArtUrl,
    audioUrl,
    license_basic_price,
    license_premium_price,
    license_exclusive_price,
  } = clickedItem;
  // console.log(clickedItem);

  const selectedLicense = event.currentTarget.dataset.license;

  const cartItemHTML = `
  <div class="cart-items-container">
  <div class="cart-image" data-audiourl="${audioUrl}">
   <img src="${albumArtUrl}" alt="">
  </div>
  <p class="product-title">${beatTitle}</p> 
   <h5 class="product-price">${
     selectedLicense === "basic"
       ? license_basic_price
       : selectedLicense === "premium"
       ? license_premium_price
       : license_exclusive_price
   }</h5>
  <i class="fas fa-times remove-cart-item-btn"></i>
 </div> 
  `;
  cartContainer.innerHTML += cartItemHTML;
  updateCartCount();
  calculateCartTotal();
  const removeItemBtn = document.querySelectorAll(".remove-cart-item-btn");

  removeItemBtn.forEach((btn) =>
    btn.addEventListener("click", removeItemFromCart)
  );
}

//generating products (items) from our CMS dataset
function getBeats() {
  const beats = beatsData.map((item) => {
    const { id, beatTitle, audioUrl, license_basic_price } = item;

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
            $ ${license_basic_price}
        </span>
        <i class="fa fa-shopping-cart"></i>
    </div>
</div>
    
    `;
  });
  // console.log(id);
  beatsContainer.innerHTML = beats;
  const openLicenceOvelayBtn = document.querySelectorAll(
    ".add-to-cart-btn-container"
  );
  openLicenceOvelayBtn.forEach((btn) =>
    btn.addEventListener("click", openLicensesOverlay)
  );
}
getBeats();

//calculating cart total
function calculateCartTotal() {
  const shoppingCart = document.querySelector(".cart");
  const allProductsInCart = shoppingCart.querySelectorAll(
    ".cart-items-container"
  );
  // console.log(allProductsInCart);
  let cartTotal = 0;
  allProductsInCart.forEach((item) => {
    const itemPrice = item
      .querySelector(".product-price")
      .textContent.replace("$", "");
    // console.log(itemPrice);
    const itemPriceValue = parseInt(itemPrice);
    cartTotal += itemPriceValue;
  });
  // console.log(cartTotal);
  const cartTotalElement = document.querySelector(".total-price-value");
  // console.log(cartTotalElement);
  cartTotalElement.innerText = cartTotal;
}
calculateCartTotal();

//updating cart count
function updateCartCount() {
  const shoppingCart = document.querySelector(".cart");
  const allProductsInCart = shoppingCart.querySelectorAll(
    ".cart-items-container"
  );
  const cartCountElement = document.querySelector(".shopping-cart-count");
  cartCountElement.innerText = allProductsInCart.length;
}
updateCartCount();

//remove item from cart
function removeItemFromCart(event) {
  const clickedItem = event.currentTarget.parentElement;
  clickedItem.remove();
  calculateCartTotal();
  updateCartCount();
  console.log("item removed");
}

//paypal buttons
paypal
  .Buttons({
    createOrder: function () {
      return fetch("/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: 2,
            },
            { id: 2, quantity: 3 },
          ],
        }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then(({ id }) => {
          return id;
        })
        .catch((e) => {
          console.error(e.error);
        });
    },
    onApprove: function (data, actions) {
      return actions.order.capture();
    },
  })
  .render("#paypal");
