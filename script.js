document.querySelectorAll(".list-item__link").forEach((link) => {
    // Ищем только иконки меню и стрелки
    const images = link.querySelectorAll(".list-item__thumb, span img");

    link.addEventListener("mouseenter", () => {
      images.forEach((img) => {
        img.style.filter = "brightness(0) invert(1)";
      });
    });

    link.addEventListener("mouseleave", () => {
      images.forEach((img) => {
        img.style.filter = "none";
      });
    });
  });