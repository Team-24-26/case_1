const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const grid = document.querySelector(".grid");

let scrollPosition = 0;
const cardWidth = 216; // Including margin-right

nextBtn.addEventListener("click", () => {
  const maxScroll = grid.scrollWidth - grid.clientWidth;
  if (scrollPosition < maxScroll) {
    scrollPosition += cardWidth;
    grid.style.transform = `translateX(-${scrollPosition}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    grid.style.transform = `translateX(-${scrollPosition}px)`;
  }
});
