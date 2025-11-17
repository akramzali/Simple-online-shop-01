const wrongCode=document.querySelector(".wrong-code")
let productNumber = +totalNum.textContent
let totalProductNumber = 0
let itemTotalPrice = 0
let itemTotalPriceArray = []
let totalPrice = 0


// Clicke Show Function
function clickShow(event, clickedItem) {
  event.stopPropagation(); // جلوگیری از انتقال رویداد به body
  if (!clickedItem.classList.contains("display")) {
    clickedItem.classList.add("display");
    document.body.addEventListener("click", () => {
      clickedItem.classList.remove("display");
    }/* , { once: true } */); // listener روی body که تنها یک بار اجرا می‌شود
  } else {
    clickedItem.classList.remove("display");
  }
}

// slideshow
slideShowAuto(slides, arrowLeft, arrowRight)

slideShowAuto(slideThumbnail, arrowLeft, arrowRight)


// کلیک روی thumbnailImg به دو روش
/* document.addEventListener("DOMContentLoaded", function () {
  const slideImg = document.querySelector('.productView-images .slideshow-container .slide img');
  const slideTrack = document.querySelector('.productView-images .slide-list .slide-track');

  if (!slideImg || !slideTrack) {
      console.error("slideImg or slideTrack not found!");
      return;
  }

  // استفاده از Event Delegation برای حل مشکل کلیک روی تصاویر بعدی
  slideTrack.addEventListener("click", function (event) {
      const clickedImg = event.target.closest("img"); // چک کن که روی عکس کلیک شده باشه
      if (clickedImg) {
          let slideAtt = clickedImg.getAttribute("src");
          slideImg.setAttribute("src", slideAtt);
          console.log("Changed image to:", slideAtt);
      }
  });
});

thumbnailImg.forEach(img => {
  img.addEventListener("click", () => {
    let slideAtt = img.getAttribute("src")
    slideImg.setAttribute("src", slideAtt)
  })
})

for(let element of slideThumbnail){
  if (element.style.transform = `translateX(0%)`){
    thumbnailLink[element].classList.add("border")
  }
} */


//////// Cart

// Number of product
buttonMinus.addEventListener("click", () => {
  if (productNumber !== 1) {
    productNumber--
    totalNum.textContent = productNumber;
  }
  else {
    totalNum.textContent = productNumber;
  }
})

buttonPlus.addEventListener("click", () => {
  productNumber++
  totalNum.textContent = productNumber
})

addToCart.addEventListener("click", (event) => {
  if (formSelect.value !== "Choose Options") {
    totalProductNumber += productNumber
    cartQuantity.textContent = totalProductNumber
    headerTotalNum.textContent = totalProductNumber
  }
  else {
    alertMessage.style.visibility = "visible"
    event.stopPropagation()
  }
  addToCartFunction()
})

document.body.addEventListener("click", () => {
  alertMessage.style.visibility = "hidden"
})

///// Add to cart
function displayCart() {
  let cartList = document.querySelector(".cart-list")
  cartList.innerHTML = "" // پاک کردن لیست قبلی
  itemTotalPriceArray = [] 

  cart.forEach((item, index) => {
    let cartItem = document.createElement("ul")
    cartItem.classList.add("cart-item")
    cartItem.innerHTML = `
          <li class="cart-item-block cart-item-figure">
              <div class="cart-pro-img">
                  <img src="${item.image}" alt="${item.name}">
              </div>
          </li>
          <li class="cart-item-block cart-item-title">
              <p class="cart-item-brand">${item.brand}</p>
              <h2 class="cart-item-name">
                  <a class="cart-item-name-link" href="#">${item.name}</a>
              </h2>
              <div class="definitionList">
                  <span class="definitionList-key">Sleeping Capacity:</span>
                  <span class="definitionList-value">${item.feature}</span>
              </div>
              <a href="#" class="change">Change</a>
          </li>
          <li class="cart-item-block cart-item-info">
              <span class="cart-item-value ">$${item.price.toFixed(2)}</span>
          </li>
          <li class="cart-item-block cart-item-info cart-item-quantity centering">
                <span class="product-total-num">${item.quantity}</span>
          </li>
          <li class="cart-item-block cart-item-info centering">
              <span class="cart-item-value ">$${(item.price * item.quantity).toFixed(2)}</span>
              <button class="cart-remove icon" onclick="removeItem(${index})">
                  <i class="fas fa-times"></i>
              </button>
          </li>`
    cartList.appendChild(cartItem)

    itemTotalPrice = item.price * item.quantity
    itemTotalPriceArray.push(itemTotalPrice)
    
  });
  updateFinalPrice()
}


function removeItem(index) {
  cart.splice(index, 1) //???????????
  updateCartCount()
  displayCart()
}

//// calcaulation Final Price
couponCodeAdd.addEventListener("click", () => {
  couponCodeDiv.classList.toggle("display")
  if (couponCodeAdd.textContent === "Cancle") {
    couponCodeAdd.textContent = "Add Coupon"
  } else {
    couponCodeAdd.textContent = "Cancle"
  }
})

couponBtn.addEventListener("click", (event) => {
  const discountCode=sessionStorage.getItem("discountCode")
  event.preventDefault(event)
  if (couponFormInput.value.trim() == discountCode) {
    discountRate = 0.15
    wrongCode.style.display="block"
    wrongCode.textContent="Your discount code has been applied"
    wrongCode.style.color="rgb(68, 102, 72)"
    couponBtn.classList.add("noneAction")
  }
  else {
    wrongCode.style.display="block"
  }
  updateFinalPrice()
})



//////  Accordian
for (let i = 0; i < accordianSubBox.length; i++) {
  accordianSubBox[i].addEventListener("click", () => {
    accordianContent[i].classList.toggle("showAccordian")
  })
}

// Wish List
wishList.addEventListener("click", (event) => clickShow(event, mydropdownMenu));






