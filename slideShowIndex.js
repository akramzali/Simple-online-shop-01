function slideShowIndex(slidesBanner, sliders, arrowLeft, arrowRight) {
    let slidersNum=sliders.length
    let currentIndex=0
    function moveLeft() {
        currentIndex--
        slidePosition()
        clearInterval(autoSlide);
    }
    
    function moveRight() {
        currentIndex++
        slidePosition()
        clearInterval(autoSlide);
    }
    
    function slidePosition() {
        if (currentIndex < 0) {
            currentIndex = slidersNum - 1
        }
        else if (currentIndex >= slidersNum) {
            currentIndex = 0;
        }
        slidesBanner.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
    
    function pressLeft(event) {
        if (event.keyCode == 37) {
            moveLeft()
        }
    }
    
    
    function pressRight(event) {
        if (event.keyCode == 39) {
            moveRight()
        }
    }

    arrowLeft.addEventListener("click", moveLeft)
    document.addEventListener("keyup", pressLeft)
    arrowRight.addEventListener("click", moveRight)
    document.addEventListener("keyup", pressRight)
    let autoSlide = setInterval(() => {
        currentIndex++;
        slidePosition();
    }, 3000);
}