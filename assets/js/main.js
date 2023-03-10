const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class Carousel {
  constructor() {
    this.imageWrapper = $(".image-wrapper");
    this.imageItems = $$(".image-wrapper > *");
    this.imageLength = this.imageItems.length;
    this.scrollCounter = 0;
  }

  setImagesPerView(n) {
    this.imageWrapper.style.setProperty("--images-per-view", n);
    this.addCloneItems(n);
  }

  addCloneItems(n) {
    for (let i = 0; i < n; i++) {
      this.imageWrapper.insertAdjacentHTML(
        "beforeend",
        this.imageItems[i].outerHTML
      );
    }
  }

  handleAutoScroll(delay) {
    this.autoScroll = setInterval(() => this.handleScrolling(delay), delay);
  }

  handleScrolling(delay) {
    this.scrollCounter++;
    if (this.scrollCounter === this.imageLength + 1) {
      clearInterval(this.autoScroll);
      this.scrollCounter = 1;
      this.imageWrapper.style.left = "0";
      this.imageWrapper.style.transition = "0s";
      this.handleAutoScroll(delay);
    }
    this.imageWidth = $(".image-wrapper > :first-child").offsetWidth + 24;
    this.imageWrapper.style.left = `-${this.scrollCounter * this.imageWidth}px`;
    this.imageWrapper.style.transition = "0.3s";
  }
}

const carousel = new Carousel();
carousel.setImagesPerView(3);
carousel.handleAutoScroll(2000);
