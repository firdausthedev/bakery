const circles = document.querySelector(".main-circle");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const index1 = document.querySelector(`.main-circle .circle:nth-child(1)`);
const index2 = document.querySelector(`.main-circle .circle:nth-child(2)`);
const index3 = document.querySelector(`.main-circle .circle:nth-child(3)`);

let showcaseIndex = 2;

circles.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    let value = e.target.attributes.value.value;
    if (value == 1) {
      index2.classList.remove("active");
      index3.classList.remove("active");
      index1.classList.add("active");
      showcaseIndex = 1;
    }
    if (value == 2) {
      index3.classList.remove("active");
      index1.classList.remove("active");
      index2.classList.add("active");
      showcaseIndex = 2;
      //   showcaseIndex = 1;
    }
    if (value == 3) {
      index1.classList.remove("active");
      index2.classList.remove("active");
      index3.classList.add("active");
      showcaseIndex = 3;
    }
  }
});

leftArrow.addEventListener("click", (e) => {
  if (showcaseIndex == 1) {
    index1.classList.remove("active");
    index3.classList.add("active");
    showcaseIndex = 3;
  } else if (showcaseIndex == 2) {
    index2.classList.remove("active");
    index1.classList.add("active");
    showcaseIndex = 1;
  } else if (showcaseIndex == 3) {
    index3.classList.remove("active");
    index2.classList.add("active");
    showcaseIndex = 2;
  }
});

rightArrow.addEventListener("click", (e) => {
  if (showcaseIndex == 1) {
    index1.classList.remove("active");
    index2.classList.add("active");
    showcaseIndex = 2;
  } else if (showcaseIndex == 2) {
    index2.classList.remove("active");
    index3.classList.add("active");
    showcaseIndex = 3;
  } else if (showcaseIndex == 3) {
    index3.classList.remove("active");
    index1.classList.add("active");
    showcaseIndex = 1;
  }
});
