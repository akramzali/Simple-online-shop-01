function clickShow(event, clickedItem){
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