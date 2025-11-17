function updateFinalPrice() {
    totalPrice=0
    for (let i = 0; i < itemTotalPriceArray.length; i++) {
        totalPrice += itemTotalPriceArray[i]
      }
  
    cartTotalValue.textContent = `$${totalPrice.toFixed(2)}`;
    cartFinalPrice = totalPrice - (totalPrice * discountRate);
    cartFinal.textContent = `$${cartFinalPrice.toFixed(2)}`;
  }