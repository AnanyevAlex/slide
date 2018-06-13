var slides = document.querySelectorAll('.slide-block__list .slide-block__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide-block__slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide-block__slide slide-block__slide--showing';
}

var playing = true;
var pauseButton = document.querySelector('.slide-block__btn--play');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
  if(playing) {
  pauseSlideshow();
  } else {
  playSlideshow();
  }
};

var next = document.querySelector('.slide-block__btn--next');
var previous = document.querySelector('.slide-block__btn--prev');

next.onclick = function() {
  pauseSlideshow();
  nextSlide();
};
previous.onclick = function() {
  pauseSlideshow();
  previousSlide();
};

var controls = document.querySelectorAll('.slide-block__btn');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}
