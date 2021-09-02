export function evalFunc() {
  const imgWrapper = document.querySelectorAll(".evalPosters__imgWrapper")
  imgWrapper.forEach((el, i) => {
    const source = el.children[0].children[0]
    const img = el.children[0].children[1]
    let rootPath = `dist/assets/poster/`
    if(i+1 < 10) {
      source.srcset = `${rootPath}webp_eval0${i + 1}.webp`
      img.src = `${rootPath}png_eval0${i + 1}.png`
    } else {
      source.srcset = `${rootPath}webp_eval${i + 1}.webp`
      img.src = `${rootPath}png_eval${i + 1}.png`
    }
    img.ariaLabelledBy = `poster${i + 1}`
  })

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
