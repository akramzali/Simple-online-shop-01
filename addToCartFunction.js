function addToCartFunction() {
    if (formSelect.value !== "Choose Options") {
        let productImage = document.querySelector(".slide-link img").src;
        let productBrand = document.querySelector(".productView-brand a").textContent
        let productName = document.querySelector(".productView-title").textContent
        let productFeature = formSelect.value
        let productPrice = document.querySelector(".productView-price .price").textContent
        productPrice = +productPrice.replace(/,/g, "")
        let productQuantity = +document.querySelector(".increment-total .total-num").textContent;
        
        // چک کردن محصول تکراری در cart
        let existingProduct = ""
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].feature === productFeature) {
                existingProduct = cart[i]
                break
            }
        }
        if (existingProduct) {
            existingProduct.quantity = productQuantity
        } else {
            cart.push({
                image: productImage,
                brand: productBrand,
                name: productName,
                feature: productFeature,
                price: productPrice,
                quantity: productQuantity,   
            })
        }

        displayCart() 

        alert(`${productName} added to cart`);
    }
}