const circles = document.querySelector(".main-circle");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const index1 = document.querySelector(`.main-circle .circle:nth-child(1)`);
const index2 = document.querySelector(`.main-circle .circle:nth-child(2)`);
const index3 = document.querySelector(`.main-circle .circle:nth-child(3)`);

const stat = document.querySelector("#stats");
const statBreadImage = document.querySelector("#stats .stats-bg");

const features = document.querySelector("#features");

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

let options = {
  threshold: 0.7,
};

let observer1 = new IntersectionObserver(featureAnim, options);
let observer2 = new IntersectionObserver(breadSlide, options);

function featureAnim(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelectorAll("#features .container .lists .list img")
        .forEach((item) => {
          item.style.transform = "scale(1)";
          item.style.opacity = "1";
        });
    }
  });
}

function breadSlide(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      statBreadImage.style.marginLeft = "-200px";
      document.querySelector(
        "#stats .container .col-2 .stat:nth-child(1) .bar span"
      ).style.width = "65%";
      document.querySelector(
        "#stats .container .col-2 .stat:nth-child(2) .bar span"
      ).style.width = "52%";
      document.querySelector(
        "#stats .container .col-2 .stat:nth-child(3) .bar span"
      ).style.width = "74%";
    }
  });
}

observer1.observe(features);
observer2.observe(stat);
