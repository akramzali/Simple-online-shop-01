function scrollUpDown() {

    // Sticky
    if (window.scrollY > 130) {
      headerDown.classList.add("sticky")
    } else {
      headerDown.classList.remove("sticky")
    }
  
    // wave Movement
    /*   let scrollTop = window.scrollY;
      if (scrollTop > lastScroll) {
        moveAmount += 3; 
      } else {
        moveAmount -= 3; 
      }
      animating.forEach((element) => {
        element.style.setProperty("--wave-offset", `${moveAmount}px`)
      })
      lastScroll = scrollTop */

  }