function popUp() {
  discountCode = randomCode(); // ذخیره در window تا همه جا قابل دسترسی باشد
  setTimeout(() => {
    document.body.style.overflow = "hidden"
    discountBox.style.visibility = "visible"
  }, 3000)
  closePopup.addEventListener("click", () => {
    document.body.style.overflow = "auto"
    discountBox.style.visibility = "hidden"
  })
  discountBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(discountCode)
    discountBtn.textContent = "Copied"
    discountBtn.classList.add("noneAction")
  })

  return discountCode
}

