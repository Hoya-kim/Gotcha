// star paint event
const starDivision = document.querySelectorAll(
  ".evalPosters__infoWrapper--stars"
);

const numOfEvaluate = document.querySelector("#numOfEvaluate");

const progressbar = document.querySelector(".evalBanner__progressbar");

const progressbarValue = document.querySelector(
  ".evalBanner__progressbar--value"
);

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
