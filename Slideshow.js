let showNext = document.getElementById("show_next");
let showPrev = document.getElementById("show_prev");
let imgSrc = document.getElementById("img_src");
let index = 0;
let img_1 = "./img/img_1.png";
let img_2 = "./img/img_2.png";
let img_3 = "./img/img_3.png";
let img_4 = "./img/img_4.png";
let img_5 = "./img/img_5.png";

const array = [img_1, img_2, img_3, img_4, img_5];
showPrev.disabled = true;

const showNextBtnClick = () => {
  index++;
  imgSrc.src = array[index];
  showPrev.disabled = false;

  if (index === array.length - 1) {
    showNext.disabled = true;
  }
};

const showPrevBtnClick = () => {
  index--;
  imgSrc.src = array[index];
  showNext.disabled = false;
  if (index === 0) {
    showPrev.disabled = true;
  }
};

showNext.addEventListener("click", showNextBtnClick);
showPrev.addEventListener("click", showPrevBtnClick);
