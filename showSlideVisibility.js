function showSlideVisibility(slides, buttons){
    let currentIndex2 = 0;
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            if (i === index) {
                slides[i].style.opacity = '1'
            } else {
                slides[i].style.opacity = '0'
            }
        }
    
        buttons.forEach((button, i) => {
            if (i === index) {
                button.style.backgroundColor = '#446648'
            } else {
                button.style.backgroundColor = 'rgb(177, 176, 163)'
            }
        })
    }
    
    buttons.forEach((button, i) => {
      button.addEventListener('click', () => {
        currentIndex2 = i;
        showSlide(currentIndex2);
      });
    });
    
    showSlide(currentIndex2);
}
