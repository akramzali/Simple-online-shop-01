const headerDown = document.querySelector(".header-down")
const arrowUpBody = document.querySelector(".arrowup-body")
const discountBox = document.querySelector(".discount-box")
const closePopup = document.querySelector(".close-popup")
let discountBtn = document.querySelector(".discount-box .discount-btn")
const header=document.querySelector(".header")
const cartLink = document.querySelector(".cart .cart-link")
let cartQuantity = document.querySelector(".cart .cart-link .cart-quantity")
const cartContainer = document.querySelector(".cart .cart-menuContainer")
const texts = document.querySelectorAll('.quality-text')
const buttons = document.querySelectorAll('.slide-button')
let slidesBanner = document.querySelector(".banner .slides")
let sliders = document.querySelectorAll(".banner .slides .slider")
const slideItemsCategory=[...document.querySelectorAll(".category .slide-item")]
const categoryBtnLeft=document.querySelector(".category .category-btn-left")
const categoryBtnRight=document.querySelector(".category .category-btn-right")
const arrowLeftIndex = document.querySelector('.banner .slider-controls .arrow-left-index')
const arrowRightIndex = document.querySelector('.banner .slider-controls .arrow-right-index')
const productView = [...document.querySelectorAll('.productView')]
const slides = [...document.querySelectorAll('.productView-images .slideshow-container .slide')]
const slideImg = document.querySelector('.productView-images .slideshow-container .slide img')
const slideThumbnail = [...document.querySelectorAll('.productView-images .slide-list .slide-track .slide-thumbnail')]
const slideTrack = document.querySelector('.productView-images .slide-list .slide-track')
const thumbnailImg = [...document.querySelectorAll('.productView-images .slide-list .slide-track img')]
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
const alertMessage = document.querySelector(".productview-details .productView-options .alert-message")
const formSelect = document.querySelector(".productview-details .productView-options .form-select")
let totalNum = document.querySelector(".total-num")
const buttonMinus = document.querySelector(".button-minus")
const buttonPlus = document.querySelector(".button-plus")
const addToCart = document.querySelector(".productview-details .productView-options .add-to-cart-button")
const wishList = document.querySelector(".productview-details .productView-options .wish-list")
const mydropdownMenu = document.querySelector(".productview-details .productView-options .wish-list .mydropdown-menu")
const accordianSubBox = document.querySelectorAll(".productview-details .accordian .accordian-sub-box")
const accordianContent = document.querySelectorAll(".productview-details .content")
let headerTotalNum = document.querySelector(".cart-section .total-num")
let cartTotalValue = document.querySelector(".cart-total-value span")
let couponCodeAdd = document.querySelector(".cart-totals .coupon-code-add")
const couponCodeDiv = document.querySelector(".cart-totals .coupon-code")
const couponBtn = document.querySelector(".cart-totals .coupon-btn")
const couponFormInput = document.querySelector(".cart-totals .coupon-form .form-input")
const cartFinal = document.querySelector(".cart-totals .cart-final span")
const animating = document.querySelectorAll(".animating")


let lastScroll = 0
let moveAmount = 0
let discountCode = ""
let flag = true
let cartNum = 0
let currentIndex = 0
let cart = []
let discountRate = 0
let cartFinalPrice = 0


// Scroll action
arrowUpBody.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

window.addEventListener("scroll", scrollUpDown)

document.addEventListener("DOMContentLoaded", function () {
  const circle = document.querySelector(".progress-ring-circle");
  if (!circle) return;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight);

    const offset = circumference * (1 - scrollPercentage);
    circle.style.strokeDashoffset = offset;
  });
});

/* document.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let wave = document.querySelector(".wave-header img");
  wave.style.transform = `translateX(${scrollPosition * 0.3}px)`;
}); */




// Discount Box
document.addEventListener("DOMContentLoaded", function () {
  const fileName = window.location.pathname.split("/").pop();
  if (fileName === "index.html") {
    setTimeout(() => {
      document.body.style.overflow = "hidden"
      discountBox.style.visibility = "visible"
      discountCode = randomCode();
    }, 3000)
    closePopup.addEventListener("click", () => {
      document.body.style.overflow = "auto"
      discountBox.style.visibility = "hidden"
    })
    discountBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.discountCode)
      sessionStorage.setItem("discountCode", window.discountCode)
      discountBtn.textContent = "Copied"
      discountBtn.classList.add("noneAction")
    })
  }
})


// Clicke Show Function
function clickShow(event, clickedItem) {
  event.stopPropagation(); // جلوگیری از انتقال رویداد به body
  if (!clickedItem.classList.contains("display")) {
    clickedItem.classList.add("display");
    document.body.addEventListener("click", () => {
      clickedItem.classList.remove("display");
    }, { once: true }); // listener روی body که تنها یک بار اجرا می‌شود
  } else {
    clickedItem.classList.remove("display");
  }
}

// Cart
cartLink.addEventListener("click", (event) => {
  if (cartQuantity.textContent !== "0") {
    window.location.hash = '#cart-section'
  }
  else {
    clickShow(event, cartContainer)
  }
});

// Slide Show Banner
slideShowIndex(slidesBanner, sliders, arrowLeftIndex, arrowRightIndex)

// Show Slide Visibility
showSlideVisibility(texts, buttons)

// Slide Show Ctegory
slideShowAuto(slideItemsCategory, categoryBtnLeft, categoryBtnRight)














