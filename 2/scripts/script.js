const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const sliderWrapper = document.querySelector('.slider__wrapper');
const slideCount = slides.length;



let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();

});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();

});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
  thisSlide(slideIndex)
}

window.addEventListener('load', () => {
  slide();
  
});

for (let i = 0; i < slideCount; i++) {
  const sliderDot = document.createElement('div');
  sliderDot.classList.add('slider__dot');
  sliderWrapper.append(sliderDot);
  
}


function thisSlide(index) {
  const sliderDots = document.querySelectorAll('.slider__dot');
  sliderDots.forEach(element => element.classList.remove('active__dot'));
  sliderDots[index].classList.add('active__dot');
  
}

const sliderDots = document.querySelectorAll('.slider__dot')

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    slide();
  });
});