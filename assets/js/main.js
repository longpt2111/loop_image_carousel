const imageWrapper = document.querySelector(".image-wrapper");
const imageItems = document.querySelectorAll(".image-wrapper > *");
const imageLength = imageItems.length;
const perView = 3;
const delay = 2000;
let scrollCounter = 0;

imageWrapper.style.setProperty("--per-view", perView);

for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML("beforeend", imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  scrollCounter++;
  if (scrollCounter === imageLength + 1) {
    clearInterval(autoScroll);
    scrollCounter = 1;
    imageWrapper.style.left = "0";
    imageWrapper.style.transition = "0s";
    autoScroll = setInterval(scrolling, delay);
  }
  const imageWidth =
    document.querySelector(".image-wrapper > :first-child").offsetWidth + 24;
  imageWrapper.style.left = `-${scrollCounter * imageWidth}px`;
  imageWrapper.style.transition = "0.3s";
}
