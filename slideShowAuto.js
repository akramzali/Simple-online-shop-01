function slideShowAuto(slides, arrowLeft, arrowRight) {
    const totalIndex = slides.length
    let currentIndex = 0
    let autoSlide

    function arrowStyle() {
        arrowLeft.classList.toggle("lessOpacity", currentIndex === 0)
        arrowRight.classList.toggle("lessOpacity", currentIndex === totalIndex - 1)
    }

    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            let xPosition = (index - currentIndex) * 100
            slide.style.transform = `translateX(${xPosition}%)`
        });
        arrowStyle()
    }

    function move(direction) {
        clearInterval(autoSlide); 
        if (direction === "left" && currentIndex > 0) {
            currentIndex--;
        } else if (direction === "right" && currentIndex < totalIndex - 1) {
            currentIndex++;
        } else {
            return;
        }
        updateSlidePosition();
        startAutoSlide(); 
    }

    function startAutoSlide() {
        clearInterval(autoSlide); 
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex+1) % totalIndex; // چرخش بین اسلایدها
            updateSlidePosition();
        }, 3000);
    }

    // کنترل با دکمه‌ها
    arrowLeft.addEventListener("click", () => move("left"));
    arrowRight.addEventListener("click", () => move("right"));

    // کنترل با کیبورد
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") move("left");
        if (event.key === "ArrowRight") move("right");
    });

    updateSlidePosition();
    startAutoSlide(); 
}


  