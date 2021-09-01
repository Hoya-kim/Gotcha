export function evalFunc () {
  // star paint event
  const starDivision = document.querySelectorAll(
    ".evalPosters__infoWrapper--stars"
  );
  const numOfEvaluate = document.querySelector("#numOfEvaluate");
  const progressbar = document.querySelector(".evalBanner__progressbar");
  const progressbarValue = document.querySelector(
    ".evalBanner__progressbar--value"
  );

  let bannerClose = document.querySelector('.topBanner--closeButton');
  let evalPoster = document.querySelector('.evalPosters__container');
  let commonHeader, commonHeaderPos, evalBanner, evalPos;
  commonHeader = document.querySelector('.header');
  commonHeaderPos = commonHeader.offsetTop;
  evalBanner = document.querySelector('.evalBanner');
  evalPos = evalBanner.offsetTop;

  bannerClose.addEventListener('click', function () {
      commonHeaderPos = commonHeader.offsetTop;
  })

  function bannerFixed() {
      if (window.pageYOffset > commonHeaderPos) {
          evalBanner.classList.add("is-active");
          evalPoster.classList.add("is-active");

      } else {
          evalBanner.classList.remove("is-active");
          evalPoster.classList.remove("is-active");
      }
  }

  document.addEventListener('scroll', bannerFixed);

  starDivision.forEach((el) => {
    const starSpan = el.childNodes[1];
    const star = el.childNodes[3];
    let top = window.pageYOffset + starSpan.getBoundingClientRect().top;
    let left = window.pageXOffset + starSpan.getBoundingClientRect().left;
    let w = starSpan.getBoundingClientRect().width / 10;
    let height = starSpan.getBoundingClientRect().height;

    function pointer(e) {
      let x = e.pageX,
        y = e.pageY;
      for (let i = 0; i < 11; i++) {
        if (
          left + (i - 1) * w < x &&
          x < left + i * w &&
          top < y &&
          y < top + height
        ) {
          star.style.width = i * w + "px";
        }
      }
    }

    function addNum(e) {
      let value = parseInt(numOfEvaluate.innerHTML) + 1;
      numOfEvaluate.innerHTML = value;
      if (value <= 100) {
        progressbar.ariaValueNow = value;
        progressbar.ariaValueText = value;
        progressbarValue.style.width = value + "%";
      }
    }

    starSpan.addEventListener("mousemove", pointer, false);
    star.addEventListener("mousemove", pointer, false);
    star.addEventListener("click", addNum, false);
  });
}