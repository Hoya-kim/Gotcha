export function evalFunc() {
  // star paint event
  const starDivision = document.querySelectorAll(
    ".evalPosters__infoWrapper--stars"
  );
  const numOfEvaluate = document.querySelector("#numOfEvaluate");
  const progressbar = document.querySelector(".evalBanner__progressbar");
  const progressbarValue = document.querySelector(
    ".evalBanner__progressbar--value"
  );

  let bannerClose = document.querySelector(".topBanner--closeButton");
  let evalPoster = document.querySelector(".evalPosters__container");
  let commonHeader, commonHeaderPos, evalBanner, evalPos;
  commonHeader = document.querySelector(".header");
  commonHeaderPos = commonHeader.offsetTop;
  evalBanner = document.querySelector(".evalBanner");
  evalPos = evalBanner.offsetTop;

  bannerClose.addEventListener("click", function () {
    commonHeaderPos = commonHeader.offsetTop;
  });

  function bannerFixed() {
    if (window.pageYOffset > commonHeaderPos) {
      evalBanner.classList.add("is-active");
      evalPoster.classList.add("is-active");
    } else {
      evalBanner.classList.remove("is-active");
      evalPoster.classList.remove("is-active");
    }
  }

  document.addEventListener("scroll", bannerFixed);

  starDivision.forEach((el) => {
    let [starSpan, star, ...inputs] = el.children;
    let checkedIdx = 0;
    inputs.forEach((halfStar, i) => {
      halfStar.addEventListener("mouseenter", function (e) {
        star.style.width = (i + 1) * 10 + "%";
      });
      halfStar.addEventListener("click", function (e) {
        checkedIdx = i;
        halfStar.checked = true;
        star.style.width = (i + 1) * 10 + "%";

        let value = parseInt(numOfEvaluate.innerHTML) + 1;
        numOfEvaluate.innerHTML = value;
        if (value <= 100) {
          progressbar.ariaValueNow = value;
          progressbar.ariaValueText = value;
          progressbarValue.style.width = value + "%";
        }
      });
    });

    el.addEventListener("mouseout", function (e) {
      star.style.width = (checkedIdx + 1) * 10 + "%";
    });
  });
}
