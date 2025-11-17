function slideShow(slides, arrowLeft, arrowRight) {
  const totalIndex = slides.length;
  let currentIndex = 0
  function arrowStyle() {
    if (currentIndex == 0) {
      arrowLeft.classList.add("lessOpacity")
    }
    else {
      arrowLeft.classList.remove("lessOpacity")
    }
    if (currentIndex == totalIndex - 1) {
      arrowRight.classList.add("lessOpacity")
    }
    else {
      arrowRight.classList.remove("lessOpacity")
    }
  }

  function updateSlidePosition() {
    slides.forEach((slide, index) => {
      let xPosition = (index - currentIndex) * 100;
      slide.style.transform = `translateX(${xPosition}%)`;
    });
    arrowStyle()
  }

  /* let autoSlide = setInterval(() => { // ------ autoslide
    currentIndex++;
    updateSlidePosition();
}, 3000); */

  function move(direction) {
    if (direction === "left" && currentIndex > 0) {
      currentIndex--;
    } else if (direction === "right" && currentIndex < totalIndex - 1) {
      currentIndex++;
    }

    updateSlidePosition();
    /* clearInterval(autoSlide) */
  }

  // کنترل با دکمه‌ها
  arrowLeft.addEventListener("click", () => move("left"));
  arrowRight.addEventListener("click", () => move("right"));

  // کنترل با کیبورد
  document.addEventListener("keydown", (event) => {
    if (event.key == 37) move("left");
    if (event.key == 39) move("right");
  });

  // تنظیم موقعیت اولیه اسلایدها
  updateSlidePosition();
}