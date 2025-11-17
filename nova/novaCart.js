let cart = []; // آرایه برای ذخیره محصولات انتخاب‌شده در همان لحظه

function updateCartCount() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector(".cart-quantity").textContent = totalItems;
}

// اضافه کردن محصول به سبد خرید
document.querySelector(".add-to-cart").addEventListener("click", (event) => {
    let formSelect = document.querySelector(".form-select");
    if (formSelect.value !== "Choose Options") {
        let productName = document.querySelector(".cart-item-name-link").textContent;
        let productBrand = document.querySelector(".cart-item-brand").textContent;
        let productPrice = parseFloat(document.querySelector(".cart-item-value").textContent.replace("$", ""));
        let productImage = document.querySelector(".cart-pro-img img").src;
        let productQuantity = Number(document.querySelector(".total-num").textContent);
        let productCapacity = document.querySelector(".definitionList-value").textContent;

        // بررسی آیا محصول از قبل اضافه شده است یا نه
        let existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += productQuantity;
        } else {
            cart.push({
                name: productName,
                brand: productBrand,
                price: productPrice,
                image: productImage,
                quantity: productQuantity,
                capacity: productCapacity
            });
        }

        updateCartCount(); // بروزرسانی مقدار سبد خرید
        displayCart(); // نمایش سبد خرید در لحظه

        alert(`${productName} به سبد خرید اضافه شد!`);
    } else {
        alert("لطفا گزینه‌ای را انتخاب کنید!");
        event.stopPropagation();
    }
});

// نمایش سبد خرید در همان لحظه
function displayCart() {
    let cartList = document.querySelector(".cart-list");
    let totalPrice = 0;
    cartList.innerHTML = ""; // پاک کردن لیست قبلی

    cart.forEach((item, index) => {
        let cartItem = document.createElement("ul");
        cartItem.classList.add("cart-item");
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
                    <span class="definitionList-value">${item.capacity}</span>
                </div>
                <a href="#" class="change">Change</a>
            </li>
            <li class="cart-item-block cart-item-info">
                <span class="cart-item-value ">$${item.price.toFixed(2)}</span>
            </li>
            <li class="cart-item-block cart-item-info cart-item-quantity centering">
                <div class="increment-num">
                    <div class="button button-minus" onclick="changeQuantity(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </div>
                    <div class="increment-total">
                        <span class="total-num">${item.quantity}</span>
                    </div>
                    <div class="button button-plus" onclick="changeQuantity(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            </li>
            <li class="cart-item-block cart-item-info centering">
                <span class="cart-item-value ">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="cart-remove icon" onclick="removeItem(${index})">
                    <i class="fas fa-times"></i>
                </button>
            </li>
        `;
        cartList.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    document.querySelector(".cart-total-grandTotal span").textContent = `$${totalPrice.toFixed(2)}`;
}

// تغییر تعداد محصول در سبد خرید
function changeQuantity(index, amount) {
    if (cart[index].quantity + amount > 0) {
        cart[index].quantity += amount;
    } else {
        cart.splice(index, 1);
    }
    updateCartCount();
    displayCart();
}

// حذف محصول از سبد خرید
function removeItem(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCart();
}

// پاک کردن کل سبد خرید
document.querySelector("#clear-cart").addEventListener("click", () => {
    cart = [];
    updateCartCount();
    displayCart();
    alert("سبد خرید خالی شد!");
});



/////   تبدیل به تابع  مستقل
function addToCartHandler(event) {
    let formSelect = document.querySelector(".form-select");

    if (formSelect.value !== "Choose Options") {
        let productName = document.querySelector(".cart-item-name-link").textContent;
        let productBrand = document.querySelector(".cart-item-brand").textContent;
        let productPrice = parseFloat(document.querySelector(".cart-item-value").textContent.replace("$", ""));
        let productImage = document.querySelector(".cart-pro-img img").src;
        let productQuantity = Number(document.querySelector(".total-num").textContent);
        let productCapacity = document.querySelector(".definitionList-value").textContent;

        // بررسی آیا محصول از قبل در سبد خرید هست یا نه
        let existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += productQuantity;
        } else {
            cart.push({
                name: productName,
                brand: productBrand,
                price: productPrice,
                image: productImage,
                quantity: productQuantity,
                capacity: productCapacity
            });
        }

        updateCartCount(); // بروزرسانی مقدار سبد خرید
        displayCart(); // نمایش سبد خرید در لحظه

        alert(`${productName} به سبد خرید اضافه شد!`);
    } else {
        alert("لطفا گزینه‌ای را انتخاب کنید!");
        event.stopPropagation();
    }
}

// اتصال تابع به دکمه "Add to Cart"
document.querySelector(".add-to-cart").addEventListener("click", addToCartHandler);



/* در cart.html، دکمه‌ای برای پاک کردن سبد خرید اضافه کن:

html

<button id="clear-cart">پاک کردن سبد خرید</button> */



//////////////////////////////////////////////////////////////// اصلاح شده

let cart = []; // سبد خرید را به عنوان یک آرایه تعریف کنید

buttonMinus.addEventListener("click", () => {
  if (productNumber !== 1) {
    productNumber--;
    totalNum.textContent = productNumber;
  }
});

buttonPlus.addEventListener("click", () => {
  productNumber++;
  totalNum.textContent = productNumber;
});

// اصلاح `addToCart` برای اضافه کردن محصول به `cart`
addToCart.addEventListener("click", (event) => {
  if (formSelect.value !== "Choose Options") {
    let productName = document.querySelector(".cart-item-name-link").textContent;
    let productBrand = document.querySelector(".cart-item-brand").textContent;
    let productPrice = parseFloat(document.querySelector(".cart-item-value").textContent.replace("$", ""));
    let productImage = document.querySelector(".cart-pro-img img").src;
    let productQuantity = Number(document.querySelector(".total-num").textContent);
    let productFeature = document.querySelector(".definitionList-value").textContent;

    // بررسی وجود محصول در سبد خرید
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
      existingProduct.quantity += productQuantity;
    } else {
      cart.push({
        name: productName,
        brand: productBrand,
        price: productPrice,
        image: productImage,
        quantity: productQuantity,
        feature: productFeature
      });
    }

    totalProductNumber += productQuantity;
    cartQuantity.textContent = totalProductNumber;
    headerTotalNum.textContent = totalProductNumber;

    displayCart(); // نمایش لیست جدید سبد خرید
  } else {
    alertMessage.style.visibility = "visible";
    event.stopPropagation();
  }
});

document.body.addEventListener("click", () => {
  alertMessage.style.visibility = "hidden";
});

function displayCart() {
  let cartList = document.querySelector(".cart-list");
  let totalPrice = 0;
  cartList.innerHTML = ""; // پاک کردن لیست قبلی

  cart.forEach((item, index) => {
    let cartItem = document.createElement("ul");
    cartItem.classList.add("cart-item");
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
          </li>
      `;
    cartList.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });

  document.querySelector(".cart-total-grandTotal span").textContent = `$${totalPrice.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}
